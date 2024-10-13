import { Module } from '@nestjs/common';
import { CreateCourseHandler } from './create-course-handler';
import { CreateCourseUseCaseModule } from '../../../application/create-course/create-course.usecase.module';

@Module({
  imports: [CreateCourseUseCaseModule],
  providers: [CreateCourseHandler],
  exports: [CreateCourseHandler],
})
export class CreateCourseHandlerModule {}
