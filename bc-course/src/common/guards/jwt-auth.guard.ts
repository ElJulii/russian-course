import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthUser, IS_PUBLIC_KEY } from '../decorators';
import { readSessionCookie } from '../session-cookie';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwt: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    const request = context
      .switchToHttp()
      .getRequest<Request & { user?: AuthUser }>();

    const user = await this.resolveUser(request);
    if (user) request.user = user;
    if (!user && !isPublic) {
      throw new UnauthorizedException('Token ausente o inválido');
    }
    return true;
  }

  // El rol y el estado se leen de la BD en cada petición: un cambio de rol o
  // una desactivación surten efecto de inmediato, sin esperar a que expire el token.
  private async resolveUser(request: Request): Promise<AuthUser | null> {
    const token = readSessionCookie(request);
    if (!token) return null;

    let payload: { sub: string; v?: number };
    try {
      payload = await this.jwt.verifyAsync(token);
    } catch {
      return null;
    }

    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        isActive: true,
        emailVerifiedAt: true,
        tokenVersion: true,
      },
    });
    if (!user?.isActive || !user.emailVerifiedAt) return null;
    // Un cambio de contraseña sube la versión y cierra las demás sesiones.
    if (user.tokenVersion !== payload.v) return null;
    return { id: user.id, email: user.email, name: user.name, role: user.role };
  }
}
