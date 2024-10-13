import { Injectable } from '@nestjs/common';
import { CreateCourseUseCase } from '../../../application/create-course/create-course.usecase';
import { CreateCourseHandlerArg } from './create-course-handler.i';
import { IsValidate } from '../../../common/decorators/is-validate';
import { schema } from './schema';
import { catchError } from 'rxjs';
import { ErrorCustom } from '../../../common';

@Injectable()
export class CreateCourseHandler {
  constructor(private readonly createCourseUseCase: CreateCourseUseCase) {}

  @IsValidate({
    schema,
  })
  handler(payload: CreateCourseHandlerArg) {
    return this.createCourseUseCase.excute(payload).pipe(
      catchError((error) => {
        return ErrorCustom.handleError(error);
      }),
    );
  }
}
