import 'dotenv/config';
import { readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { OAuth2Client } from 'google-auth-library';
import { createTransport } from 'nodemailer';

// Da permiso a la API para enviar correos con tu Gmail, una sola vez.
// Abre el enlace que imprime, entra con la cuenta que envía los correos y
// acepta. El permiso (GMAIL_REFRESH_TOKEN) queda guardado en .env; desde ahí
// lo copias a Railway. Con --probar te manda además un correo de prueba.
//
//   npm run mail:autorizar
//   npm run mail:autorizar -- --probar

const SCOPE = 'https://www.googleapis.com/auth/gmail.send';
const PORT = 5174;
const ENV_FILE = '.env';

const clientId = process.env.GMAIL_CLIENT_ID;
const clientSecret = process.env.GMAIL_CLIENT_SECRET;
if (!clientId || !clientSecret) {
  console.error(
    'Faltan GMAIL_CLIENT_ID y GMAIL_CLIENT_SECRET en .env (ver DEPLOY.md, «Correo con la API de Gmail»).',
  );
  process.exit(1);
}

const redirectUri = `http://127.0.0.1:${PORT}`;
const oauth = new OAuth2Client({ clientId, clientSecret, redirectUri });
const authUrl = oauth.generateAuthUrl({
  access_type: 'offline',
  // Sin «consent» Google no vuelve a dar el refresh token si ya diste permiso antes.
  prompt: 'consent',
  scope: [SCOPE],
});

function saveToEnv(token: string) {
  const env = readFileSync(ENV_FILE, 'utf8');
  const line = `GMAIL_REFRESH_TOKEN="${token}"`;
  writeFileSync(
    ENV_FILE,
    /^GMAIL_REFRESH_TOKEN=.*$/m.test(env)
      ? env.replace(/^GMAIL_REFRESH_TOKEN=.*$/m, line)
      : `${env.trimEnd()}\n${line}\n`,
  );
}

async function sendTest() {
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;
  const to = process.env.SMTP_USER || from;
  if (!from || !to) {
    console.log('Sin MAIL_FROM ni SMTP_USER en .env: no envío la prueba.');
    return;
  }
  const composer = createTransport({ streamTransport: true, buffer: true });
  const { message } = await composer.sendMail({
    from,
    to,
    subject: 'Prueba de Поехали',
    text: 'Si lees esto, la API ya puede enviar correos con tu Gmail.',
  });
  await oauth.request({
    url: 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
    method: 'POST',
    data: { raw: (message as Buffer).toString('base64url') },
  });
  console.log(`Correo de prueba enviado a ${to}. Míralo (también en spam).`);
}

const server = createServer((request, response) => {
  const url = new URL(request.url ?? '/', redirectUri);
  const code = url.searchParams.get('code');
  const denied = url.searchParams.get('error');
  if (!code && !denied) {
    response.writeHead(404).end();
    return;
  }
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(
    denied
      ? '<p>No diste el permiso. Puedes cerrar esta pestaña.</p>'
      : '<p>Listo. Vuelve a la terminal; ya puedes cerrar esta pestaña.</p>',
  );
  server.close();

  if (denied) {
    console.error(`Google respondió: ${denied}`);
    process.exit(1);
  }
  void (async () => {
    const { tokens } = await oauth.getToken(code!);
    if (!tokens.refresh_token) {
      throw new Error(
        'Google no devolvió el refresh token. Quita el acceso de la app en myaccount.google.com/permissions y repite.',
      );
    }
    if (!tokens.scope?.includes(SCOPE)) {
      throw new Error(
        'No marcaste la casilla de enviar correos. Repite y acepta ese permiso.',
      );
    }
    oauth.setCredentials(tokens);
    saveToEnv(tokens.refresh_token);
    console.log(
      'Permiso guardado en .env como GMAIL_REFRESH_TOKEN. Cópialo a Railway.',
    );
    if (process.argv.includes('--probar')) await sendTest();
  })().catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(
    'Abre este enlace y entra con la cuenta que envía los correos:\n',
  );
  console.log(authUrl);
  console.log('\nEsperando la respuesta de Google…');
});
