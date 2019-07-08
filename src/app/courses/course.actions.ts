
import { createAction } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Course } from './model/course';
import { Lesson } from './model/lesson';

export interface PageQuery {
pageIndex: number;
pageSize: number;
}

export const lessonsPageRequested = createAction(
  '[Course Landing Page] Lessons Page Requested',
  (payload: {courseId: number, page: PageQuery}) => ({ payload })
);

export const lessonsPageLoaded = createAction(
  '[Courses API] Lessons Page Loaded',
  (lessons: Lesson[]) => ({ lessons })
);

export const lessonsPageCancelled = createAction(
  '[Courses API] Lessons Page Cancelled'
);

export const courseRequested = createAction(
  '[View Course Page] Course Requested',
  (courseId: number) => ({ courseId })
);

export const courseLoaded = createAction(
  '[Courses API] Course Loaded',
  (course: Course) => ({ course })
);

export const allCoursesRequested = createAction(
  '[Courses Home Page] All Courses Requested'
);

export const allCoursesLoaded = createAction(
  '[Courses API] All Courses Loaded',
  (courses: Course[]) => ({ courses })
);

export const courseSaved = createAction(
  '[Edit Course Dialog] Course Saved',
  (course: Update<Course>) => ({ course })
);
