import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PaginationDto } from '../common/pagination';
import { Role } from '../generated/prisma/enums';

export class ListUsersDto extends PaginationDto {
  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  search?: string;
}

const trimName = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : value;

// Alta de una cuenta por un admin. La contraseña inicial la genera el servidor.
export class CreateUserDto {
  @Transform(({ value }: { value: unknown }) =>
    typeof value === 'string' ? value.trim().toLowerCase() : value,
  )
  @IsEmail()
  email: string;

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

  @IsEnum(Role)
  role: Role;
}

export class UpdateProfileDto {
  @IsOptional()
  @Transform(trimName)
  @IsString()
  @MinLength(2)
  @MaxLength(40)
  firstName?: string;

  @IsOptional()
  @Transform(trimName)
  @IsString()
  @MinLength(2)
  @MaxLength(40)
  lastName?: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  @MaxLength(72)
  newPassword?: string;

  // Necesaria para cambiar la contraseña, salvo en cuentas de Google que aún
  // no tienen una; eso lo comprueba el servicio.
  @IsOptional()
  @IsString()
  @MaxLength(72)
  currentPassword?: string;
}

// Baja de la propia cuenta. La contraseña confirma que la pide su dueño; las
// cuentas que solo entran con Google no tienen, y eso lo comprueba el servicio.
export class DeleteAccountDto {
  @IsOptional()
  @IsString()
  @MaxLength(72)
  currentPassword?: string;
}

export class UpdateRoleDto {
  @IsEnum(Role)
  role: Role;
}

export class UpdateStatusDto {
  @IsBoolean()
  isActive: boolean;
}
