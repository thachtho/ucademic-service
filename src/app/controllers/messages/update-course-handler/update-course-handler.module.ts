import { Module } from '@nestjs/common';
import { UpdateCourseUseCaseModule } from '../../../application/update-course/update-course.usecase.module';
import { UpdateCourseHandler } from './update-course-handler';

@Module({
  imports: [UpdateCourseUseCaseModule],
  providers: [UpdateCourseHandler],
  exports: [UpdateCourseHandler],
})
export class UpdateCourseHandlerModule {}
