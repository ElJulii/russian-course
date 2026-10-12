import { PartialType } from '@nestjs/mapped-types';
import {
  ArrayMaxSize,
  ArrayNotEmpty,
  ArrayUnique,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { PaginationDto } from '../common/pagination';
import { CourseLevel, CourseStatus } from '../generated/prisma/enums';

export class CreateCourseDto {
  @IsString()
  @MinLength(5)
  @MaxLength(120)
  title: string;

  @IsString()
  @MinLength(20)
  @MaxLength(2000)
  description: string;

  @IsEnum(CourseLevel)
  level: CourseLevel;
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}

export class ListCoursesDto extends PaginationDto {
  @IsOptional()
  @IsEnum(CourseLevel)
  level?: CourseLevel;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  search?: string;
}

export class ManageCoursesDto extends ListCoursesDto {
  @IsOptional()
  @IsEnum(CourseStatus)
  status?: CourseStatus;
}

export class CreateLessonDto {
  @IsString()
  @MinLength(3)
  @MaxLength(120)
  title: string;

  @IsString()
  @MinLength(1)
  @MaxLength(50000)
  content: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(600)
  durationMinutes?: number;
}

export class UpdateLessonDto extends PartialType(CreateLessonDto) {}

export class ReorderLessonsDto {
  @ArrayNotEmpty()
  @ArrayMaxSize(500)
  @ArrayUnique()
  @IsUUID(undefined, { each: true })
  lessonIds: string[];
}
