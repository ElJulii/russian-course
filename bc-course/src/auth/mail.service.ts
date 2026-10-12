import {
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport, Transporter } from 'nodemailer';

const escapeHtml = (text: string) =>
  text.replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        char
      ]!,
  );

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private readonly transport: Transporter | null;
  private readonly from: string;

  constructor(config: ConfigService) {
    const host = config.get<string>('SMTP_HOST');
    const port = Number(config.get('SMTP_PORT', 587));
    const user = config.get<string>('SMTP_USER');
    this.from = config.get<string>('MAIL_FROM') || user || 'no-reply@localhost';
    this.transport = host
      ? createTransport({
          host,
          port,
          secure: port === 465,
          auth: user
            ? { user, pass: config.get<string>('SMTP_PASS') }
            : undefined,
        })
      : null;
  }

  async sendVerification(to: string, firstName: string, link: string) {
    // Sin SMTP (desarrollo) el enlace sale por la consola de la API.
    if (!this.transport) {
      this.logger.warn(
        `SMTP sin configurar. Enlace de confirmación para ${to}: ${link}`,
      );
      return;
    }
    try {
      await this.transport.sendMail({
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
