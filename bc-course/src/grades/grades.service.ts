import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AuthUser } from '../common/decorators';
import { hasPermission, Permission } from '../common/rbac/permissions';
import { CoursesService } from '../courses/courses.service';
import { Prisma } from '../generated/prisma/client';
import { AssessmentType, EnrollmentStatus } from '../generated/prisma/enums';
import { PrismaService } from '../prisma/prisma.service';
import { PASSING_GRADE, summarizeGrades } from './grade-calc';
import {
  CreateAssessmentDto,
  GradeDto,
  SubmitDto,
  UpdateAssessmentDto,
} from './grades.dto';

const ASSESSMENT_FIELDS = {
  id: true,
  title: true,
  type: true,
  maxScore: true,
  weight: true,
  dueDate: true,
  lessonId: true,
  questions: true,
} satisfies Prisma.AssessmentSelect;

type AssessmentRow = Prisma.AssessmentGetPayload<{
  select: typeof ASSESSMENT_FIELDS;
}>;

// Los Decimal de Prisma se serializan como string; la API expone números.
// Los listados solo dicen cuántos ejercicios hay; el enunciado se pide aparte.
const toApi = ({ questions, ...a }: AssessmentRow) => ({
  ...a,
  maxScore: a.maxScore.toNumber(),
  weight: a.weight.toNumber(),
  questionCount: questions?.length ?? 0,
});

const SUBMISSION_FIELDS = {
  answers: true,
  submittedAt: true,
} satisfies Prisma.SubmissionSelect;

const GRADE_FIELDS = {
  score: true,
  feedback: true,
  gradedAt: true,
} satisfies Prisma.GradeSelect;

const gradeToApi = (
  grade?: Prisma.GradeGetPayload<{ select: typeof GRADE_FIELDS }> | null,
) => (grade ? { ...grade, score: grade.score.toNumber() } : null);

export interface AssessmentStatsRow {
  id: string;
  title: string;
  type: string;
  weight: number;
  graded: number;
  avgPercent: number | null;
  minPercent: number | null;
  maxPercent: number | null;
  passRate: number | null;
}

@Injectable()
export class GradesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly courses: CoursesService,
  ) {}

  // --- Evaluaciones ---

  async createAssessment(
    user: AuthUser,
    courseId: string,
    dto: CreateAssessmentDto,
  ) {
    await this.courses.getManageable(user, courseId);
    await this.assertLessonInCourse(courseId, dto.lessonId);
    await this.assertWeightFits(courseId, dto.weight);
    const assessment = await this.prisma.assessment.create({
      data: { ...dto, courseId },
      select: ASSESSMENT_FIELDS,
    });
    return toApi(assessment);
  }

  // Quien gestiona el curso ve cuántas entregas esperan nota; el estudiante,
  // el estado de la suya.
  async listAssessments(user: AuthUser, courseId: string) {
    await this.courses.getVisible(user, courseId);
    const enrollment = this.courses.canGrade(user)
      ? null
      : await this.getCurrentEnrollment(user, courseId);
    const current = enrollment
      ? { enrollmentId: enrollment.id }
      : { enrollment: this.courses.gradingScope(user) };

    const [assessments, submissions, grades] = await Promise.all([
      this.prisma.assessment.findMany({
        where: { courseId },
        select: ASSESSMENT_FIELDS,
        orderBy: [
          { dueDate: { sort: 'asc', nulls: 'last' } },
          { createdAt: 'asc' },
        ],
      }),
      this.prisma.submission.findMany({
        where: { assessment: { courseId }, ...current },
        select: { assessmentId: true, enrollmentId: true, submittedAt: true },
      }),
      this.prisma.grade.findMany({
        where: { assessment: { courseId }, ...current },
        select: { assessmentId: true, enrollmentId: true, score: true },
      }),
    ]);
    const graded = new Map(
      grades.map((g) => [`${g.assessmentId}:${g.enrollmentId}`, g.score]),
    );

    return assessments.map((assessment) => {
      const own = submissions.filter((s) => s.assessmentId === assessment.id);
      if (enrollment) {
        return {
          ...toApi(assessment),
          submittedAt: own[0]?.submittedAt ?? null,
          score:
            graded.get(`${assessment.id}:${enrollment.id}`)?.toNumber() ?? null,
        };
      }
      return {
        ...toApi(assessment),
        submitted: own.length,
        pendingReview: own.filter(
          (s) => !graded.has(`${s.assessmentId}:${s.enrollmentId}`),
        ).length,
      };
    });
  }

  // Enunciado completo. Al estudiante se le añade su entrega y su nota; el
  // examen final no muestra las preguntas hasta completar todas las lecciones.
  async findAssessment(user: AuthUser, assessmentId: string) {
    const assessment = await this.prisma.assessment.findUnique({
      where: { id: assessmentId },
      select: {
        ...ASSESSMENT_FIELDS,
        instructions: true,
        courseId: true,
        course: { select: { id: true, title: true, level: true } },
        lesson: { select: { id: true, title: true, order: true } },
      },
    });
    if (!assessment) throw new NotFoundException('Evaluación no encontrada');
    const { courseId, course, lesson, instructions, ...row } = assessment;
    await this.courses.getVisible(user, courseId);
    const base = { ...toApi(row), instructions, course, lesson };

    if (this.courses.canGrade(user)) {
      return {
        ...base,
        questions: row.questions ?? [],
        viewer: {
          canGrade: true,
          lockedReason: null,
          submission: null,
          grade: null,
        },
      };
    }

    const enrollment = await this.getCurrentEnrollment(user, courseId);
    const key = {
      assessmentId_enrollmentId: { assessmentId, enrollmentId: enrollment.id },
    };
    const [lockedReason, submission, grade] = await Promise.all([
      this.lockedReason(assessment, enrollment.id),
      this.prisma.submission.findUnique({
        where: key,
        select: SUBMISSION_FIELDS,
      }),
      this.prisma.grade.findUnique({ where: key, select: GRADE_FIELDS }),
    ]);
    return {
      ...base,
      questions: lockedReason ? [] : (row.questions ?? []),
      viewer: {
        canGrade: false,
        lockedReason,
        submission,
        grade: gradeToApi(grade),
      },
    };
  }

  async updateAssessment(
    user: AuthUser,
    assessmentId: string,
    dto: UpdateAssessmentDto,
  ) {
    const current = await this.getManageableAssessment(user, assessmentId);
    await this.assertLessonInCourse(current.courseId, dto.lessonId);
    if (
      dto.questions !== undefined &&
      JSON.stringify(dto.questions) !== JSON.stringify(current.questions ?? [])
    ) {
      const submissions = await this.prisma.submission.count({
        where: { assessmentId },
      });
      if (submissions > 0) {
        throw new ConflictException(
          `Ya hay ${submissions} entrega(s); los ejercicios no se pueden cambiar porque las respuestas dejarían de corresponder`,
        );
      }
    }
    if (dto.weight !== undefined) {
      await this.assertWeightFits(current.courseId, dto.weight, assessmentId);
    }
    if (dto.maxScore !== undefined) {
      const { _max } = await this.prisma.grade.aggregate({
        where: { assessmentId },
        _max: { score: true },
      });
      if (_max.score?.greaterThan(dto.maxScore)) {
        throw new ConflictException(
          `Ya hay calificaciones de hasta ${_max.score.toString()} puntos; maxScore no puede ser menor`,
        );
      }
    }
    const assessment = await this.prisma.assessment.update({
      where: { id: assessmentId },
      data: dto,
      select: ASSESSMENT_FIELDS,
    });
    return toApi(assessment);
  }

  async removeAssessment(user: AuthUser, assessmentId: string) {
    await this.getManageableAssessment(user, assessmentId);
    const [grades, submissions] = await Promise.all([
      this.prisma.grade.count({ where: { assessmentId } }),
      this.prisma.submission.count({ where: { assessmentId } }),
    ]);
    if (grades > 0) {
      throw new ConflictException(
        `La evaluación tiene ${grades} calificación(es) registrada(s) y no se puede eliminar`,
      );
    }
    if (submissions > 0) {
      throw new ConflictException(
        `La evaluación tiene ${submissions} entrega(s) de estudiantes y no se puede eliminar`,
      );
    }
    await this.prisma.assessment.delete({ where: { id: assessmentId } });
  }

  // --- Entregas ---

  // El estudiante puede corregir su entrega hasta que el profe la califica.
  async submit(user: AuthUser, assessmentId: string, dto: SubmitDto) {
    const assessment = await this.prisma.assessment.findUnique({
      where: { id: assessmentId },
      select: { id: true, courseId: true, type: true, questions: true },
    });
    if (!assessment) throw new NotFoundException('Evaluación no encontrada');
    const enrollment = await this.getCurrentEnrollment(
      user,
      assessment.courseId,
    );

    const questions = assessment.questions ?? [];
    if (questions.length === 0) {
      throw new BadRequestException(
        'Esta evaluación no se responde en la plataforma',
      );
    }
    if (dto.answers.length !== questions.length) {
      throw new BadRequestException(
        `Se esperan ${questions.length} respuestas, una por ejercicio`,
      );
    }
    const answers = dto.answers.map((answer) => answer.trim());
    if (answers.every((answer) => answer === '')) {
      throw new BadRequestException('Responde al menos un ejercicio');
    }
    const lockedReason = await this.lockedReason(assessment, enrollment.id);
    if (lockedReason) throw new ConflictException(lockedReason);

    const key = {
      assessmentId_enrollmentId: { assessmentId, enrollmentId: enrollment.id },
    };
    const graded = await this.prisma.grade.findUnique({
      where: key,
      select: { id: true },
    });
    if (graded) {
      throw new ConflictException(
        'Tu entrega ya fue calificada y no se puede cambiar',
      );
    }
    return this.prisma.submission.upsert({
      where: key,
      create: { assessmentId, enrollmentId: enrollment.id, answers },
      update: { answers, submittedAt: new Date() },
      select: SUBMISSION_FIELDS,
    });
  }

  // Bandeja del profe: primero lo que espera nota, luego lo calificado y al
  // final quienes no han entregado.
  async listSubmissions(user: AuthUser, assessmentId: string) {
    const assessment = await this.getGradableAssessment(user, assessmentId);
    const enrollments = await this.prisma.enrollment.findMany({
      where: {
        courseId: assessment.courseId,
        ...this.courses.gradingScope(user),
      },
      select: {
        id: true,
        student: { select: { id: true, name: true, email: true } },
        submissions: { where: { assessmentId }, select: SUBMISSION_FIELDS },
        grades: { where: { assessmentId }, select: GRADE_FIELDS },
      },
    });
    const entries = enrollments.map(({ id, student, submissions, grades }) => ({
      enrollmentId: id,
      student,
      submission: submissions[0] ?? null,
      grade: gradeToApi(grades[0]),
    }));
    const priority = (entry: (typeof entries)[number]) =>
      !entry.submission ? 2 : entry.grade ? 1 : 0;

    return {
      assessment: {
        id: assessment.id,
        title: assessment.title,
        type: assessment.type,
        maxScore: assessment.maxScore.toNumber(),
        instructions: assessment.instructions,
        questions: assessment.questions ?? [],
      },
      entries: entries.sort(
        (a, b) =>
          priority(a) - priority(b) ||
          a.student.name.localeCompare(b.student.name),
      ),
    };
  }

  // --- Calificaciones ---

  async gradeStudent(
    user: AuthUser,
    assessmentId: string,
    studentId: string,
    dto: GradeDto,
  ) {
    const assessment = await this.getGradableAssessment(user, assessmentId);
    if (assessment.maxScore.lessThan(dto.score)) {
      throw new BadRequestException(
        `La nota no puede superar el máximo de la evaluación (${assessment.maxScore.toString()})`,
      );
    }
    const enrollment = await this.prisma.enrollment.findUnique({
      where: {
        studentId_courseId: { studentId, courseId: assessment.courseId },
      },
      select: { id: true, status: true, evaluatorId: true },
    });
    if (!enrollment || enrollment.status === EnrollmentStatus.DROPPED) {
      throw new BadRequestException(
        'El estudiante no tiene una inscripción vigente en este curso',
      );
    }
    if (
      enrollment.evaluatorId !== user.id &&
      !hasPermission(user.role, Permission.GradeManageAny)
    ) {
      throw new ForbiddenException(
        'Este estudiante eligió a otro profe para que lo evalúe',
      );
    }
    // Lo que se responde en la plataforma solo se califica una vez entregado.
    if (assessment.questions?.length) {
      const submission = await this.prisma.submission.findUnique({
        where: {
          assessmentId_enrollmentId: {
            assessmentId,
            enrollmentId: enrollment.id,
          },
        },
        select: { id: true },
      });
      if (!submission) {
        throw new BadRequestException(
          'El estudiante todavía no ha entregado esta evaluación; solo se califica lo entregado',
        );
      }
    }

    const data = { ...dto, gradedById: user.id };
    const grade = await this.prisma.grade.upsert({
      where: {
        assessmentId_enrollmentId: {
          assessmentId,
          enrollmentId: enrollment.id,
        },
      },
      create: { ...data, assessmentId, enrollmentId: enrollment.id },
      update: { ...data, gradedAt: new Date() },
    });
    return { ...grade, score: grade.score.toNumber() };
  }

  // Boletín del estudiante: sus notas y la nota final de cada curso.
  async myReport(user: AuthUser) {
    const enrollments = await this.prisma.enrollment.findMany({
      where: { studentId: user.id },
      select: {
        id: true,
        status: true,
        course: {
          select: {
            id: true,
            title: true,
            level: true,
            assessments: {
              select: ASSESSMENT_FIELDS,
              orderBy: { createdAt: 'asc' },
            },
          },
        },
        grades: {
          select: {
            assessmentId: true,
            score: true,
            feedback: true,
            gradedAt: true,
          },
        },
        submissions: { select: { assessmentId: true, submittedAt: true } },
      },
      orderBy: { enrolledAt: 'desc' },
    });

    return enrollments.map(({ course, grades, submissions, ...enrollment }) => {
      const assessments = course.assessments.map(toApi);
      const byAssessment = new Map(grades.map((g) => [g.assessmentId, g]));
      const submittedAt = new Map(
        submissions.map((s) => [s.assessmentId, s.submittedAt]),
      );
      return {
        enrollmentId: enrollment.id,
        status: enrollment.status,
        course: { id: course.id, title: course.title, level: course.level },
        assessments: assessments.map((a) => {
          const grade = byAssessment.get(a.id);
          return {
            ...a,
            score: grade?.score.toNumber() ?? null,
            feedback: grade?.feedback ?? null,
            gradedAt: grade?.gradedAt ?? null,
            submittedAt: submittedAt.get(a.id) ?? null,
          };
        }),
        summary: summarizeGrades(
          assessments,
          new Map(grades.map((g) => [g.assessmentId, g.score.toNumber()])),
        ),
      };
    });
  }

  // Libro de calificaciones: matriz estudiantes × evaluaciones con ranking.
  // El profe solo ve a los estudiantes que lo eligieron.
  async gradebook(user: AuthUser, courseId: string) {
    await this.courses.getGradable(user, courseId);
    const [assessmentRows, enrollments] = await Promise.all([
      this.prisma.assessment.findMany({
        where: { courseId },
        select: ASSESSMENT_FIELDS,
        orderBy: { createdAt: 'asc' },
      }),
      this.prisma.enrollment.findMany({
        where: { courseId, ...this.courses.gradingScope(user) },
        select: {
          id: true,
          status: true,
          student: { select: { id: true, name: true, email: true } },
          evaluator: { select: { id: true, name: true } },
          grades: { select: { assessmentId: true, score: true } },
          submissions: { select: { assessmentId: true } },
        },
      }),
    ]);
    const assessments = assessmentRows.map(toApi);

    const students = enrollments
      .map(({ grades, submissions, student, evaluator, ...enrollment }) => {
        const scores = new Map(
          grades.map((g) => [g.assessmentId, g.score.toNumber()]),
        );
        return {
          enrollmentId: enrollment.id,
          status: enrollment.status,
          student,
          evaluator,
          scores: Object.fromEntries(
            assessments.map((a) => [a.id, scores.get(a.id) ?? null]),
          ),
          submitted: submissions.map((s) => s.assessmentId),
          ...summarizeGrades(assessments, scores),
        };
      })
      .sort(
        (a, b) =>
          b.finalGrade - a.finalGrade ||
          a.student.name.localeCompare(b.student.name),
      )
      // Los empates comparten posición (1, 2, 2, 4).
      .map((row, _index, rows) => ({
        rank:
          rows.findIndex((other) => other.finalGrade === row.finalGrade) + 1,
        ...row,
      }));

    const average = (values: number[]) =>
      values.length === 0
        ? null
        : Math.round(
            (values.reduce((sum, v) => sum + v, 0) / values.length) * 100,
          ) / 100;

    return {
      assessments,
      students,
      classSummary: {
        students: students.length,
        averageFinalGrade: average(students.map((s) => s.finalGrade)),
        passed: students.filter((s) => s.passed).length,
        passingGrade: PASSING_GRADE,
      },
    };
  }

  // Estadísticas agregadas del curso. La distribución por evaluación se calcula
  // en SQL: normalizar cada nota a porcentaje y filtrar por umbral dentro del
  // agregado no se puede expresar con groupBy de Prisma.
  async courseStats(user: AuthUser, courseId: string) {
    await this.courses.getManageable(user, courseId);
    const [byStatus, totalLessons, lessonCompletion, assessments] =
      await Promise.all([
        this.prisma.enrollment.groupBy({
          by: ['status'],
          where: { courseId },
          _count: { _all: true },
        }),
        this.prisma.lesson.count({ where: { courseId } }),
        this.prisma.lesson.findMany({
          where: { courseId },
          select: {
            id: true,
            title: true,
            order: true,
            _count: {
              select: {
                progress: {
                  where: {
                    enrollment: { status: { not: EnrollmentStatus.DROPPED } },
                  },
                },
              },
            },
          },
          orderBy: { order: 'asc' },
        }),
        this.prisma.$queryRaw<AssessmentStatsRow[]>`
          SELECT
            a."id",
            a."title",
            a."type"::text AS "type",
            a."weight"::float AS "weight",
            COUNT(g."id")::int AS "graded",
            ROUND(AVG(g."score" / a."maxScore" * 100), 2)::float AS "avgPercent",
            ROUND(MIN(g."score" / a."maxScore" * 100), 2)::float AS "minPercent",
            ROUND(MAX(g."score" / a."maxScore" * 100), 2)::float AS "maxPercent",
            ROUND(
              100.0 * COUNT(g."id") FILTER (
                WHERE g."score" / a."maxScore" * 100 >= ${PASSING_GRADE}
              ) / NULLIF(COUNT(g."id"), 0),
              2
            )::float AS "passRate"
          FROM "Assessment" a
          LEFT JOIN (
            "Grade" g
            JOIN "Enrollment" e
              ON e."id" = g."enrollmentId" AND e."status" <> 'DROPPED'
          ) ON g."assessmentId" = a."id"
          WHERE a."courseId" = ${courseId}
          GROUP BY a."id"
          ORDER BY a."createdAt" ASC
        `,
      ]);

    const counts = Object.fromEntries(
      byStatus.map((row) => [row.status, row._count._all]),
    ) as Partial<Record<EnrollmentStatus, number>>;
    const current = (counts.ACTIVE ?? 0) + (counts.COMPLETED ?? 0);

    return {
      enrollments: {
        active: counts.ACTIVE ?? 0,
        completed: counts.COMPLETED ?? 0,
        dropped: counts.DROPPED ?? 0,
        completionRate:
          current === 0
            ? null
            : Math.round(((counts.COMPLETED ?? 0) / current) * 100),
      },
      totalLessons,
      // Cuántos estudiantes vigentes terminaron cada lección: muestra dónde se atascan.
      lessonCompletion: lessonCompletion.map(({ _count, ...lesson }) => ({
        ...lesson,
        completedBy: _count.progress,
      })),
      assessments,
    };
  }

  // --- Reglas compartidas ---

  private async getManageableAssessment(user: AuthUser, assessmentId: string) {
    const assessment = await this.prisma.assessment.findUnique({
      where: { id: assessmentId },
    });
    if (!assessment) throw new NotFoundException('Evaluación no encontrada');
    await this.courses.getManageable(user, assessment.courseId);
    return assessment;
  }

  private async getGradableAssessment(user: AuthUser, assessmentId: string) {
    const assessment = await this.prisma.assessment.findUnique({
      where: { id: assessmentId },
    });
    if (!assessment) throw new NotFoundException('Evaluación no encontrada');
    await this.courses.getGradable(user, assessment.courseId);
    return assessment;
  }

  private async getCurrentEnrollment(user: AuthUser, courseId: string) {
    const enrollment = await this.prisma.enrollment.findUnique({
      where: { studentId_courseId: { studentId: user.id, courseId } },
      select: { id: true, status: true },
    });
    if (!enrollment || enrollment.status === EnrollmentStatus.DROPPED) {
      throw new ForbiddenException(
        'Debes estar inscrito en el curso para ver sus evaluaciones',
      );
    }
    return enrollment;
  }

  // El examen se abre al completar todas las lecciones del curso.
  private async lockedReason(
    assessment: { type: AssessmentType; courseId: string },
    enrollmentId: string,
  ) {
    if (assessment.type !== AssessmentType.EXAM) return null;
    const pending = await this.prisma.lesson.count({
      where: {
        courseId: assessment.courseId,
        progress: { none: { enrollmentId } },
      },
    });
    return pending === 0
      ? null
      : `El examen se abre cuando completes todas las estaciones; te faltan ${pending}`;
  }

  private async assertWeightFits(
    courseId: string,
    weight: number,
    excludeAssessmentId?: string,
  ) {
    const { _sum } = await this.prisma.assessment.aggregate({
      where: { courseId, id: { not: excludeAssessmentId } },
      _sum: { weight: true },
    });
    const used = _sum.weight ?? new Prisma.Decimal(0);
    if (used.plus(weight).greaterThan(100)) {
      throw new BadRequestException(
        `Los pesos del curso no pueden superar 100: ya hay ${used.toString()} asignado, quedan ${new Prisma.Decimal(100).minus(used).toString()} disponibles`,
      );
    }
  }

  private async assertLessonInCourse(courseId: string, lessonId?: string) {
    if (!lessonId) return;
    const lesson = await this.prisma.lesson.findFirst({
      where: { id: lessonId, courseId },
      select: { id: true },
    });
    if (!lesson) {
      throw new BadRequestException('lessonId no pertenece a este curso');
    }
  }
}
