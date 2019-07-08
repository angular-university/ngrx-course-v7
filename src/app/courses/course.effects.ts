
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, concatMap, exhaustMap, filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import * as courseActions from './course.actions';
import { CoursesService } from './services/courses.service';
import { AppState } from '../reducers';
import { allCoursesLoaded } from './course.selectors';

@Injectable()
export class CourseEffects {

  loadCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActions.courseRequested),
      mergeMap(action => this.coursesService.findCourseById(action.courseId)),
      map(course => courseActions.courseLoaded(course)),
      catchError(err => {
        console.log('error loading course ', err);
        return throwError(err);
      })
    )
  );

  loadAllCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActions.allCoursesRequested),
      withLatestFrom(this.store.pipe(select(allCoursesLoaded))),
      filter(([action, coursesLoaded]) => !coursesLoaded),
      mergeMap(() => this.coursesService.findAllCourses()),
      map(courses => courseActions.allCoursesLoaded(courses)),
      catchError(err => {
        console.log('error loading all courses ', err);
        return throwError(err);
      })
    )
  );

  loadLessonsPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActions.lessonsPageRequested),
      mergeMap(action => this.coursesService.findLessons(action.payload.courseId,
        action.payload.page.pageIndex, action.payload.page.pageSize)
        .pipe(
          catchError(err => {
            console.log('error loading a lessons page ', err);
            this.store.dispatch(courseActions.lessonsPageCancelled());
            return of([]);
          })
        )
      ),
      map(lessons => courseActions.lessonsPageLoaded(lessons))
    )
  );

  constructor(private actions$: Actions, private coursesService: CoursesService,
              private store: Store<AppState>) {
  }

}









