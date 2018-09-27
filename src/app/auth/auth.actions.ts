import { Action } from '@ngrx/store';
import { User } from '../model/user.model';

export enum AuthActionTypes {
  LoginAction = '[Auth] Load Auths',
  LogoutAction = '[Auth] Load Auths',
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;

  constructor(public payload: {user: User}) {

  }
}

export type AuthActions = Login;
