import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import type { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import { AppModule } from './app.module';

// Con un secreto corto o el de ejemplo cualquiera podría fabricar sesiones.
function assertStrongJwtSecret() {
  const secret = process.env.JWT_SECRET ?? '';
  if (secret.length < 32 || secret.startsWith('cambia-esto')) {
    throw new Error(
      "JWT_SECRET debe ser un valor aleatorio de al menos 32 caracteres. Genera uno con: node -e \"console.log(require('crypto').randomBytes(48).toString('base64url'))\"",
    );
  }
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  assertStrongJwtSecret();
  app.setGlobalPrefix('api');
  // Cabeceras de seguridad (nosniff, sin X-Powered-By, HSTS, etc.).
  app.use(helmet());
  // Detrás de un proxy (nginx, Render, Railway…) la IP real viene en
  // X-Forwarded-For; sin esto el límite de peticiones vería una sola IP.
  // TRUST_PROXY es el número de proxies que hay delante de la API.
  if (process.env.TRUST_PROXY) {
    app.set('trust proxy', Number(process.env.TRUST_PROXY) || 1);
  }
  // Next usa el 3001 cuando el 3000 está ocupado; se aceptan varios orígenes separados por coma.
  const origins = (
    process.env.CORS_ORIGIN ?? 'http://localhost:3000,http://localhost:3001'
  )
    .split(',')
    .map((origin) => origin.trim());
  // `credentials` deja que el navegador envíe la cookie de sesión desde el frontend.
  app.enableCors({ origin: origins, credentials: true });
  // Defensa contra CSRF: como la sesión va en una cookie, una página ajena
  // podría intentar enviar peticiones en nombre del usuario. El navegador
  // siempre declara el origen en las que modifican datos; si no es el del
  // frontend, se rechazan.
  app.use((request: Request, response: Response, next: NextFunction) => {
    const origin = request.headers.origin;
    const readOnly = ['GET', 'HEAD', 'OPTIONS'].includes(request.method);
    if (origin && !readOnly && !origins.includes(origin)) {
      response.status(403).json({
        statusCode: 403,
        message: 'Origen no permitido',
      });
      return;
    }
    next();
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(process.env.PORT ?? 4000);
}
void bootstrap();
