import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AuthUser } from '../common/decorators';
import { paginate } from '../common/pagination';
import { hasPermission, Permission } from '../common/rbac/permissions';
import { Course, Prisma } from '../generated/prisma/client';
import { CourseStatus, EnrollmentStatus } from '../generated/prisma/enums';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateCourseDto,
  ListCoursesDto,
  ManageCoursesDto,
  UpdateCourseDto,
} from './courses.dto';

const COURSE_SUMMARY = {
  id: true,
  title: true,
  slug: true,
  description: true,
  level: true,
  status: true,
  publishedAt: true,
  _count: {
    select: {
      lessons: true,
      enrollments: { where: { status: { not: EnrollmentStatus.DROPPED } } },
    },
  },
} satisfies Prisma.CourseSelect;

function slugify(title: string): string {
  return title
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}

  // --- Control de acceso a nivel de recurso (complementa al PermissionsGuard) ---

  // Los cursos son de la plataforma: solo un admin los edita.
  canManage(user: AuthUser | undefined) {
    return !!user && hasPermission(user.role, Permission.CourseManage);
  }

  // Profes y admins revisan entregas; qué estudiantes ve cada uno lo decide gradingScope.
  canGrade(user: AuthUser | undefined) {
    return !!user && hasPermission(user.role, Permission.GradeManage);
  }

  // Inscripciones vigentes que el usuario puede calificar: el admin todas, el
  // profe solo las de quienes lo eligieron como evaluador.
  gradingScope(user: AuthUser): Prisma.EnrollmentWhereInput {
    return {
      status: { not: EnrollmentStatus.DROPPED },
      ...(!hasPermission(user.role, Permission.GradeManageAny) && {
        evaluatorId: user.id,
      }),
    };
  }

  async getManageable(user: AuthUser, courseId: string): Promise<Course> {
    const course = await this.prisma.course.findUnique({
      where: { id: courseId },
    });
    if (!course) throw new NotFoundException('Curso no encontrado');
    if (!this.canManage(user)) {
      throw new ForbiddenException(
        'Solo la administración de la plataforma gestiona los cursos',
      );
    }
    return course;
  }

  // Curso cuyas entregas puede revisar el usuario (profe o admin).
  async getGradable(user: AuthUser, courseId: string): Promise<Course> {
    const course = await this.getVisible(user, courseId);
    if (!this.canGrade(user)) {
      throw new ForbiddenException('Tu rol no califica entregas');
    }
    return course;
  }

  // Los borradores solo los ve el admin; los archivados, además, los profes
  // (siguen calificando) y quienes ya estaban inscritos.
  async getVisible(user: AuthUser | undefined, courseId: string) {
    const course = await this.prisma.course.findUnique({
      where: { id: courseId },
    });
    if (
      !course ||
      (course.status !== CourseStatus.PUBLISHED &&
        !this.canManage(user) &&
        !(course.status === CourseStatus.ARCHIVED && this.canGrade(user)) &&
        !(await this.isEnrolled(user, courseId)))
    ) {
      throw new NotFoundException('Curso no encontrado');
    }
    return course;
  }

  // Un curso archivado sigue visible para quienes ya estaban inscritos.
  private async isEnrolled(user: AuthUser | undefined, courseId: string) {
    if (!user) return false;
    const enrollment = await this.prisma.enrollment.findUnique({
      where: { studentId_courseId: { studentId: user.id, courseId } },
      select: { status: true },
    });
    return !!enrollment && enrollment.status !== EnrollmentStatus.DROPPED;
  }

  // --- Consultas ---

  private buildFilters(query: ListCoursesDto): Prisma.CourseWhereInput {
    return {
      level: query.level,
      ...(query.search && {
        OR: [
          { title: { contains: query.search, mode: 'insensitive' } },
          { description: { contains: query.search, mode: 'insensitive' } },
        ],
      }),
    };
  }

  private async findPage(
    where: Prisma.CourseWhereInput,
    orderBy: Prisma.CourseOrderByWithRelationInput[],
    query: ListCoursesDto,
  ) {
    const [courses, total] = await this.prisma.$transaction([
      this.prisma.course.findMany({
        where,
        select: COURSE_SUMMARY,
        orderBy,
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      this.prisma.course.count({ where }),
    ]);
    return paginate(courses, total, query);
  }

  listPublished(query: ListCoursesDto) {
    return this.findPage(
      { ...this.buildFilters(query), status: CourseStatus.PUBLISHED },
      [{ level: 'asc' }, { publishedAt: 'desc' }],
      query,
    );
  }

  // Todos los cursos, incluidos borradores y archivados (admin).
  listManageable(query: ManageCoursesDto) {
    return this.findPage(
      { ...this.buildFilters(query), status: query.status },
      [{ updatedAt: 'desc' }],
      query,
    );
  }

  // Cursos en los que el usuario tiene estudiantes que evaluar, con cuántos
  // son y cuántas entregas esperan nota.
  async listTeaching(user: AuthUser) {
    const scope = this.gradingScope(user);
    const [courses, pending] = await Promise.all([
      this.prisma.course.findMany({
        where: { enrollments: { some: scope } },
        select: {
          id: true,
          title: true,
          level: true,
          status: true,
          _count: { select: { enrollments: { where: scope } } },
        },
        orderBy: [{ level: 'asc' }, { title: 'asc' }],
      }),
      this.prisma.submission.findMany({
        where: { enrollment: scope },
        select: {
          assessmentId: true,
          enrollmentId: true,
          assessment: { select: { courseId: true } },
          enrollment: {
            select: { grades: { select: { assessmentId: true } } },
          },
        },
      }),
    ]);
    const pendingByCourse = new Map<string, number>();
    for (const submission of pending) {
      const graded = submission.enrollment.grades.some(
        (g) => g.assessmentId === submission.assessmentId,
      );
      if (graded) continue;
      const courseId = submission.assessment.courseId;
      pendingByCourse.set(courseId, (pendingByCourse.get(courseId) ?? 0) + 1);
    }
    return courses.map(({ _count, ...course }) => ({
      ...course,
      students: _count.enrollments,
      pendingReview: pendingByCourse.get(course.id) ?? 0,
    }));
  }

  async findOne(user: AuthUser | undefined, courseId: string) {
    await this.getVisible(user, courseId);
    const [course, enrollment] = await Promise.all([
      this.prisma.course.findUniqueOrThrow({
        where: { id: courseId },
        select: {
          ...COURSE_SUMMARY,
          lessons: {
            select: {
              id: true,
              title: true,
              order: true,
              durationMinutes: true,
            },
            orderBy: { order: 'asc' },
          },
        },
      }),
      user
        ? this.prisma.enrollment.findUnique({
            where: { studentId_courseId: { studentId: user.id, courseId } },
            select: {
              id: true,
              status: true,
              evaluator: { select: { id: true, name: true } },
              progress: { select: { lessonId: true } },
            },
          })
        : null,
    ]);
    // Lo que el usuario que consulta puede hacer con este curso y su avance en él.
    return {
      ...course,
      viewer: {
        canManage: this.canManage(user),
        canGrade: this.canGrade(user),
        enrollment: enrollment && {
          id: enrollment.id,
          status: enrollment.status,
          evaluator: enrollment.evaluator,
          completedLessonIds: enrollment.progress.map((p) => p.lessonId),
        },
      },
    };
  }

  // --- Escritura ---

  async create(dto: CreateCourseDto) {
    return this.prisma.course.create({
      data: { ...dto, slug: await this.uniqueSlug(dto.title) },
      select: COURSE_SUMMARY,
    });
  }

  async update(user: AuthUser, courseId: string, dto: UpdateCourseDto) {
    const course = await this.getManageable(user, courseId);

    if (dto.level && dto.level !== course.level) {
      const active = await this.prisma.enrollment.count({
        where: { courseId, status: EnrollmentStatus.ACTIVE },
      });
      if (active > 0) {
        throw new ConflictException(
          'No se puede cambiar el nivel de un curso con estudiantes activos',
        );
      }
    }

    return this.prisma.course.update({
      where: { id: courseId },
      data: dto,
      select: COURSE_SUMMARY,
    });
  }

  async publish(user: AuthUser, courseId: string) {
    const course = await this.getManageable(user, courseId);
    if (course.status === CourseStatus.PUBLISHED) {
      throw new ConflictException('El curso ya está publicado');
    }

    const [lessons, weights] = await Promise.all([
      this.prisma.lesson.count({ where: { courseId } }),
      this.prisma.assessment.aggregate({
        where: { courseId },
        _sum: { weight: true },
        _count: true,
      }),
    ]);
    const problems: string[] = [];
    if (lessons === 0) problems.push('debe tener al menos una lección');
    if (weights._count > 0 && !weights._sum.weight?.equals(100)) {
      problems.push(
        `los pesos de sus evaluaciones deben sumar 100 (suman ${weights._sum.weight?.toString()})`,
      );
    }
    if (problems.length) {
      throw new BadRequestException(
        `El curso no se puede publicar: ${problems.join('; ')}`,
      );
    }

    return this.prisma.course.update({
      where: { id: courseId },
      data: {
        status: CourseStatus.PUBLISHED,
        publishedAt: course.publishedAt ?? new Date(),
      },
      select: COURSE_SUMMARY,
    });
  }

  // Archivar cierra las inscripciones; los estudiantes actuales conservan el acceso.
  async archive(user: AuthUser, courseId: string) {
    const course = await this.getManageable(user, courseId);
    if (course.status !== CourseStatus.PUBLISHED) {
      throw new ConflictException('Solo se pueden archivar cursos publicados');
    }
    return this.prisma.course.update({
      where: { id: courseId },
      data: { status: CourseStatus.ARCHIVED },
      select: COURSE_SUMMARY,
    });
  }

  async remove(user: AuthUser, courseId: string) {
    await this.getManageable(user, courseId);
    const enrollments = await this.prisma.enrollment.count({
      where: { courseId },
    });
    if (enrollments > 0) {
      throw new ConflictException(
        'El curso tiene historial de inscripciones y no se puede eliminar; archívalo en su lugar',
      );
    }
    await this.prisma.course.delete({ where: { id: courseId } });
  }

  private async uniqueSlug(title: string) {
    const base = slugify(title) || 'curso';
    const taken = new Set(
      (
        await this.prisma.course.findMany({
          where: { slug: { startsWith: base } },
          select: { slug: true },
        })
      ).map((c) => c.slug),
    );
    let slug = base;
    for (let n = 2; taken.has(slug); n++) slug = `${base}-${n}`;
    return slug;
  }
}
