import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { of, switchMap } from 'rxjs';
import { CourseFactory } from '../../domain/factory/course';
import { CreateCourseFactoryArg } from '../../domain/factory/course/course.factory.i';
import { CourseRepository } from '../../infrastructure/repositories/course';
import { CourseFromDB } from '../../infrastructure/repositories/course/course.repository.i';
import { UpdateCourseUseCaseArg } from './update-course.usecase.i';

@Injectable()
export class UpdateCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  excute(payload: UpdateCourseUseCaseArg) {
    return of(null).pipe(
      switchMap(() => {
        return this.courseRepository.getDetail(payload.id);
      }),
      switchMap((course: CourseFromDB | null) => {
        if (course) {
          const courseUpdate: CreateCourseFactoryArg = {
            id: payload.id ?? course.id,
            start: payload.start ?? course.start,
            end: payload.end ?? course.end,
            name: '',
            organizationId: payload.organizationId ?? course.organizationId,
          };
          const courseEntity = new CourseFactory().create(courseUpdate);

          return this.courseRepository.update(courseEntity);
        }

        throw new HttpException('Course Notfound!', HttpStatus.NOT_FOUND);
      }),
    );
  }
}
