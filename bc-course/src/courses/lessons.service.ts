import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AuthUser } from '../common/decorators';
import { CourseStatus, EnrollmentStatus } from '../generated/prisma/enums';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateLessonDto,
  ReorderLessonsDto,
  UpdateLessonDto,
} from './courses.dto';
import { CoursesService } from './courses.service';

// Desplazamiento temporal para renumerar sin chocar con @@unique([courseId, order]).
const ORDER_OFFSET = 1_000_000;

@Injectable()
export class LessonsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly courses: CoursesService,
  ) {}

  // El contenido completo solo lo ven los admins y los estudiantes inscritos.
  async findOne(user: AuthUser, courseId: string, lessonId: string) {
    await this.courses.getVisible(user, courseId);
    const lesson = await this.prisma.lesson.findFirst({
      where: { id: lessonId, courseId },
    });
    if (!lesson) throw new NotFoundException('Lección no encontrada');

    if (!this.courses.canManage(user)) {
      const enrollment = await this.prisma.enrollment.findUnique({
        where: { studentId_courseId: { studentId: user.id, courseId } },
        select: { status: true },
      });
      if (!enrollment || enrollment.status === EnrollmentStatus.DROPPED) {
        throw new ForbiddenException(
          'Debes estar inscrito en el curso para ver sus lecciones',
        );
      }
    }
    return lesson;
  }

  async create(user: AuthUser, courseId: string, dto: CreateLessonDto) {
    await this.courses.getManageable(user, courseId);
    return this.prisma.$transaction(async (tx) => {
      const last = await tx.lesson.aggregate({
        where: { courseId },
        _max: { order: true },
      });
      return tx.lesson.create({
        data: { ...dto, courseId, order: (last._max.order ?? 0) + 1 },
      });
    });
  }

  async update(
    user: AuthUser,
    courseId: string,
    lessonId: string,
    dto: UpdateLessonDto,
  ) {
    await this.courses.getManageable(user, courseId);
    await this.getInCourse(courseId, lessonId);
    return this.prisma.lesson.update({ where: { id: lessonId }, data: dto });
  }

  async reorder(user: AuthUser, courseId: string, dto: ReorderLessonsDto) {
    await this.courses.getManageable(user, courseId);
    const existing = await this.prisma.lesson.findMany({
      where: { courseId },
      select: { id: true },
    });
    const ids = new Set(existing.map((l) => l.id));
    if (
      dto.lessonIds.length !== ids.size ||
      !dto.lessonIds.every((id) => ids.has(id))
    ) {
      throw new BadRequestException(
        'lessonIds debe contener exactamente todas las lecciones del curso',
      );
    }

    const setOrder = (offset: number) =>
      dto.lessonIds.map((id, index) =>
        this.prisma.lesson.update({
          where: { id },
          data: { order: offset + index + 1 },
        }),
      );
    await this.prisma.$transaction([...setOrder(ORDER_OFFSET), ...setOrder(0)]);

    return this.prisma.lesson.findMany({
      where: { courseId },
      select: { id: true, title: true, order: true },
      orderBy: { order: 'asc' },
    });
  }

  async remove(user: AuthUser, courseId: string, lessonId: string) {
    const course = await this.courses.getManageable(user, courseId);
    const lesson = await this.getInCourse(courseId, lessonId);

    if (course.status === CourseStatus.PUBLISHED) {
      const total = await this.prisma.lesson.count({ where: { courseId } });
      if (total === 1) {
        throw new ConflictException(
          'Un curso publicado debe conservar al menos una lección',
        );
      }
    }

    // Cierra el hueco en la numeración en dos pasos para no violar la unicidad.
    const following = { courseId, order: { gt: lesson.order } };
    await this.prisma.$transaction([
      this.prisma.lesson.delete({ where: { id: lessonId } }),
      this.prisma.lesson.updateMany({
        where: following,
        data: { order: { increment: ORDER_OFFSET } },
      }),
      this.prisma.lesson.updateMany({
        where: { courseId, order: { gt: ORDER_OFFSET } },
        data: { order: { decrement: ORDER_OFFSET + 1 } },
      }),
    ]);
  }

  private async getInCourse(courseId: string, lessonId: string) {
    const lesson = await this.prisma.lesson.findFirst({
      where: { id: lessonId, courseId },
    });
    if (!lesson) throw new NotFoundException('Lección no encontrada');
    return lesson;
  }
}
