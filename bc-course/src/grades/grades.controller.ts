import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import type { AuthUser } from '../common/decorators';
import { CurrentUser, RequirePermissions } from '../common/decorators';
import { Permission } from '../common/rbac/permissions';
import {
  CreateAssessmentDto,
  GradeDto,
  SubmitDto,
  UpdateAssessmentDto,
} from './grades.dto';
import { GradesService } from './grades.service';

@Controller()
export class GradesController {
  constructor(private readonly grades: GradesService) {}

  @Get('grades/me')
  @RequirePermissions(Permission.GradeReadOwn)
  myReport(@CurrentUser() user: AuthUser) {
    return this.grades.myReport(user);
  }

  @Get('courses/:courseId/assessments')
  listAssessments(
    @CurrentUser() user: AuthUser,
    @Param('courseId', ParseUUIDPipe) courseId: string,
  ) {
    return this.grades.listAssessments(user, courseId);
  }

  @Post('courses/:courseId/assessments')
  @RequirePermissions(Permission.CourseManage)
  createAssessment(
    @CurrentUser() user: AuthUser,
    @Param('courseId', ParseUUIDPipe) courseId: string,
    @Body() dto: CreateAssessmentDto,
  ) {
    return this.grades.createAssessment(user, courseId, dto);
  }

  @Get('courses/:courseId/gradebook')
  @RequirePermissions(Permission.GradeManage)
  gradebook(
    @CurrentUser() user: AuthUser,
    @Param('courseId', ParseUUIDPipe) courseId: string,
  ) {
    return this.grades.gradebook(user, courseId);
  }

  @Get('courses/:courseId/stats')
  @RequirePermissions(Permission.CourseManage)
  courseStats(
    @CurrentUser() user: AuthUser,
    @Param('courseId', ParseUUIDPipe) courseId: string,
  ) {
    return this.grades.courseStats(user, courseId);
  }

  @Get('assessments/:assessmentId')
  findAssessment(
    @CurrentUser() user: AuthUser,
    @Param('assessmentId', ParseUUIDPipe) assessmentId: string,
  ) {
    return this.grades.findAssessment(user, assessmentId);
  }

  @Put('assessments/:assessmentId/submission')
  @RequirePermissions(Permission.ProgressUpdate)
  submit(
    @CurrentUser() user: AuthUser,
    @Param('assessmentId', ParseUUIDPipe) assessmentId: string,
    @Body() dto: SubmitDto,
  ) {
    return this.grades.submit(user, assessmentId, dto);
  }

  @Get('assessments/:assessmentId/submissions')
  @RequirePermissions(Permission.GradeManage)
  listSubmissions(
    @CurrentUser() user: AuthUser,
    @Param('assessmentId', ParseUUIDPipe) assessmentId: string,
  ) {
    return this.grades.listSubmissions(user, assessmentId);
  }

  @Patch('assessments/:assessmentId')
  @RequirePermissions(Permission.CourseManage)
  updateAssessment(
    @CurrentUser() user: AuthUser,
    @Param('assessmentId', ParseUUIDPipe) assessmentId: string,
    @Body() dto: UpdateAssessmentDto,
  ) {
    return this.grades.updateAssessment(user, assessmentId, dto);
  }

  @Delete('assessments/:assessmentId')
  @HttpCode(204)
  @RequirePermissions(Permission.CourseManage)
  removeAssessment(
    @CurrentUser() user: AuthUser,
    @Param('assessmentId', ParseUUIDPipe) assessmentId: string,
  ) {
    return this.grades.removeAssessment(user, assessmentId);
  }

  @Put('assessments/:assessmentId/grades/:studentId')
  @RequirePermissions(Permission.GradeManage)
  gradeStudent(
    @CurrentUser() user: AuthUser,
    @Param('assessmentId', ParseUUIDPipe) assessmentId: string,
    @Param('studentId', ParseUUIDPipe) studentId: string,
    @Body() dto: GradeDto,
  ) {
    return this.grades.gradeStudent(user, assessmentId, studentId, dto);
  }
}
