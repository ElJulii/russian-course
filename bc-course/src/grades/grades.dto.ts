import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { AssessmentType } from '../generated/prisma/enums';

export const MAX_QUESTIONS = 100;
export const MAX_OPTIONS = 6;

export class QuestionDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  prompt: string;

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(MAX_OPTIONS)
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @MaxLength(300, { each: true })
  options: string[];

  // Índice de la opción correcta; el servicio comprueba que exista.
  @IsInt()
  @Min(0)
  @Max(MAX_OPTIONS - 1)
  answer: number;

  // Se muestra al estudiante al corregir su intento.
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  explanation?: string;
}

export class CreateAssessmentDto {
  @IsString()
  @MinLength(3)
  @MaxLength(120)
  title: string;

  @IsEnum(AssessmentType)
  type: AssessmentType;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  @Max(1000)
  maxScore: number;

  // Porcentaje de la nota final del curso.
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  @Max(100)
  weight: number;

  @IsOptional()
  @IsUUID()
  lessonId?: string;

  @IsOptional()
  @IsString()
  @MaxLength(5000)
  instructions?: string;

  // Preguntas de opción múltiple.
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(MAX_QUESTIONS)
  @ValidateNested({ each: true })
  @Type(() => QuestionDto)
  questions?: QuestionDto[];

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  dueDate?: Date;
}

export class UpdateAssessmentDto extends PartialType(CreateAssessmentDto) {}

export class AttemptDto {
  // Opción elegida en cada pregunta, en el mismo orden.
  @IsArray()
  @ArrayMaxSize(MAX_QUESTIONS)
  @IsInt({ each: true })
  @Min(0, { each: true })
  @Max(MAX_OPTIONS - 1, { each: true })
  answers: number[];
}
