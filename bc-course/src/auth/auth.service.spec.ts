import type { ConfigService } from '@nestjs/config';
import type { JwtService } from '@nestjs/jwt';
import type { PrismaService } from '../prisma/prisma.service';
import { AuthService } from './auth.service';
import type { MailService } from './mail.service';

// Estos paquetes solo se publican como ESM y Jest no los carga; el test
// tampoco los necesita: recibe sus dependencias a mano.
jest.mock('@nestjs/config', () => ({ ConfigService: class {} }));
jest.mock('@nestjs/jwt', () => ({ JwtService: class {} }));
jest.mock('../prisma/prisma.service', () => ({ PrismaService: class {} }));
jest.mock('./mail.service', () => ({ MailService: class {} }));

// Entrar con Google y el ascenso a admin de los correos de ADMIN_EMAILS.
describe('AuthService.google', () => {
  const baseUser = {
    id: 'u1',
    firstName: 'Julian',
    lastName: 'Lara',
    name: 'Julian Lara',
    role: 'STUDENT',
    passwordHash: null,
    tokenVersion: 0,
    isActive: true,
    emailVerifiedAt: new Date(),
    googleId: 'google-sub',
  };

  function setup(email: string, adminEmails: string) {
    const stored = { ...baseUser, email };
    const prisma = {
      user: {
        findUnique: jest.fn().mockResolvedValue(stored),
        update: jest.fn(({ data }: { data: object }) =>
          Promise.resolve({ ...stored, ...data }),
        ),
      },
    };
    const env: Record<string, string> = {
      GOOGLE_CLIENT_ID: 'client',
      ADMIN_EMAILS: adminEmails,
    };
    const config = {
      get: (key: string, fallback?: string) => env[key] ?? fallback,
    };
    const service = new AuthService(
      prisma as unknown as PrismaService,
      {} as JwtService,
      config as unknown as ConfigService,
      {} as MailService,
    );
    // El token de Google no se puede fabricar en un test: se simula su lectura.
    Object.assign(service, {
      googleClient: {
        verifyIdToken: () =>
          Promise.resolve({
            getPayload: () => ({
              sub: 'google-sub',
              email,
              email_verified: true,
            }),
          }),
      },
    });
    return { service, prisma };
  }

  it('asciende a admin un correo de la lista, sin importar mayúsculas', async () => {
    const { service, prisma } = setup(
      'juli@gmail.com',
      ' otra@gmail.com , JULI@gmail.com',
    );
    const { user } = await service.google({ credential: 'token' });
    expect(user.role).toBe('ADMIN');
    expect(prisma.user.update).toHaveBeenCalledWith({
      where: { id: 'u1' },
      data: { role: 'ADMIN' },
    });
  });

  it('deja como estudiante a quien no está en la lista', async () => {
    const { service, prisma } = setup('ana@gmail.com', 'juli@gmail.com');
    const { user } = await service.google({ credential: 'token' });
    expect(user.role).toBe('STUDENT');
    expect(prisma.user.update).not.toHaveBeenCalled();
  });

  it('no asciende a nadie si ADMIN_EMAILS está vacío', async () => {
    const { service } = setup('juli@gmail.com', '');
    const { user } = await service.google({ credential: 'token' });
    expect(user.role).toBe('STUDENT');
  });
});
