import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { Role } from '../generated/prisma/enums';
import { Permission } from './rbac/permissions';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: Role;
}

export const IS_PUBLIC_KEY = 'isPublic';
// Ruta accesible sin token. Si llega un token válido, igual se adjunta el usuario.
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const PERMISSIONS_KEY = 'permissions';
export const RequirePermissions = (...permissions: Permission[]) =>
  SetMetadata(PERMISSIONS_KEY, permissions);

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): AuthUser | undefined =>
    ctx.switchToHttp().getRequest<{ user?: AuthUser }>().user,
);
