import { Role } from '../../generated/prisma/enums';

export enum Permission {
  UserManage = 'user:manage',

  // Crear y editar cursos, lecciones y evaluaciones: solo la plataforma (admin).
  CourseManage = 'course:manage',

  EnrollmentCreate = 'enrollment:create',
  EnrollmentReadOwn = 'enrollment:read-own',
  ProgressUpdate = 'progress:update',

  GradeReadOwn = 'grade:read-own',
  // Revisar entregas y calificar: el profe a sus estudiantes, el admin a todos.
  GradeManage = 'grade:manage',
  GradeManageAny = 'grade:manage-any',

  ReportPlatform = 'report:platform',
}

export const ROLE_PERMISSIONS: Record<Role, ReadonlySet<Permission>> = {
  [Role.STUDENT]: new Set([
    Permission.EnrollmentCreate,
    Permission.EnrollmentReadOwn,
    Permission.ProgressUpdate,
    Permission.GradeReadOwn,
  ]),
  [Role.INSTRUCTOR]: new Set([Permission.GradeManage]),
  [Role.ADMIN]: new Set([
    Permission.CourseManage,
    Permission.GradeManage,
    Permission.GradeManageAny,
    Permission.UserManage,
    Permission.ReportPlatform,
  ]),
};

export function hasPermission(role: Role, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role].has(permission);
}
