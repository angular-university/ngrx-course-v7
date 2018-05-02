import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CoursesState} from "./course.reducer";
import * as fromCourses from './course.reducer';

export const selectCoursesState = createFeatureSelector<CoursesState>("courses");



export const selectCourseById = (courseId:number) => createSelector(
    selectCoursesState,
    coursesState => coursesState.entities[courseId]
);


export const allCoursesLoaded = createSelector(
    selectCoursesState,
    coursesState => coursesState.allCoursesLoaded
);


export const selectAllCourses = createSelector(
    selectCoursesState,
    fromCourses.selectAll
);