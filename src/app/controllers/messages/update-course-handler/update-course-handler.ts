import { Injectable } from '@nestjs/common';
import { catchError } from 'rxjs';
import { UpdateCourseUseCase } from '../../../application/update-course/update-course.usecase';
import { ErrorCustom } from '../../../common';
import { IsValidate } from '../../../common/decorators/is-validate';
import { schema } from './schema';
import { UpdateCourseHandlerArg } from './update-course-handler.i';

@Injectable()
export class UpdateCourseHandler {
  constructor(private readonly updateCourseUseCase: UpdateCourseUseCase) {}

  @IsValidate({
    schema,
  })
  handler(payload: UpdateCourseHandlerArg) {
    return this.updateCourseUseCase.excute(payload).pipe(
      catchError((error) => {
        return ErrorCustom.handleError(error);
      }),
    );
  }
}
