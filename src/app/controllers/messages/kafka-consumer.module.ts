import { Module } from '@nestjs/common';
import { HealthModule } from './health-check/health-check.module';
import { KafkaConsumerController } from './kafka-consumer.controler';
import { CreateCourseHandlerModule } from './create-course-handler/create-course-handler.module';
import { UpdateCourseHandlerModule } from './update-course-handler/update-course-handler.module';

@Module({
  imports: [HealthModule, CreateCourseHandlerModule, UpdateCourseHandlerModule],
  controllers: [KafkaConsumerController],
  providers: [],
})
export class KafkaConsumerModule {}
