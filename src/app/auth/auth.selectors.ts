import {createSelector} from '@ngrx/store';

import { AuthState } from './auth.reducer';


export const selectAuthState = state => <AuthState>state.auth;


export const isLoggedIn = createSelector(
  selectAuthState,
  auth => auth.loggedIn
);


export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
