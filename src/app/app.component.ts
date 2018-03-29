import {Component, OnInit} from '@angular/core';
import {AppState} from "./reducers";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {isLoggedIn, isLoggedOut} from "./auth/auth.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;

    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {

        this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));

        this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));
    }


}
