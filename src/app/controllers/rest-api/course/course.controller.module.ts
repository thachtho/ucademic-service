import { Module } from '@nestjs/common';
import { CourseControler } from './course.controller';

@Module({
  imports: [],
  controllers: [CourseControler],
})
export class CourseControllerModule {}
