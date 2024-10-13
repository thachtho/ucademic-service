import { ICourseEntity } from '../../../common/interfaces/course.i';
import { CourseEntity } from '../../model/course';
import { CreateCourseFactoryArg } from './course.factory.i';

export class CourseFactory {
  create(arg: CreateCourseFactoryArg) {
    const courseCreateArg: ICourseEntity = {
      id: arg.id,
      start: arg.start,
      end: arg.end,
      organizationId: arg.organizationId,
      name: this.createCourseName(arg.start, arg.end),
    };
    return new CourseEntity(courseCreateArg);
  }

  createCourseName(start: number, end: number) {
    return `${start}-${end}`;
  }
}
