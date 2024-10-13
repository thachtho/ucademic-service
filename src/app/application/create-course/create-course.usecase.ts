import { Injectable } from '@nestjs/common';
import { CourseFactory } from '../../domain/factory/course';
import { CourseRepository } from '../../infrastructure/repositories/course';
import { CreateCourseUseCaseArg } from './create-course.usecase.i';

@Injectable()
export class CreateCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  excute(payload: CreateCourseUseCaseArg) {
    const course = new CourseFactory().create(payload);

    return this.courseRepository.create(course);
  }
}
