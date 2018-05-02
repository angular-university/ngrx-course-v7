import { coursesReducer, initialCoursesState } from './course.reducer';

describe('Course Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = coursesReducer(initialCoursesState, action);

      expect(result).toBe(initialCoursesState);
    });
  });
});
