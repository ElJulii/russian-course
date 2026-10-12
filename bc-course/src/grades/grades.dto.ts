import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  IsArray,
  IsDate,
  IsEnum,
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
} from 'class-validator';
import { AssessmentType } from '../generated/prisma/enums';

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

  // Ejercicios que el estudiante responde en la plataforma.
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(50)
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @MaxLength(1000, { each: true })
  questions?: string[];

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  dueDate?: Date;
}

export class UpdateAssessmentDto extends PartialType(CreateAssessmentDto) {}

export class SubmitDto {
  @IsArray()
  @ArrayMaxSize(50)
  @IsString({ each: true })
  @MaxLength(4000, { each: true })
  answers: string[];
}

export class GradeDto {
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  score: number;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  feedback?: string;
}
