import { reducer, initialAuthState } from './auth.reducer';

describe('Auth Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialAuthState, action);

      expect(result).toBe(initialAuthState);
    });
  });
});
