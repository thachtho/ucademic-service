import { ICourseEntity } from '../../../common/interfaces/course.i';
import { validator } from '../../../common/validator';
import { schema } from './course.entity.guard';

export class CourseEntity {
  id: number | null;
  start: number;
  end: number;
  organizationId: number;
  name: string;

  constructor(arg: ICourseEntity) {
    const valid = this.isValidate(arg);

    if (!valid.status) {
      throw new Error(`${valid.errorsMessage}`);
    }
    this.id = arg.id;
    this.start = arg.start;
    this.end = arg.end;
    this.organizationId = arg.organizationId;
    this.name = arg.name;
  }

  isValidate(payload: ICourseEntity) {
    return validator(payload, schema);
  }
}
