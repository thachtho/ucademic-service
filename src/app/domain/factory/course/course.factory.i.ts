import { CreateCourseMessageArg } from '../../../controllers/messages/kafka.controler.i';

export interface CreateCourseFactoryArg extends CreateCourseMessageArg {
  id?: number;
  name?: string;
}
