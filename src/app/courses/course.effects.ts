import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CourseActionTypes, CourseLoaded, CourseRequested} from './course.actions';
import {throwError} from 'rxjs';
import {catchError, concatMap, exhaustMap, filter, map, mergeMap, withLatestFrom} from "rxjs/operators";
import {CoursesService} from './services/courses.service';

@Injectable()
export class CourseEffects {

  @Effect()
  loadCourse$ = this.actions$
    .pipe(
      ofType<CourseRequested>(CourseActionTypes.CourseRequested),
      mergeMap(action => this.coursesService.findCourseById(action.payload.courseId)),
      map(course => new CourseLoaded({course})),
      catchError(err => {
        console.log('error loading course ', err);
        return throwError(err);
      })

  );


  constructor(private actions$ :Actions, private coursesService: CoursesService) {

  }

}
