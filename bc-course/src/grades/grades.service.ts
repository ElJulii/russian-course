import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AuthUser } from '../common/decorators';
import { CoursesService } from '../courses/courses.service';
import { lessonTests, recordLessonCompleted } from '../enrollments/progress';
import { Prisma } from '../generated/prisma/client';
import { AssessmentType, EnrollmentStatus } from '../generated/prisma/enums';
import { PrismaService } from '../prisma/prisma.service';
import {
  bestAttempt,
  gradeAttempt,
  PASSING_GRADE,
  passes,
  Question,
  scoreOf,
  summarizeGrades,
} from './grade-calc';
import {
  AttemptDto,
  CreateAssessmentDto,
  QuestionDto,
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

const questionsOf = (assessment: { questions: Prisma.JsonValue }) =>
  assessment.questions as unknown as Question[];

// Los Decimal de Prisma se serializan como string; la API expone números.
// Los listados solo dicen cuántas preguntas hay; el enunciado se pide aparte.
const toApi = ({ questions, ...a }: AssessmentRow) => ({
  ...a,
  maxScore: a.maxScore.toNumber(),
  weight: a.weight.toNumber(),
  questionCount: (questions as unknown as Question[]).length,
});

interface AttemptRow {
  assessmentId: string;
  correct: number;
  total: number;
}

// Lo que un estudiante lleva en un test: cuántas veces lo intentó y su mejor nota.
function standing(attempts: AttemptRow[], maxScore: number) {
  const best = bestAttempt(attempts);
  return {
    attempts: attempts.length,
    bestScore: best ? scoreOf(best.correct, best.total, maxScore) : null,
    passed: !!best && passes(best.correct, best.total),
  };
}

function groupByAssessment<T extends AttemptRow>(attempts: T[]) {
  const groups = new Map<string, T[]>();
  for (const attempt of attempts) {
    const group = groups.get(attempt.assessmentId);
    if (group) group.push(attempt);
    else groups.set(attempt.assessmentId, [attempt]);
  }
  return groups;
}

// Mejor nota de cada test, para ponderar la nota final del curso.
function bestScores(
  assessments: { id: string; maxScore: number }[],
  attempts: AttemptRow[],
) {
  const groups = groupByAssessment(attempts);
  const scores = new Map<string, number>();
  for (const assessment of assessments) {
    const { bestScore } = standing(
      groups.get(assessment.id) ?? [],
      assessment.maxScore,
    );
    if (bestScore !== null) scores.set(assessment.id, bestScore);
  }
  return scores;
}

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
      data: {
        ...dto,
        questions: this.toStoredQuestions(dto.questions),
        courseId,
      },
      select: ASSESSMENT_FIELDS,
    });
    return toApi(assessment);
  }

  // Quien gestiona el curso ve cuántos estudiantes respondieron cada test; el
  // estudiante, sus intentos y su mejor nota.
  async listAssessments(user: AuthUser, courseId: string) {
    await this.courses.getVisible(user, courseId);
    const enrollment = this.courses.canManage(user)
      ? null
      : await this.getCurrentEnrollment(user, courseId);

    const [assessments, attempts] = await Promise.all([
      this.prisma.assessment.findMany({
        where: { courseId },
        select: ASSESSMENT_FIELDS,
        orderBy: [
          { dueDate: { sort: 'asc', nulls: 'last' } },
          { createdAt: 'asc' },
        ],
      }),
      this.prisma.attempt.findMany({
        where: {
          assessment: { courseId },
          ...(enrollment
            ? { enrollmentId: enrollment.id }
            : { enrollment: { status: { not: EnrollmentStatus.DROPPED } } }),
        },
        select: {
          assessmentId: true,
          enrollmentId: true,
          correct: true,
          total: true,
        },
      }),
    ]);
    const byAssessment = groupByAssessment(attempts);

    return assessments.map((row) => {
      const assessment = toApi(row);
      const own = byAssessment.get(assessment.id) ?? [];
      return enrollment
        ? { ...assessment, ...standing(own, assessment.maxScore) }
        : {
            ...assessment,
            attempted: new Set(own.map((a) => a.enrollmentId)).size,
          };
    });
  }

  // Enunciado completo. El estudiante recibe las preguntas sin la respuesta
  // correcta, y bloqueadas mientras no le toque ese test.
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
    const questions = questionsOf(row);

    if (this.courses.canManage(user)) {
      return {
        ...base,
        questions,
        viewer: {
          canManage: true,
          lockedReason: null,
          attempts: 0,
          bestScore: null,
          passed: false,
        },
      };
    }

    const enrollment = await this.getCurrentEnrollment(user, courseId);
    const [lockedReason, attempts] = await Promise.all([
      this.lockedReason(assessment, enrollment.id),
      this.prisma.attempt.findMany({
        where: { assessmentId, enrollmentId: enrollment.id },
        select: { assessmentId: true, correct: true, total: true },
      }),
    ]);
    return {
      ...base,
      questions: lockedReason
        ? []
        : questions.map(({ prompt, options }) => ({ prompt, options })),
      viewer: {
        canManage: false,
        lockedReason,
        ...standing(attempts, base.maxScore),
      },
    };
  }

  // Las preguntas se pueden corregir aunque ya haya intentos: cada intento
  // guarda sus aciertos y no se vuelve a calificar.
  async updateAssessment(
    user: AuthUser,
    assessmentId: string,
    dto: UpdateAssessmentDto,
  ) {
    const current = await this.getManageableAssessment(user, assessmentId);
    await this.assertLessonInCourse(current.courseId, dto.lessonId);
    if (dto.weight !== undefined) {
      await this.assertWeightFits(current.courseId, dto.weight, assessmentId);
    }
    const assessment = await this.prisma.assessment.update({
      where: { id: assessmentId },
      data: {
        ...dto,
        questions: dto.questions && this.toStoredQuestions(dto.questions),
      },
      select: ASSESSMENT_FIELDS,
    });
    return toApi(assessment);
  }

  async removeAssessment(user: AuthUser, assessmentId: string) {
    await this.getManageableAssessment(user, assessmentId);
    const attempts = await this.prisma.attempt.count({
      where: { assessmentId },
    });
    if (attempts > 0) {
      throw new ConflictException(
        `La evaluación ya tiene ${attempts} intento(s) de estudiantes y no se puede eliminar`,
      );
    }
    await this.prisma.assessment.delete({ where: { id: assessmentId } });
  }

  // --- Intentos ---

  // Corrige el intento al momento y devuelve, pregunta por pregunta, cuál era
  // la opción correcta y su explicación. Se puede repetir sin límite; aprobar
  // el test de una estación la completa.
  async attempt(user: AuthUser, assessmentId: string, dto: AttemptDto) {
    const assessment = await this.prisma.assessment.findUnique({
      where: { id: assessmentId },
      select: {
        id: true,
        courseId: true,
        lessonId: true,
        type: true,
        maxScore: true,
        questions: true,
      },
    });
    if (!assessment) throw new NotFoundException('Evaluación no encontrada');
    const enrollment = await this.getCurrentEnrollment(
      user,
      assessment.courseId,
    );

    const questions = questionsOf(assessment);
    if (questions.length === 0) {
      throw new BadRequestException(
        'Esta evaluación todavía no tiene preguntas',
      );
    }
    if (dto.answers.length !== questions.length) {
      throw new BadRequestException(
        `Responde las ${questions.length} preguntas antes de enviar`,
      );
    }
    if (dto.answers.some((a, i) => a >= questions[i].options.length)) {
      throw new BadRequestException('Hay una respuesta que no es una opción');
    }
    const lockedReason = await this.lockedReason(assessment, enrollment.id);
    if (lockedReason) throw new ConflictException(lockedReason);

    const { correct, total, results } = gradeAttempt(questions, dto.answers);
    const passed = passes(correct, total);
    const maxScore = assessment.maxScore.toNumber();
    const lessonId = assessment.lessonId;

    return this.prisma.$transaction(async (tx) => {
      await tx.attempt.create({
        data: {
          assessmentId,
          enrollmentId: enrollment.id,
          answers: dto.answers,
          correct,
          total,
        },
      });
      const attempts = await tx.attempt.findMany({
        where: { assessmentId, enrollmentId: enrollment.id },
        select: { assessmentId: true, correct: true, total: true },
      });

      // La estación se completa cuando ya no le queda ningún test por aprobar.
      let lessonCompleted = false;
      if (passed && lessonId) {
        const done = await tx.lessonProgress.findUnique({
          where: {
            enrollmentId_lessonId: { enrollmentId: enrollment.id, lessonId },
          },
          select: { id: true },
        });
        const { pending } = await lessonTests(tx, enrollment.id, lessonId);
        if (!done && pending.length === 0) {
          await recordLessonCompleted(tx, enrollment, lessonId);
          lessonCompleted = true;
        }
      }

      // `passed` es de este intento; `bestScore`, de todos los que lleva.
      const { bestScore } = standing(attempts, maxScore);
      return {
        correct,
        total,
        score: scoreOf(correct, total, maxScore),
        maxScore,
        passed,
        passingGrade: PASSING_GRADE,
        results,
        lessonCompleted,
        attempts: attempts.length,
        bestScore,
      };
    });
  }

  // --- Notas ---

  // Boletín del estudiante: su mejor nota en cada test y la nota final de
  // cada curso.
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
        attempts: {
          select: {
            assessmentId: true,
            correct: true,
            total: true,
            createdAt: true,
          },
          orderBy: { createdAt: 'asc' },
        },
      },
      orderBy: { enrolledAt: 'desc' },
    });

    return enrollments.map(({ course, attempts, ...enrollment }) => {
      const assessments = course.assessments.map(toApi);
      const byAssessment = groupByAssessment(attempts);
      return {
        enrollmentId: enrollment.id,
        status: enrollment.status,
        course: { id: course.id, title: course.title, level: course.level },
        assessments: assessments.map((a) => {
          const own = byAssessment.get(a.id) ?? [];
          return {
            ...a,
            ...standing(own, a.maxScore),
            lastAttemptAt: own.at(-1)?.createdAt ?? null,
          };
        }),
        summary: summarizeGrades(
          assessments,
          bestScores(assessments, attempts),
        ),
      };
    });
  }

  // Libro de calificaciones: matriz estudiantes × evaluaciones con ranking.
  async gradebook(user: AuthUser, courseId: string) {
    await this.courses.getManageable(user, courseId);
    const [assessmentRows, enrollments] = await Promise.all([
      this.prisma.assessment.findMany({
        where: { courseId },
        select: ASSESSMENT_FIELDS,
        orderBy: { createdAt: 'asc' },
      }),
      this.prisma.enrollment.findMany({
        where: { courseId, status: { not: EnrollmentStatus.DROPPED } },
        select: {
          id: true,
          status: true,
          student: { select: { id: true, name: true, email: true } },
          attempts: {
            select: { assessmentId: true, correct: true, total: true },
          },
        },
      }),
    ]);
    const assessments = assessmentRows.map(toApi);

    const students = enrollments
      .map(({ attempts, student, ...enrollment }) => {
        const scores = bestScores(assessments, attempts);
        return {
          enrollmentId: enrollment.id,
          status: enrollment.status,
          student,
          scores: Object.fromEntries(
            assessments.map((a) => [a.id, scores.get(a.id) ?? null]),
          ),
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
  // en SQL sobre el mejor intento de cada estudiante: eso no se puede expresar
  // con groupBy de Prisma.
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
            COUNT(b."percent")::int AS "graded",
            ROUND(AVG(b."percent"), 2)::float AS "avgPercent",
            ROUND(MIN(b."percent"), 2)::float AS "minPercent",
            ROUND(MAX(b."percent"), 2)::float AS "maxPercent",
            ROUND(
              100.0 * COUNT(b."percent") FILTER (
                WHERE b."percent" >= ${PASSING_GRADE}
              ) / NULLIF(COUNT(b."percent"), 0),
              2
            )::float AS "passRate"
          FROM "Assessment" a
          LEFT JOIN (
            SELECT
              t."assessmentId",
              MAX(100.0 * t."correct" / t."total") AS "percent"
            FROM "Attempt" t
            JOIN "Enrollment" e
              ON e."id" = t."enrollmentId" AND e."status" <> 'DROPPED'
            WHERE t."total" > 0
            GROUP BY t."assessmentId", t."enrollmentId"
          ) b ON b."assessmentId" = a."id"
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

  private async getCurrentEnrollment(user: AuthUser, courseId: string) {
    const enrollment = await this.prisma.enrollment.findUnique({
      where: { studentId_courseId: { studentId: user.id, courseId } },
      select: { id: true, status: true, courseId: true },
    });
    if (!enrollment || enrollment.status === EnrollmentStatus.DROPPED) {
      throw new ForbiddenException(
        'Debes estar inscrito en el curso para ver sus evaluaciones',
      );
    }
    return enrollment;
  }

  // El examen se abre al completar todas las estaciones; el test de una
  // estación, al completar las anteriores.
  private async lockedReason(
    assessment: {
      type: AssessmentType;
      courseId: string;
      lessonId: string | null;
    },
    enrollmentId: string,
  ) {
    const notDone = { progress: { none: { enrollmentId } } };
    if (assessment.type === AssessmentType.EXAM) {
      const pending = await this.prisma.lesson.count({
        where: { courseId: assessment.courseId, ...notDone },
      });
      return pending === 0
        ? null
        : `El examen se abre cuando completes todas las estaciones; te faltan ${pending}`;
    }
    if (!assessment.lessonId) return null;
    const lesson = await this.prisma.lesson.findUnique({
      where: { id: assessment.lessonId },
      select: { order: true },
    });
    if (!lesson) return null;
    const previous = await this.prisma.lesson.findFirst({
      where: {
        courseId: assessment.courseId,
        order: { lt: lesson.order },
        ...notDone,
      },
      select: { order: true, title: true },
      orderBy: { order: 'asc' },
    });
    return previous
      ? `Este test se abre cuando completes la estación ${previous.order}: «${previous.title}»`
      : null;
  }

  // Pasa las preguntas validadas a JSON plano y comprueba que la respuesta
  // correcta sea una de las opciones.
  private toStoredQuestions(questions: QuestionDto[] = []) {
    return questions.map(({ prompt, options, answer, explanation }, index) => {
      if (answer >= options.length) {
        throw new BadRequestException(
          `La pregunta ${index + 1} marca como correcta una opción que no existe`,
        );
      }
      return {
        prompt: prompt.trim(),
        options: options.map((option) => option.trim()),
        answer,
        ...(explanation?.trim() && { explanation: explanation.trim() }),
      };
    });
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
