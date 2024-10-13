import { Module } from '@nestjs/common';
import { CourseControler } from './course.controller';
import { GetCourseUseCaseModule } from '../../../application/get-courses/get-courses.module';

@Module({
  imports: [GetCourseUseCaseModule],
  controllers: [CourseControler],
})
export class CourseControllerModule {}
