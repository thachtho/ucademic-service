import { Module } from '@nestjs/common';
import { CourseRepositoryModule } from '../../infrastructure/repositories/course';
import { UpdateCourseUseCase } from './update-course.usecase';

@Module({
  imports: [CourseRepositoryModule],
  providers: [UpdateCourseUseCase],
  exports: [UpdateCourseUseCase],
})
export class UpdateCourseUseCaseModule {}
