import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AppState} from "../reducers";
import {select, Store} from "@ngrx/store";
import {isLoggedIn} from "./auth.selectors";
import {first, tap} from "rxjs/operators";


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store:Store<AppState>, private router:Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store
            .pipe(
                select(isLoggedIn),
                tap(loggedIn => {

                    console.log(loggedIn);

                    if (!loggedIn) {
                        this.router.navigateByUrl('/')
                    }
                }),
                first()
            );
    }



}