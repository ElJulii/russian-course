import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { randomBytes } from 'node:crypto';
import { AuthUser } from '../common/decorators';
import { paginate } from '../common/pagination';
import { Prisma } from '../generated/prisma/client';
import {
  CourseStatus,
  EnrollmentStatus,
  Role,
} from '../generated/prisma/enums';
import { PrismaService } from '../prisma/prisma.service';
import { fullName } from './names';
import {
  CreateUserDto,
  DeleteAccountDto,
  ListUsersDto,
  UpdateProfileDto,
} from './users.dto';

const PUBLIC_USER = {
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  name: true,
  role: true,
  isActive: true,
  createdAt: true,
} satisfies Prisma.UserSelect;

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  // Alta por un admin. La contraseña inicial es aleatoria y solo se devuelve
  // esta vez, para que el admin se la entregue a la persona.
  async create(dto: CreateUserDto) {
    const exists = await this.prisma.user.findUnique({
      where: { email: dto.email },
      select: { id: true },
    });
    if (exists) throw new ConflictException('El email ya está registrado');
    const initialPassword = randomBytes(9).toString('base64url');
    const user = await this.prisma.user.create({
      data: {
        ...dto,
        name: fullName(dto.firstName, dto.lastName),
        // El admin responde por el correo: la cuenta nace confirmada.
        emailVerifiedAt: new Date(),
        passwordHash: await bcrypt.hash(initialPassword, 10),
      },
      select: PUBLIC_USER,
    });
    return { ...user, initialPassword };
  }

  async list(query: ListUsersDto) {
    const where: Prisma.UserWhereInput = {
      role: query.role,
      ...(query.search && {
        OR: [
          { name: { contains: query.search, mode: 'insensitive' } },
          { email: { contains: query.search, mode: 'insensitive' } },
        ],
      }),
    };
    const [users, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        where,
        select: {
          ...PUBLIC_USER,
          _count: { select: { enrollments: true } },
        },
        orderBy: [{ lastName: 'asc' }, { firstName: 'asc' }],
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      this.prisma.user.count({ where }),
    ]);
    return paginate(users, total, query);
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: PUBLIC_USER,
    });
    if (!user) throw new NotFoundException('Usuario no encontrado');
    return user;
  }

  // Perfil propio. `hasPassword` es false en las cuentas que solo entran con Google.
  async me(id: string) {
    const { passwordHash, ...user } = await this.prisma.user.findUniqueOrThrow({
      where: { id },
      select: { ...PUBLIC_USER, passwordHash: true },
    });
    return { ...user, hasPassword: passwordHash !== null };
  }

  async updateProfile(userId: string, dto: UpdateProfileDto) {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });
    const firstName = dto.firstName ?? user.firstName;
    const lastName = dto.lastName ?? user.lastName;
    const data: Prisma.UserUpdateInput = {
      firstName,
      lastName,
      name: fullName(firstName, lastName),
    };
    if (dto.newPassword) {
      // Quien entró con Google aún no tiene contraseña que confirmar.
      const matches =
        user.passwordHash === null ||
        (await bcrypt.compare(dto.currentPassword ?? '', user.passwordHash));
      if (!matches) {
        throw new BadRequestException('La contraseña actual no es correcta');
      }
      data.passwordHash = await bcrypt.hash(dto.newPassword, 10);
      // Cierra las sesiones abiertas en otros dispositivos: si alguien robó
      // un token, deja de valer en cuanto el dueño cambia la contraseña.
      data.tokenVersion = { increment: 1 };
    }
    const { tokenVersion } = await this.prisma.user.update({
      where: { id: userId },
      data,
      select: { tokenVersion: true },
    });
    return { profile: await this.me(userId), tokenVersion };
  }

  async updateRole(actor: AuthUser, id: string, role: Role) {
    // Impedir el auto-cambio garantiza que siempre quede al menos un admin.
    if (actor.id === id) {
      throw new ForbiddenException('No puedes cambiar tu propio rol');
    }
    const user = await this.findOne(id);
    if (user.role === role) return user;

    if (user.role === Role.STUDENT) {
      const active = await this.prisma.enrollment.count({
        where: { studentId: id, status: EnrollmentStatus.ACTIVE },
      });
      if (active > 0) {
        throw new ConflictException(
          `El estudiante tiene ${active} inscripción(es) activa(s); debe finalizarlas o darse de baja antes de cambiar de rol`,
        );
      }
    }
    return this.prisma.user.update({
      where: { id },
      data: { role },
      select: PUBLIC_USER,
    });
  }

  async updateStatus(actor: AuthUser, id: string, isActive: boolean) {
    if (actor.id === id) {
      throw new ForbiddenException('No puedes desactivar tu propia cuenta');
    }
    await this.findOne(id);
    return this.prisma.user.update({
      where: { id },
      data: { isActive },
      select: PUBLIC_USER,
    });
  }

  // Baja que pide el propio estudiante: borra su cuenta con sus inscripciones,
  // avance e intentos, sin vuelta atrás.
  async removeSelf(userId: string, dto: DeleteAccountDto) {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });
    // Así siempre queda al menos un admin; a un admin lo da de baja otro.
    if (user.role !== Role.STUDENT) {
      throw new ForbiddenException(
        'Una cuenta de administrador no se puede eliminar desde el perfil',
      );
    }
    const matches =
      user.passwordHash === null ||
      (await bcrypt.compare(dto.currentPassword ?? '', user.passwordHash));
    if (!matches) {
      throw new BadRequestException('La contraseña no es correcta');
    }
    await this.prisma.user.delete({ where: { id: userId } });
  }

  // Borra la cuenta de un estudiante con sus inscripciones, avance e intentos.
  // Un admin no se borra: primero hay que quitarle el rol.
  async remove(actor: AuthUser, id: string) {
    if (actor.id === id) {
      throw new ForbiddenException('No puedes eliminar tu propia cuenta');
    }
    const user = await this.findOne(id);
    if (user.role !== Role.STUDENT) {
      throw new ConflictException(
        'Solo se pueden eliminar cuentas de estudiantes',
      );
    }
    await this.prisma.user.delete({ where: { id } });
  }

  async platformStats() {
    const [usersByRole, coursesByStatus, enrollmentsByStatus, topCourses] =
      await Promise.all([
        this.prisma.user.groupBy({ by: ['role'], _count: { _all: true } }),
        this.prisma.course.groupBy({ by: ['status'], _count: { _all: true } }),
        this.prisma.enrollment.groupBy({
          by: ['status'],
          _count: { _all: true },
        }),
        this.prisma.course.findMany({
          where: { status: CourseStatus.PUBLISHED },
          select: {
            id: true,
            title: true,
            level: true,
            _count: {
              select: {
                enrollments: {
                  where: { status: { not: EnrollmentStatus.DROPPED } },
                },
              },
            },
          },
          orderBy: { enrollments: { _count: 'desc' } },
          take: 5,
        }),
      ]);

    const toMap = <R extends { _count: { _all: number } }>(
      rows: R[],
      key: (row: R) => string,
    ) => Object.fromEntries(rows.map((r) => [key(r), r._count._all]));

    return {
      usersByRole: toMap(usersByRole, (r) => r.role),
      coursesByStatus: toMap(coursesByStatus, (r) => r.status),
      enrollmentsByStatus: toMap(enrollmentsByStatus, (r) => r.status),
      topCourses: topCourses.map(({ _count, ...course }) => ({
        ...course,
        students: _count.enrollments,
      })),
    };
  }
}
