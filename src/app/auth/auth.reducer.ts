import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../model/user.model';

import * as authApiActions from './auth.actions';


export interface AuthState {
  loggedIn: boolean;
  user: User;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

export const reducer = createReducer(
  initialAuthState,
  on(authApiActions.login, (state, { user }) => ({
    ...state,
    loggedIn: true,
    user
  })),
  on(authApiActions.logout, () => initialAuthState)
);

export function authReducer(state = initialAuthState,
                            action: Action): AuthState {
  return reducer(state, action);
}
