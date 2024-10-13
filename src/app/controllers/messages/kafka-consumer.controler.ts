import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateCourseHandler } from './create-course-handler/create-course-handler';
import { HealthCheck } from './health-check/health-check';
import {
  CreateCourseMessage,
  KafkaTopics,
  UpdateCourseMessage,
} from './kafka.controler.i';
import { UpdateCourseHandler } from './update-course-handler/update-course-handler';

@Controller()
export class KafkaConsumerController {
  constructor(
    private readonly healthCheck: HealthCheck,
    private readonly createCourseHandler: CreateCourseHandler,
    private readonly updateCourseHandler: UpdateCourseHandler,
  ) {}

  @MessagePattern(KafkaTopics.HEALTH_CHECK)
  handleHealthCheck(): Observable<any> {
    return this.healthCheck.setTimeLive();
  }

  @MessagePattern(KafkaTopics.CREATE_COURSE)
  createCourse(@Payload() payload: CreateCourseMessage) {
    const { data } = payload;

    return this.createCourseHandler.handler(data);
  }

  @MessagePattern(KafkaTopics.UPDATE_COURSE)
  updateCourse(@Payload() payload: UpdateCourseMessage) {
    const { data } = payload;

    return this.updateCourseHandler.handler(data);
  }
}
