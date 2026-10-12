import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import type { CookieOptions, Response } from 'express';
import { SESSION_COOKIE } from '../common/session-cookie';

export interface SessionOwner {
  id: string;
  // Sube al cambiar la contraseña; los tokens con una versión anterior dejan de valer.
  tokenVersion: number;
}

@Injectable()
export class SessionService {
  constructor(
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  // Firma el token y lo deja en la cookie; nunca va en el cuerpo de la respuesta.
  async start(response: Response, owner: SessionOwner) {
    const token = await this.jwt.signAsync({
      sub: owner.id,
      v: owner.tokenVersion,
    });
    const { exp } = this.jwt.decode<{ exp: number }>(token);
    response.cookie(SESSION_COOKIE, token, {
      ...this.options(),
      expires: new Date(exp * 1000),
    });
  }

  end(response: Response) {
    response.clearCookie(SESSION_COOKIE, this.options());
  }

  // `lax` sirve mientras frontend y API compartan sitio (localhost, o
  // app.dominio.com y api.dominio.com). Si viven en dominios distintos hace
  // falta COOKIE_SAMESITE=none, que obliga a HTTPS.
  private options(): CookieOptions {
    const sameSite = this.config.get<'lax' | 'strict' | 'none'>(
      'COOKIE_SAMESITE',
      'lax',
    );
    return {
      httpOnly: true,
      sameSite,
      secure:
        sameSite === 'none' ||
        this.config.get<string>('NODE_ENV') === 'production',
      path: '/',
    };
  }
}
