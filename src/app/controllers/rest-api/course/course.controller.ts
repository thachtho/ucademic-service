import { Controller, Get, Query } from '@nestjs/common';
import { Route } from '../rest-api.i';
import { GetCourseUseCase } from '../../../application/get-courses/get-courses.usecase';
import { GetCoursesQuery } from './course.controller.i';

@Controller(Route.COURSE)
export class CourseControler {
  constructor(private readonly getCoursesUsecase: GetCourseUseCase) {}

  @Get()
  findAll(@Query() query: GetCoursesQuery) {
    const { organizationId } = query;
    return this.getCoursesUsecase.excute(+organizationId);
  }
}
