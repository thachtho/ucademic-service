import { Injectable } from '@nestjs/common';
import DatabaseService from '../../common/database/database.service';
import * as path from 'path';
import { map } from 'rxjs';

@Injectable()
export class CourseRepository {
  path: string = '../../../../../src/asset/sql';

  constructor(private readonly databaseService: DatabaseService) {}

  create(arg: any) {
    const filePath = `${this.path}/create-course.sql`;
    const params = [arg.start, arg.end, arg.organizationId, arg.name];

    return this.databaseService
      .queryByFile(path.join(__dirname, filePath), params)
      .pipe(
        map((res) => {
          return res.rows[0];
        }),
      );
  }
}
