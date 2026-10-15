import type { ConfigService } from '@nestjs/config';
import { MailService } from './mail.service';

// Solo se publica como ESM y Jest no lo carga; el test pasa la config a mano.
jest.mock('@nestjs/config', () => ({ ConfigService: class {} }));

type GmailCall = { url: string; method: string; data: { raw: string } };
const request = jest.fn<Promise<unknown>, [GmailCall]>().mockResolvedValue({});
jest.mock('google-auth-library', () => ({
  OAuth2Client: class {
    setCredentials = jest.fn();
    request = request;
  },
}));

const config = (env: Record<string, string>) =>
  ({
    get: (key: string, fallback?: unknown) => env[key] ?? fallback,
  }) as unknown as ConfigService;

describe('MailService', () => {
  beforeEach(() => request.mockClear());

  it('con GMAIL_* envía por la API de Gmail, aunque haya SMTP', async () => {
    const mail = new MailService(
      config({
        GMAIL_CLIENT_ID: 'id',
        GMAIL_CLIENT_SECRET: 'secret',
        GMAIL_REFRESH_TOKEN: 'refresh',
        SMTP_HOST: 'smtp.gmail.com',
        MAIL_FROM: 'Поехали <yo@gmail.com>',
      }),
    );
    await mail.sendVerification(
      'ana@x.com',
      'Ana',
      'https://web/verificar?t=1',
    );

    expect(request).toHaveBeenCalledTimes(1);
    const [{ url, method, data }] = request.mock.calls[0];
    expect(url).toContain('gmail.googleapis.com');
    expect(method).toBe('POST');
    const message = Buffer.from(data.raw, 'base64url').toString();
    expect(message).toContain('To: ana@x.com');
    expect(message).toContain('https://web/verificar?t=1');
  });

  it('si Gmail falla responde 503 en vez de colgarse', async () => {
    request.mockRejectedValueOnce(new Error('invalid_grant'));
    const mail = new MailService(
      config({
        GMAIL_CLIENT_ID: 'id',
        GMAIL_CLIENT_SECRET: 'secret',
        GMAIL_REFRESH_TOKEN: 'caducado',
      }),
    );
    jest.spyOn(mail['logger'], 'error').mockImplementation(() => undefined);
    await expect(mail.sendVerification('a@x.com', 'A', 'l')).rejects.toThrow(
      'No pudimos enviar el correo',
    );
  });

  it('sin configurar no envía: deja el enlace en la consola', async () => {
    const mail = new MailService(config({}));
    const warn = jest
      .spyOn(mail['logger'], 'warn')
      .mockImplementation(() => undefined);
    await mail.sendVerification('a@x.com', 'A', 'https://enlace');
    expect(request).not.toHaveBeenCalled();
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('https://enlace'),
    );
  });
});
