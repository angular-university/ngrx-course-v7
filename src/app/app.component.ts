import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Logout } from './auth/auth.actions';
import { Observable } from 'rxjs';
import { isLoggedIn, isLoggedOut } from './auth/auth.selectors';
import { Router } from '@angular/router';
import { AppState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;


  constructor(private store: Store<AppState>, private router: Router) {

  }

  ngOnInit() {
    this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      );

    this.isLoggedOut$ = this.store
      .pipe(
        select(isLoggedOut)
      );

  }

  logout() {
    this.store.dispatch(new Logout());
    this.router.navigateByUrl('/login');
  }


}
