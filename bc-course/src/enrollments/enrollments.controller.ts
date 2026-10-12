import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
} from '@nestjs/common';
import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import type { AuthUser } from '../common/decorators';
import { CurrentUser, RequirePermissions } from '../common/decorators';
import { PaginationDto } from '../common/pagination';
import { Permission } from '../common/rbac/permissions';
import { EnrollmentStatus } from '../generated/prisma/enums';
import { EnrollmentsService } from './enrollments.service';

class ListEnrollmentsDto extends PaginationDto {
  @IsOptional()
  @IsEnum(EnrollmentStatus)
  status?: EnrollmentStatus;
}

class EnrollDto {
  @IsUUID()
  evaluatorId: string;
}

@Controller()
export class EnrollmentsController {
  constructor(private readonly enrollments: EnrollmentsService) {}

  @Post('courses/:courseId/enroll')
  @RequirePermissions(Permission.EnrollmentCreate)
  enroll(
    @CurrentUser() user: AuthUser,
    @Param('courseId', ParseUUIDPipe) courseId: string,
    @Body() dto: EnrollDto,
  ) {
    return this.enrollments.enroll(user, courseId, dto.evaluatorId);
  }

  @Post('courses/:courseId/lessons/:lessonId/complete')
  @HttpCode(200)
  @RequirePermissions(Permission.ProgressUpdate)
  completeLesson(
    @CurrentUser() user: AuthUser,
    @Param('courseId', ParseUUIDPipe) courseId: string,
    @Param('lessonId', ParseUUIDPipe) lessonId: string,
  ) {
    return this.enrollments.completeLesson(user, courseId, lessonId);
  }

  @Get('courses/:courseId/enrollments')
  @RequirePermissions(Permission.CourseManage)
  listByCourse(
    @CurrentUser() user: AuthUser,
    @Param('courseId', ParseUUIDPipe) courseId: string,
    @Query() query: ListEnrollmentsDto,
  ) {
    return this.enrollments.listByCourse(user, courseId, query.status, query);
  }

  @Get('enrollments/evaluating')
  @RequirePermissions(Permission.GradeManage)
  listEvaluating(@CurrentUser() user: AuthUser) {
    return this.enrollments.listEvaluating(user);
  }

  @Get('enrollments/me')
  @RequirePermissions(Permission.EnrollmentReadOwn)
  listMine(@CurrentUser() user: AuthUser) {
    return this.enrollments.listMine(user);
  }

  @Post('enrollments/:id/drop')
  @HttpCode(200)
  @RequirePermissions(Permission.EnrollmentCreate)
  drop(@CurrentUser() user: AuthUser, @Param('id', ParseUUIDPipe) id: string) {
    return this.enrollments.drop(user, id);
  }
}
