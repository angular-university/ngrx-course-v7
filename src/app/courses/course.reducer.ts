import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {CourseActions, CourseActionTypes} from './course.actions';
import {Course} from "./model/course";

export interface CoursesState extends EntityState<Course> {
    allCoursesLoaded: boolean
}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>();


export const initialCoursesState: CoursesState = adapter.getInitialState({
    // additional entity state properties
    allCoursesLoaded: false
});


export function coursesReducer(state = initialCoursesState,
                               action: CourseActions): CoursesState {
    switch (action.type) {

        case CourseActionTypes.CourseSaved: {
            return adapter.updateOne(action.payload.course, state);
        }

        case CourseActionTypes.AllCoursesLoaded: {
            return adapter.addAll(action.payload.courses, {...state, allCoursesLoaded: true});
        }

        case CourseActionTypes.CourseLoaded: {
            return adapter.addOne(action.payload.course, state);
        }

        default: {
            return state;
        }
    }
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
