import { Injectable } from '@nestjs/common';
import { CourseRepository } from '../../infrastructure/repositories/course';

@Injectable()
export class GetCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  excute(organizationId: number) {
    return this.courseRepository.getAllByOrganizationId(organizationId);
  }
}
