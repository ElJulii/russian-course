import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { LessonsService } from './lessons.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, LessonsService],
  exports: [CoursesService],
})
export class CoursesModule {}
