export interface IKafkaParams {
  eventName: string;
  data: any;
}

export enum KafkaTopics {
  HEALTH_CHECK = 'health_check',
  CREATE_COURSE = 'create-course',
  UPDATE_COURSE = 'update-course',
}

export enum KafkaClient {
  AUTH_SERVICE = 'AUTH-SERVICE',
}

export enum KafkaHealthCheck {
  HEALTHY = 'healthy',
  UN_HEALTHY = 'unhealthy',
  WAITING = 'waiting',
}

export interface KafkaMessage<T> {
  data: T;
}

export interface CreateCourseMessageArg {
  start: number;
  end: number;
  organizationId: number;
}

export interface UpdateCourseMessageArg {
  id: number;
  start: number;
  end: number;
  organizationId: number;
}

export interface CreateCourseMessage
  extends KafkaMessage<CreateCourseMessageArg> {}

export interface UpdateCourseMessage
  extends KafkaMessage<UpdateCourseMessageArg> {}
