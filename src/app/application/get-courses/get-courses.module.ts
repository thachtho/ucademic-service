import { Module } from '@nestjs/common';
import { CourseRepositoryModule } from '../../infrastructure/repositories/course';
import { GetCourseUseCase } from './get-courses.usecase';

@Module({
  imports: [CourseRepositoryModule],
  providers: [GetCourseUseCase],
  exports: [GetCourseUseCase],
})
export class GetCourseUseCaseModule {}
