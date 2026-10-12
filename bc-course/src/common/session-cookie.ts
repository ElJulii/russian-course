import type { Request } from 'express';

// La sesión viaja en una cookie httpOnly: el JavaScript de la página no puede
// leerla, así que un XSS no puede llevarse el token.
export const SESSION_COOKIE = 'poyejali_session';

export function readSessionCookie(request: Request): string | null {
  for (const part of request.headers.cookie?.split(';') ?? []) {
    const [name, ...value] = part.trim().split('=');
    if (name === SESSION_COOKIE) return value.join('=') || null;
  }
  return null;
}
