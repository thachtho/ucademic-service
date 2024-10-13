import { Module } from '@nestjs/common';
import { CourseRepository } from './course.repository';

@Module({
  imports: [],
  providers: [CourseRepository],
  exports: [CourseRepository],
})
export class CourseRepositoryModule {}
