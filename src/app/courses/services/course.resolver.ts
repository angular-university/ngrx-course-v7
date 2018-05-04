


import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CoursesService} from "./courses.service";
import {AppState} from "../../reducers";
import {select, Store} from "@ngrx/store";
import {filter, first, tap} from "rxjs/operators";



@Injectable()
export class CourseResolver implements Resolve<Course> {

    constructor(
        private coursesService:CoursesService,
        private store: Store<AppState>) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {

        const courseId = route.params['id'];

        return this.coursesService.findCourseById(courseId);
    }

}

