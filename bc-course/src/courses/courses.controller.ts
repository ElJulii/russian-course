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
  Query,
} from '@nestjs/common';
import type { AuthUser } from '../common/decorators';
import { CurrentUser, Public, RequirePermissions } from '../common/decorators';
import { Permission } from '../common/rbac/permissions';
import {
  CreateCourseDto,
  CreateLessonDto,
  ListCoursesDto,
  ManageCoursesDto,
  ReorderLessonsDto,
  UpdateCourseDto,
  UpdateLessonDto,
} from './courses.dto';
import { CoursesService } from './courses.service';
import { LessonsService } from './lessons.service';

@Controller('courses')
export class CoursesController {
  constructor(
    private readonly courses: CoursesService,
    private readonly lessons: LessonsService,
  ) {}

  @Public()
  @Get()
  list(@Query() query: ListCoursesDto) {
    return this.courses.listPublished(query);
  }

  @Get('manage')
  @RequirePermissions(Permission.CourseManage)
  listManageable(@Query() query: ManageCoursesDto) {
    return this.courses.listManageable(query);
  }

  @Get('teaching')
  @RequirePermissions(Permission.GradeManage)
  listTeaching(@CurrentUser() user: AuthUser) {
    return this.courses.listTeaching(user);
  }

  @Public()
  @Get(':courseId')
  findOne(
    @CurrentUser() user: AuthUser | undefined,
    @Param('courseId', ParseUUIDPipe) courseId: string,
  ) {
    return this.courses.findOne(user, courseId);
  }

  @Post()
  @RequirePermissions(Permission.CourseManage)
  create(@Body() dto: CreateCourseDto) {
    return this.courses.create(dto);
  }

  @Patch(':courseId')
  @RequirePermissions(Permission.CourseManage)
  update(
    @CurrentUser() user: AuthUser,
    @Param('courseId', ParseUUIDPipe) courseId: string,
    @Body() dto: UpdateCourseDto,
  ) {
    return this.courses.update(user, courseId, dto);
  }

  @Post(':courseId/publish')
  @HttpCode(200)
  @RequirePermissions(Permission.CourseManage)
  publish(
    @CurrentUser() user: AuthUser,
    @Param('courseId', ParseUUIDPipe) courseId: string,
  ) {
    return this.courses.publish(user, courseId);
  }

  @Post(':courseId/archive')
  @HttpCode(200)
  @RequirePermissions(Permission.CourseManage)
  archive(
    @CurrentUser() user: AuthUser,
    @Param('courseId', ParseUUIDPipe) courseId: string,
  ) {
    return this.courses.archive(user, courseId);
  }

  @Delete(':courseId')
  @HttpCode(204)
  @RequirePermissions(Permission.CourseManage)
  remove(
    @CurrentUser() user: AuthUser,
    @Param('courseId', ParseUUIDPipe) courseId: string,
  ) {
    return this.courses.remove(user, courseId);
  }

  // --- Lecciones ---

  @Get(':courseId/lessons/:lessonId')
  findLesson(
    @CurrentUser() user: AuthUser,
    @Param('courseId', ParseUUIDPipe) courseId: string,
    @Param('lessonId', ParseUUIDPipe) lessonId: string,
  ) {
    return this.lessons.findOne(user, courseId, lessonId);
  }

  @Post(':courseId/lessons')
  @RequirePermissions(Permission.CourseManage)
  createLesson(
    @CurrentUser() user: AuthUser,
    @Param('courseId', ParseUUIDPipe) courseId: string,
    @Body() dto: CreateLessonDto,
  ) {
    return this.lessons.create(user, courseId, dto);
  }

  @Put(':courseId/lessons/order')
  @RequirePermissions(Permission.CourseManage)
  reorderLessons(
    @CurrentUser() user: AuthUser,
    @Param('courseId', ParseUUIDPipe) courseId: string,
    @Body() dto: ReorderLessonsDto,
  ) {
    return this.lessons.reorder(user, courseId, dto);
  }

  @Patch(':courseId/lessons/:lessonId')
  @RequirePermissions(Permission.CourseManage)
  updateLesson(
    @CurrentUser() user: AuthUser,
    @Param('courseId', ParseUUIDPipe) courseId: string,
    @Param('lessonId', ParseUUIDPipe) lessonId: string,
    @Body() dto: UpdateLessonDto,
  ) {
    return this.lessons.update(user, courseId, lessonId, dto);
  }

  @Delete(':courseId/lessons/:lessonId')
  @HttpCode(204)
  @RequirePermissions(Permission.CourseManage)
  removeLesson(
    @CurrentUser() user: AuthUser,
    @Param('courseId', ParseUUIDPipe) courseId: string,
    @Param('lessonId', ParseUUIDPipe) lessonId: string,
  ) {
    return this.lessons.remove(user, courseId, lessonId);
  }
}
