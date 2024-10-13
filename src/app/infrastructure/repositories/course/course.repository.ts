import { Injectable } from '@nestjs/common';
import DatabaseService from '../../common/database/database.service';
import * as path from 'path';
import { Observable, map } from 'rxjs';
import { CourseFromDB } from './course.repository.i';
import { ICourseEntity } from '../../../common/interfaces/course.i';

@Injectable()
export class CourseRepository {
  path: string = '../../../../../src/asset/sql';

  constructor(private readonly databaseService: DatabaseService) {}

  create(arg: ICourseEntity) {
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

  update(arg: ICourseEntity) {
    const filePath = `${this.path}/update-course.sql`;
    const params = [arg.start, arg.end, arg.organizationId, arg.name, arg.id];

    return this.databaseService
      .queryByFile(path.join(__dirname, filePath), params)
      .pipe(
        map((res) => {
          return res.rows[0];
        }),
      );
  }

  getDetail(id: number): Observable<CourseFromDB | null> {
    const filePath = `${this.path}/get-course-detail.sql`;
    const params = [id];

    return this.databaseService
      .queryByFile(path.join(__dirname, filePath), params)
      .pipe(
        map((res) => {
          return res.rows[0];
        }),
      );
  }

  getAllByOrganizationId(organizationId: number) {
    const filePath = `${this.path}/get-by-organization-id.sql`;
    const params = [organizationId];

    return this.databaseService
      .queryByFile(path.join(__dirname, filePath), params)
      .pipe(
        map((res) => {
          return res.rows;
        }),
      );
  }
}
