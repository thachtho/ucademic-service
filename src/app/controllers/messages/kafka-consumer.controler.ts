import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateCourseHandler } from './create-course-handler/create-course-handler';
import { HealthCheck } from './health-check/health-check';
import { CreateCourseMessage, KafkaTopics } from './kafka.controler.i';

@Controller()
export class KafkaConsumerController {
  constructor(
    private readonly healthCheck: HealthCheck,
    private readonly createCourseHandler: CreateCourseHandler,
  ) {}

  @MessagePattern(KafkaTopics.HEALTH_CHECK)
  handleHealthCheck(): Observable<any> {
    return this.healthCheck.setTimeLive();
  }

  @MessagePattern(KafkaTopics.CREATE_COURSE)
  updateUser(@Payload() payload: CreateCourseMessage) {
    const { data } = payload;

    return this.createCourseHandler.handler(data);
  }
}
