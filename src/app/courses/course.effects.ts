import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
     AllCoursesLoaded, AllCoursesRequested, CourseActionTypes, CourseLoaded,
    CourseRequested
} from "./course.actions";
import {catchError, concatMap, exhaustMap, filter, map, mergeMap, withLatestFrom} from "rxjs/operators";
import {CoursesService} from "./services/courses.service";
import {_throw} from "rxjs/observable/throw";
import {select, Store} from "@ngrx/store";
import {allCoursesLoaded} from "./course.selectors";
import {AppState} from "../reducers";


@Injectable()
export class CourseEffects {

    @Effect()
    loadCourse$ = this.actions$
        .pipe(
            ofType<CourseRequested>(CourseActionTypes.CourseRequested),
            mergeMap(action =>  this.coursesService.findCourseById(action.payload.courseId)),
            map(course => new CourseLoaded({course})),
            catchError(err => {
                console.log('error loading course ', err);
                return _throw(err);
            })
        );

    @Effect()
    loadAllCourses$ = this.actions$
        .pipe(
            ofType<AllCoursesRequested>(CourseActionTypes.AllCoursesRequested),
            withLatestFrom(this.store.pipe(select(allCoursesLoaded))),
            filter(([action, allCoursesLoaded]) => !allCoursesLoaded),
            mergeMap(() => this.coursesService.findAllCourses()),
            map(courses => new AllCoursesLoaded({courses})),
            catchError(err => {
                console.log('error loading all courses ', err);
                return _throw(err);
            })
        );


    constructor(private actions$: Actions, private coursesService: CoursesService, private store: Store<AppState>) {

    }
}
