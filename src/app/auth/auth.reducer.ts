import {Action} from '@ngrx/store';
import {User} from "../model/user.model";
import {AuthActions, AuthActionTypes} from "./auth.actions";


export interface AuthState {
    loggedIn: boolean;
    user: User;
}

export const initialState: AuthState = {
    loggedIn: false,
    user: undefined
};

export function reducer(state = initialState, action: AuthActions): AuthState {
    switch (action.type) {

        case AuthActionTypes.LoginAction:

            return {
                loggedIn: true,
                user: action.user
            };

        case AuthActionTypes.LogoutAction:
            return {
                loggedIn: false,
                user: undefined
            };

        default:
            return state;
    }
}
