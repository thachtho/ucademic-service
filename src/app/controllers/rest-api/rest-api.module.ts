import { Module } from '@nestjs/common';
import { CourseControllerModule } from './course/course.controller.module';

const controllerModules = [CourseControllerModule];
@Module({
  imports: [...controllerModules],
})
export class RestApiModule {}
