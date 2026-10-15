import {
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';
import { createTransport, type SendMailOptions } from 'nodemailer';

const escapeHtml = (text: string) =>
  text.replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        char
      ]!,
  );

const GMAIL_SEND_URL =
  'https://gmail.googleapis.com/gmail/v1/users/me/messages/send';

type Deliver = (mail: SendMailOptions) => Promise<unknown>;

// Cómo sale el correo, por orden de preferencia:
// 1. Gmail API (GMAIL_*): va por HTTPS, el único camino en hostings que
//    bloquean el SMTP saliente, como Railway fuera del plan Pro.
// 2. SMTP (SMTP_HOST): cómodo en desarrollo.
// 3. Nada configurado: el enlace sale por la consola de la API.
@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private readonly deliver: Deliver | null;
  private readonly from: string;

  constructor(config: ConfigService) {
    const user = config.get<string>('SMTP_USER');
    this.from = config.get<string>('MAIL_FROM') || user || 'no-reply@localhost';
    this.deliver =
      MailService.gmailApi(config) ?? MailService.smtp(config, user) ?? null;
  }

  private static gmailApi(config: ConfigService): Deliver | null {
    const clientId = config.get<string>('GMAIL_CLIENT_ID');
    const clientSecret = config.get<string>('GMAIL_CLIENT_SECRET');
    const refreshToken = config.get<string>('GMAIL_REFRESH_TOKEN');
    if (!clientId || !clientSecret || !refreshToken) return null;

    const oauth = new OAuth2Client({ clientId, clientSecret });
    oauth.setCredentials({ refresh_token: refreshToken });
    // nodemailer solo arma el mensaje (cabeceras, cirílico, HTML y texto);
    // lo envía la API de Gmail en nombre de la cuenta que dio el permiso.
    const composer = createTransport({ streamTransport: true, buffer: true });
    return async (mail) => {
      const { message } = await composer.sendMail(mail);
      await oauth.request({
        url: GMAIL_SEND_URL,
        method: 'POST',
        data: { raw: (message as Buffer).toString('base64url') },
        timeout: 15_000,
      });
    };
  }

  private static smtp(config: ConfigService, user?: string): Deliver | null {
    const host = config.get<string>('SMTP_HOST');
    if (!host) return null;
    const port = Number(config.get('SMTP_PORT', 587));
    const transport = createTransport({
      host,
      port,
      secure: port === 465,
      // Por defecto nodemailer espera hasta dos minutos a un servidor que no
      // responde (p. ej. un hosting que bloquea el puerto SMTP), y el
      // registro se queda colgado. Mejor rendirse pronto y avisar.
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
      auth: user ? { user, pass: config.get<string>('SMTP_PASS') } : undefined,
    });
    return (mail) => transport.sendMail(mail);
  }

  async sendVerification(to: string, firstName: string, link: string) {
    if (!this.deliver) {
      this.logger.warn(
        `Correo sin configurar. Enlace de confirmación para ${to}: ${link}`,
      );
      return;
    }
    try {
      await this.deliver({
        from: this.from,
        to,
        subject: 'Confirma tu correo en Поехали',
        text: `Hola, ${firstName}:\n\nConfirma tu correo para empezar a usar tu cuenta:\n${link}\n\nEl enlace vence en 24 horas. Si no creaste esta cuenta, ignora este mensaje.`,
        html: `<p>Hola, ${escapeHtml(firstName)}:</p>
<p>Confirma tu correo para empezar a usar tu cuenta.</p>
<p><a href="${link}" style="display:inline-block;padding:12px 22px;border-radius:999px;background:#e5243b;color:#fff;font-weight:bold;text-decoration:none">Confirmar mi correo</a></p>
<p>Si el botón no funciona, copia este enlace en tu navegador:<br>${link}</p>
<p>El enlace vence en 24 horas. Si no creaste esta cuenta, ignora este mensaje.</p>`,
      });
    } catch (error) {
      this.logger.error(`No se pudo enviar el correo a ${to}`, error);
      throw new ServiceUnavailableException(
        'No pudimos enviar el correo de confirmación. Intenta de nuevo en unos minutos.',
      );
    }
  }
}
