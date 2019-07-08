import { createReducer, on, Action } from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

import {Lesson} from './model/lesson';
import * as courseActions from './course.actions';

export interface LessonsState extends EntityState<Lesson> {
  loading: boolean;
}

function sortByCourseAndSeqNo(l1: Lesson, l2: Lesson) {
  const compare = l1.courseId - l2.courseId;
  if (compare !== 0) {
    return compare;
  } else {
    return l1.seqNo - l2.seqNo;
  }
}

export const adapter: EntityAdapter<Lesson> =
  createEntityAdapter<Lesson>({
      sortComparer: sortByCourseAndSeqNo
  });

const initialLessonsState = adapter.getInitialState({
  loading: false
});

export const reducer = createReducer(
  initialLessonsState,
  on(courseActions.lessonsPageCancelled, (state) => ({
    ...state,
    loading: false
  })),
  on(courseActions.lessonsPageRequested, (state) => ({
    ...state,
    loading: true
  })),
  on(courseActions.lessonsPageLoaded, (state, { lessons }) => {
    return adapter.addMany(lessons, {...state, loading: false});
  })
);

export function lessonsReducer(state = initialLessonsState,
                               action: Action): LessonsState {
  return reducer(state, action);
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
