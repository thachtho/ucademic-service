import { Module } from '@nestjs/common';
import { CreateCourseUseCase } from './create-course.usecase';
import { CourseRepositoryModule } from '../../infrastructure/repositories/course';

@Module({
  imports: [CourseRepositoryModule],
  providers: [CreateCourseUseCase],
  exports: [CreateCourseUseCase],
})
export class CreateCourseUseCaseModule {}
