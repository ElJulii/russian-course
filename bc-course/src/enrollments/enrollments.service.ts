import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AuthUser } from '../common/decorators';
import { PaginationDto, paginate } from '../common/pagination';
import { CoursesService } from '../courses/courses.service';
import { CourseStatus, EnrollmentStatus } from '../generated/prisma/enums';
import { PrismaService } from '../prisma/prisma.service';
import { lessonTests, progressOf, recordLessonCompleted } from './progress';

@Injectable()
export class EnrollmentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly courses: CoursesService,
  ) {}

  async enroll(user: AuthUser, courseId: string) {
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
    // Quien se dio de baja retoma el curso conservando su progreso y sus notas.
    return this.prisma.enrollment.upsert({
      where: key,
      create: { studentId: user.id, courseId },
      update: { status: EnrollmentStatus.ACTIVE },
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
    return enrollments.map(({ _count, course, ...enrollment }) => {
      const { _count: courseCount, ...courseData } = course;
      return {
        ...enrollment,
        course: courseData,
        progress: progressOf(_count.progress, courseCount.lessons),
      };
    });
  }

  // Lista de estudiantes de un curso con su avance (admin).
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
      // Con test, la estación solo se completa aprobándolo.
      const { pending } = await lessonTests(tx, enrollmentId, lessonId);
      if (pending.length > 0) {
        throw new ConflictException(
          `Esta estación se completa al aprobar su test: «${pending[0].title}»`,
        );
      }

      return recordLessonCompleted(tx, enrollment, lessonId);
    });
  }
}
