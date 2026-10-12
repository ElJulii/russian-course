import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import type { Response } from 'express';
import { Prisma } from '../generated/prisma/client';

const ERRORS: Record<string, { status: number; message: string }> = {
  P2002: {
    status: HttpStatus.CONFLICT,
    message: 'Ya existe un registro con esos datos únicos',
  },
  P2003: {
    status: HttpStatus.CONFLICT,
    message: 'La operación viola una relación con otros registros',
  },
  P2025: { status: HttpStatus.NOT_FOUND, message: 'Registro no encontrado' },
};

// Red de seguridad: las reglas de negocio se validan en los servicios, pero una
// condición de carrera puede llegar hasta las restricciones de la BD.
@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const { status, message } = ERRORS[exception.code] ?? {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Error de base de datos',
    };
    response.status(status).json({ statusCode: status, message });
  }
}
