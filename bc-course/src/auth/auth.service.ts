import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { OAuth2Client } from 'google-auth-library';
import { PrismaService } from '../prisma/prisma.service';
import { fullName } from '../users/names';
import { GoogleLoginDto, LoginDto, RegisterDto } from './auth.dto';
import { MailService } from './mail.service';
import { SessionOwner } from './session.service';

// Resultado de entrar: a quién abrirle la sesión y qué ve el navegador de él.
export interface SignedIn {
  owner: SessionOwner;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    name: string;
    role: string;
    hasPassword: boolean;
  };
}

// Hash contra el que se compara cuando el correo no existe: así la respuesta
// tarda lo mismo y no delata qué correos tienen cuenta.
const DUMMY_HASH = bcrypt.hashSync('sin-cuenta', 10);
const VERIFY_EXPIRES_IN = '24h';
// Espera mínima entre dos correos de confirmación a la misma cuenta.
const RESEND_COOLDOWN_MS = 60_000;

@Injectable()
export class AuthService {
  private readonly googleClient = new OAuth2Client();

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
    private readonly mail: MailService,
  ) {}

  // El registro público siempre crea estudiantes; solo un admin asigna otros roles.
  // No inicia sesión: la cuenta no se puede usar hasta confirmar el correo.
  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existing?.emailVerifiedAt) {
      throw new ConflictException('El email ya está registrado');
    }

    const data = {
      firstName: dto.firstName,
      lastName: dto.lastName,
      name: fullName(dto.firstName, dto.lastName),
      passwordHash: await bcrypt.hash(dto.password, 10),
    };
    // Un registro que nunca se confirmó no reserva el correo: quien vuelve a
    // registrarse lo reemplaza, y solo el dueño del buzón puede confirmarlo.
    const user = existing
      ? await this.prisma.user.update({ where: { id: existing.id }, data })
      : await this.prisma.user.create({ data: { email: dto.email, ...data } });
    await this.sendVerification(user);
    return { email: user.email };
  }

  async verifyEmail(token: string) {
    const invalid = new BadRequestException(
      'El enlace no es válido o ya venció. Pide uno nuevo.',
    );
    let userId: string;
    try {
      ({ sub: userId } = await this.jwt.verifyAsync<{ sub: string }>(token, {
        secret: this.verifySecret(),
      }));
    } catch {
      throw invalid;
    }
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw invalid;
    // El enlace sirve una sola vez: después hay que entrar con la contraseña.
    if (user.emailVerifiedAt) {
      throw new ConflictException(
        'Este correo ya está confirmado. Entra con tu cuenta.',
      );
    }
    if (!user.isActive) throw new UnauthorizedException('Cuenta desactivada');
    const verified = await this.prisma.user.update({
      where: { id: user.id },
      data: { emailVerifiedAt: new Date() },
    });
    return this.buildSession(verified);
  }

  // Responde igual exista o no la cuenta, para no revelar qué correos hay.
  async resendVerification(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && !user.emailVerifiedAt) await this.sendVerification(user);
    return { ok: true };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    // Las cuentas creadas con Google no tienen contraseña hasta que definen una.
    const matches = await bcrypt.compare(
      dto.password,
      user?.passwordHash ?? DUMMY_HASH,
    );
    if (!user?.passwordHash || !matches) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    if (!user.isActive) throw new UnauthorizedException('Cuenta desactivada');
    if (!user.emailVerifiedAt) {
      throw new ForbiddenException({
        statusCode: 403,
        code: 'EMAIL_NOT_VERIFIED',
        message: 'Confirma tu correo para poder entrar.',
      });
    }
    return this.buildSession(user);
  }

  // Entra con Google. Si el correo ya tiene cuenta la vincula; si no, crea un
  // estudiante, igual que el registro público.
  async google(dto: GoogleLoginDto) {
    const clientId = this.config.get<string>('GOOGLE_CLIENT_ID');
    if (!clientId) {
      throw new ServiceUnavailableException(
        'El acceso con Google no está configurado',
      );
    }
    const payload = await this.googleClient
      .verifyIdToken({ idToken: dto.credential, audience: clientId })
      .then((ticket) => ticket.getPayload())
      .catch(() => undefined);
    // Solo se confía en un correo que Google haya verificado: es lo que
    // permite vincular la cuenta existente con ese mismo correo.
    if (!payload?.email || !payload.email_verified) {
      throw new UnauthorizedException(
        'No pudimos verificar tu cuenta de Google',
      );
    }
    const email = payload.email.trim().toLowerCase();

    let user =
      (await this.prisma.user.findUnique({
        where: { googleId: payload.sub },
      })) ?? (await this.prisma.user.findUnique({ where: { email } }));

    if (!user) {
      const firstName = payload.given_name?.trim() || email.split('@')[0];
      const lastName = payload.family_name?.trim() ?? '';
      user = await this.prisma.user.create({
        data: {
          email,
          googleId: payload.sub,
          emailVerifiedAt: new Date(),
          firstName,
          lastName,
          name: fullName(firstName, lastName).trim(),
        },
      });
    } else if (!user.googleId || !user.emailVerifiedAt) {
      user = await this.prisma.user.update({
        where: { id: user.id },
        data: {
          googleId: payload.sub,
          // Google ya verificó el correo. Si el registro con contraseña nunca
          // se confirmó, pudo hacerlo otra persona: esa contraseña se descarta.
          ...(!user.emailVerifiedAt && {
            emailVerifiedAt: new Date(),
            passwordHash: null,
          }),
        },
      });
    }
    if (!user.isActive) throw new UnauthorizedException('Cuenta desactivada');
    return this.buildSession(user);
  }

  // Firmado con un secreto distinto al de las sesiones: el token del correo
  // no sirve como token de acceso.
  private verifySecret() {
    return `${this.config.getOrThrow<string>('JWT_SECRET')}:verify-email`;
  }

  private async sendVerification(user: {
    id: string;
    email: string;
    firstName: string;
    verificationSentAt: Date | null;
  }) {
    const last = user.verificationSentAt?.getTime() ?? 0;
    if (Date.now() - last < RESEND_COOLDOWN_MS) return;

    const token = await this.jwt.signAsync(
      { sub: user.id },
      { secret: this.verifySecret(), expiresIn: VERIFY_EXPIRES_IN },
    );
    const appUrl = this.config
      .get<string>('APP_URL', 'http://localhost:3000')
      .replace(/\/+$/, '');
    await this.mail.sendVerification(
      user.email,
      user.firstName,
      `${appUrl}/verificar?token=${encodeURIComponent(token)}`,
    );
    await this.prisma.user.update({
      where: { id: user.id },
      data: { verificationSentAt: new Date() },
    });
  }

  private buildSession(user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    name: string;
    role: string;
    passwordHash: string | null;
    tokenVersion: number;
  }): SignedIn {
    return {
      owner: { id: user.id, tokenVersion: user.tokenVersion },
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        name: user.name,
        role: user.role,
        hasPassword: user.passwordHash !== null,
      },
    };
  }
}
