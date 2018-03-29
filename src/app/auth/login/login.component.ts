import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {State} from "../../reducers";
import {Store} from "@ngrx/store";

import * as fromAuth from '../auth.actions';
import {AuthService} from "../auth.service";
import {tap} from "rxjs/operators";
import {noop} from "rxjs/util/noop";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
      private fb:FormBuilder,
      private auth: AuthService,
      private router:Router,
      private store: Store<State>) {

      this.form = fb.group({
          email: ['test@angular-university.io', [Validators.required]],
          password: ['test', [Validators.required]]
      });

  }

  ngOnInit() {

  }

  login() {

      const val = this.form.value;

      this.auth.login(val.email, val.password)
          .pipe(
              tap(user => {

                  this.store.dispatch(new fromAuth.Login(user));

                  this.router.navigateByUrl('/courses');
              })
          )
          .subscribe(
              noop,
              () => alert('Login failed')
          );


  }


}
