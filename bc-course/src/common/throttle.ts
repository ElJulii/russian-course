import type { ExecutionContext } from '@nestjs/common';
import { minutes, ThrottlerModuleOptions } from '@nestjs/throttler';
import type { Request } from 'express';

// Correo al que apunta una petición de /auth (entrar, registrarse, reenviar).
function targetEmail(request: Request): string | null {
  const email = (request.body as { email?: unknown } | undefined)?.email;
  return request.path.includes('/auth/') && typeof email === 'string'
    ? email.trim().toLowerCase()
    : null;
}

// Límites de peticiones. Se cuentan en memoria, por proceso: si algún día la
// API corre en varias instancias hay que mover el contador a Redis.
export const THROTTLING: ThrottlerModuleOptions = {
  errorMessage:
    'Demasiadas peticiones. Espera un momento antes de volver a intentarlo.',
  throttlers: [
    // Tope general por IP: holgado para navegar, corto para un script.
    { name: 'default', ttl: minutes(1), limit: 150 },
    // Tope por cuenta y por IP: frena probar contraseñas contra un mismo
    // correo. Va ligado a la IP para que nadie pueda dejar sin entrar a otra
    // persona a base de fallar su contraseña desde fuera.
    {
      name: 'account',
      ttl: minutes(15),
      limit: 10,
      skipIf: (context: ExecutionContext) =>
        !targetEmail(context.switchToHttp().getRequest<Request>()),
      getTracker: (request) =>
        `${(request as Request).ip}|${targetEmail(request as Request) ?? ''}`,
    },
  ],
};

// Límites por IP más estrictos para las rutas públicas de /auth. Varias
// personas pueden compartir IP (un aula), así que no son de una sola cifra.
export const AUTH_LIMITS = {
  login: { default: { ttl: minutes(1), limit: 30 } },
  // Cada registro o reenvío manda un correo: se limita para que nadie use la
  // API como lanzadera de spam.
  register: { default: { ttl: minutes(10), limit: 20 } },
  resend: { default: { ttl: minutes(10), limit: 10 } },
  verify: { default: { ttl: minutes(1), limit: 30 } },
  google: { default: { ttl: minutes(1), limit: 30 } },
};
