
import { createReducer, on, Action } from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

import {Course} from './model/course';
import * as courseActions from './course.actions';



export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}


export const adapter: EntityAdapter<Course> =
  createEntityAdapter<Course>();


export const initialCoursesState: CoursesState = adapter.getInitialState({
  allCoursesLoaded: false
});

export const reducer = createReducer(
  initialCoursesState,
  on(courseActions.courseLoaded, (state, { course }) => {
    return adapter.addOne(course, state);
  }),
  on(courseActions.allCoursesLoaded, (state, { courses }) => {
    return adapter.addAll(courses, {...state, allCoursesLoaded: true});
  }),
  on(courseActions.courseSaved, (state, { course }) => {
    return adapter.updateOne(course, state);
  })
);

export function coursesReducer(state = initialCoursesState , action: Action): CoursesState {
  return reducer(state, action);
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
