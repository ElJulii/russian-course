import { Module } from '@nestjs/common';
import { CoursesModule } from '../courses/courses.module';
import { GradesController } from './grades.controller';
import { GradesService } from './grades.service';

@Module({
  imports: [CoursesModule],
  controllers: [GradesController],
  providers: [GradesService],
})
export class GradesModule {}
