import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions) {}
}
