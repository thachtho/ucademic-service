import { Module } from '@nestjs/common';
import { HealthModule } from './health-check/health-check.module';
import { KafkaConsumerController } from './kafka-consumer.controler';
import { CreateCourseHandlerModule } from './create-course-handler/create-course-handler.module';

@Module({
  imports: [HealthModule, CreateCourseHandlerModule],
  controllers: [KafkaConsumerController],
  providers: [],
})
export class KafkaConsumerModule {}
