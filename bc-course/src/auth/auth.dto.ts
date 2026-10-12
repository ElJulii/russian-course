import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

const normalizeEmail = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.trim().toLowerCase() : value;

const trimName = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : value;

export class RegisterDto {
  @Transform(normalizeEmail)
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(72)
  password: string;

  @Transform(trimName)
  @IsString()
  @MinLength(2)
  @MaxLength(40)
  firstName: string;

  @Transform(trimName)
  @IsString()
  @MinLength(2)
  @MaxLength(40)
  lastName: string;
}

export class LoginDto {
  @Transform(normalizeEmail)
  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(72)
  password: string;
}

export class VerifyEmailDto {
  // Token del enlace que llega por correo.
  @IsString()
  @IsNotEmpty()
  @MaxLength(1024)
  token: string;
}

export class ResendVerificationDto {
  @Transform(normalizeEmail)
  @IsEmail()
  email: string;
}

export class GoogleLoginDto {
  // ID token que entrega el botón de Google en el navegador.
  @IsString()
  @IsNotEmpty()
  @MaxLength(4096)
  credential: string;
}
