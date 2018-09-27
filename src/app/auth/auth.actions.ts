import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LoginAction = '[Auth] Load Auths',
  LogoutAction = '[Auth] Load Auths',
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;
}

export type AuthActions = Login;
