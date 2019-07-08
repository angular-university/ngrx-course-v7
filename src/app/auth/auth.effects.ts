import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authApiActions from './auth.actions';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { defer, of } from 'rxjs';

@Injectable()
export class AuthEffects {

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authApiActions.login),
      tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
    ),
    { dispatch: false }
  );

  logoutSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(authApiActions.logout),
        tap(() => {
          localStorage.removeItem('user');
          this.router.navigateByUrl('./login');
        })
      ),
      { dispatch: false }
  );

  init$ = createEffect(() => defer(() => {
    const userData = localStorage.getItem('user');

    if (userData) {
      return of(authApiActions.login(JSON.parse(userData)));
    } else {
      return of(authApiActions.logout());
    }
  }));

  constructor(private actions$: Actions, private router: Router) {
  }
}
