import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {defer} from "rxjs/observable/defer";
import {of} from "rxjs/observable/of";
import {AuthActionTypes, Logout, Login} from "./auth.actions";
import {tap} from "rxjs/operators";



@Injectable()
export class AuthEffects {

    @Effect({dispatch:false})
    login$ = this.actions$.pipe(
        ofType<Login>(AuthActionTypes.LoginAction),
        tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
    );

    @Effect({dispatch:false})
    logout$ = this.actions$.pipe(
        ofType<Logout>(AuthActionTypes.LogoutAction),
        tap(action => localStorage.removeItem('user'))
    );

    @Effect()
    init$ = defer(() => {

        const userData = localStorage.getItem('user');

        if (userData) {
            return of(new Login(JSON.parse(userData)))
        }
        else {
            return of(new Logout());
        }
    });

    constructor(private actions$: Actions) {

    }

}
