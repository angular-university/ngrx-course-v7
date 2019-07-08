
import { createAction } from '@ngrx/store';
import { User } from '../model/user.model';

export const login = createAction(
  '[Auth/API] Login Success',
  (user: User) => ({ user })
);

export const logout = createAction(
  '[Auth/API] Logout Success'
);
