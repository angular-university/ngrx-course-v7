import { Action } from '@ngrx/store';
import {User} from "../model/user.model";


export interface State {
    loggedIn:boolean;
    user:User;
}

export const initialState: State = {
    loggedIn: false,
    user: undefined
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
