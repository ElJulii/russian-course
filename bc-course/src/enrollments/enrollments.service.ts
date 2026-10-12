import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AuthUser } from '../common/decorators';
import { PaginationDto, paginate } from '../common/pagination';
import { CoursesService } from '../courses/courses.service';
import {
  CourseStatus,
  EnrollmentStatus,
  Role,
} from '../generated/prisma/enums';
import { PrismaService } from '../prisma/prisma.service';

function progressOf(completed: number, total: number) {
  return {
    completedLessons: completed,
    totalLessons: total,
    percent: total === 0 ? 0 : Math.round((completed / total) * 100),
  };
}

@Injectable()
export class EnrollmentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly courses: CoursesService,
  ) {}

  // Al inscribirse, el estudiante elige qué profe lo evaluará en el curso.
  async enroll(user: AuthUser, courseId: string, evaluatorId: string) {
    const course = await this.prisma.course.findUnique({
      where: { id: courseId },
      select: { status: true },
    });
    if (!course || course.status === CourseStatus.DRAFT) {
      throw new NotFoundException('Curso no encontrado');
    }
    if (course.status === CourseStatus.ARCHIVED) {
      throw new ConflictException(
        'El curso está archivado y no admite nuevas inscripciones',
      );
    }

    const key = { studentId_courseId: { studentId: user.id, courseId } };
    const existing = await this.prisma.enrollment.findUnique({ where: key });
    if (existing?.status === EnrollmentStatus.ACTIVE) {
      throw new ConflictException('Ya estás inscrito en este curso');
    }
    if (existing?.status === EnrollmentStatus.COMPLETED) {
      throw new ConflictException('Ya completaste este curso');
    }
    const evaluator = await this.prisma.user.findUnique({
      where: { id: evaluatorId },
      select: { role: true, isActive: true },
    });
    if (!evaluator?.isActive || evaluator.role !== Role.INSTRUCTOR) {
      throw new BadRequestException(
        'Elige un profe activo para que te evalúe en este curso',
      );
    }
    // Quien se dio de baja retoma el curso conservando su progreso y sus
    // notas, y puede cambiar de profe.
    return this.prisma.enrollment.upsert({
      where: key,
      create: { studentId: user.id, courseId, evaluatorId },
      update: { status: EnrollmentStatus.ACTIVE, evaluatorId },
    });
  }

  async drop(user: AuthUser, enrollmentId: string) {
    const enrollment = await this.prisma.enrollment.findUnique({
      where: { id: enrollmentId },
    });
    if (!enrollment || enrollment.studentId !== user.id) {
      throw new NotFoundException('Inscripción no encontrada');
    }
    if (enrollment.status !== EnrollmentStatus.ACTIVE) {
      throw new ConflictException(
        'Solo puedes darte de baja de una inscripción activa',
      );
    }
    return this.prisma.enrollment.update({
      where: { id: enrollmentId },
      data: { status: EnrollmentStatus.DROPPED },
    });
  }

  async listMine(user: AuthUser) {
    const enrollments = await this.prisma.enrollment.findMany({
      where: { studentId: user.id },
      select: {
        id: true,
        status: true,
        enrolledAt: true,
        completedAt: true,
        evaluator: { select: { name: true } },
        course: {
          select: {
            id: true,
            title: true,
            level: true,
            status: true,
            _count: { select: { lessons: true } },
          },
        },
        _count: { select: { progress: true } },
      },
      orderBy: { enrolledAt: 'desc' },
    });
    return enrollments.map(({ _count, course, evaluator, ...enrollment }) => {
      const { _count: courseCount, ...courseData } = course;
      return {
        ...enrollment,
        evaluator: evaluator.name,
        course: courseData,
        progress: progressOf(_count.progress, courseCount.lessons),
      };
    });
  }

  // Estudiantes que el usuario evalúa (el profe, solo quienes lo eligieron):
  // en qué curso está cada uno, cuánto ha avanzado y qué entregas esperan nota.
  async listEvaluating(user: AuthUser) {
    const enrollments = await this.prisma.enrollment.findMany({
      where: this.courses.gradingScope(user),
      select: {
        id: true,
        status: true,
        enrolledAt: true,
        student: { select: { id: true, name: true, email: true } },
        evaluator: { select: { id: true, name: true } },
        course: {
          select: {
            id: true,
            title: true,
            level: true,
            _count: { select: { lessons: true, assessments: true } },
          },
        },
        submissions: { select: { assessmentId: true } },
        grades: { select: { assessmentId: true } },
        _count: { select: { progress: true } },
      },
      orderBy: [
        { student: { lastName: 'asc' } },
        { student: { firstName: 'asc' } },
        { course: { level: 'asc' } },
      ],
    });
    return enrollments.map(
      ({ _count, course, submissions, grades, ...enrollment }) => {
        const { _count: courseCount, ...courseData } = course;
        const graded = new Set(grades.map((g) => g.assessmentId));
        return {
          ...enrollment,
          course: courseData,
          progress: progressOf(_count.progress, courseCount.lessons),
          work: {
            total: courseCount.assessments,
            submitted: submissions.length,
            graded: graded.size,
            pendingReview: submissions.filter(
              (s) => !graded.has(s.assessmentId),
            ).length,
          },
        };
      },
    );
  }

  // Lista de estudiantes de un curso con su avance y su profe (admin).
  async listByCourse(
    user: AuthUser,
    courseId: string,
    status: EnrollmentStatus | undefined,
    query: PaginationDto,
  ) {
    await this.courses.getManageable(user, courseId);
    const where = { courseId, status };
    const [enrollments, total, totalLessons] = await this.prisma.$transaction([
      this.prisma.enrollment.findMany({
        where,
        select: {
          id: true,
          status: true,
          enrolledAt: true,
          completedAt: true,
          student: { select: { id: true, name: true, email: true } },
          evaluator: { select: { id: true, name: true } },
          _count: { select: { progress: true } },
        },
        orderBy: { enrolledAt: 'asc' },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      this.prisma.enrollment.count({ where }),
      this.prisma.lesson.count({ where: { courseId } }),
    ]);
    return paginate(
      enrollments.map(({ _count, ...enrollment }) => ({
        ...enrollment,
        progress: progressOf(_count.progress, totalLessons),
      })),
      total,
      query,
    );
  }

  async completeLesson(user: AuthUser, courseId: string, lessonId: string) {
    return this.prisma.$transaction(async (tx) => {
      const enrollment = await tx.enrollment.findUnique({
        where: { studentId_courseId: { studentId: user.id, courseId } },
      });
      if (!enrollment || enrollment.status === EnrollmentStatus.DROPPED) {
        throw new ForbiddenException('No estás inscrito en este curso');
      }
      const lesson = await tx.lesson.findFirst({
        where: { id: lessonId, courseId },
        select: { order: true },
      });
      if (!lesson) throw new NotFoundException('Lección no encontrada');

      const enrollmentId = enrollment.id;
      // Las lecciones se completan en orden: no puede quedar ninguna anterior pendiente.
      const pendingBefore = await tx.lesson.findFirst({
        where: {
          courseId,
          order: { lt: lesson.order },
          progress: { none: { enrollmentId } },
        },
        select: { order: true, title: true },
        orderBy: { order: 'asc' },
      });
      if (pendingBefore) {
        throw new ConflictException(
          `Primero debes completar la lección ${pendingBefore.order}: "${pendingBefore.title}"`,
        );
      }

      await tx.lessonProgress.upsert({
        where: { enrollmentId_lessonId: { enrollmentId, lessonId } },
        create: { enrollmentId, lessonId },
        update: {},
      });

      const [completed, total] = await Promise.all([
        tx.lessonProgress.count({ where: { enrollmentId } }),
        tx.lesson.count({ where: { courseId } }),
      ]);
      let status = enrollment.status;
      if (completed === total && status === EnrollmentStatus.ACTIVE) {
        status = EnrollmentStatus.COMPLETED;
        await tx.enrollment.update({
          where: { id: enrollmentId },
          data: { status, completedAt: new Date() },
        });
      }
      return { enrollmentId, status, progress: progressOf(completed, total) };
    });
  }
}
