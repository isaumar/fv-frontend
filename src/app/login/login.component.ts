import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SessionService} from '../auth-services/session.service';
import {AuthenticationService} from '../auth-services/authentication.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {AuthToken} from '../models/auth-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new ErrorStateMatcher();
  hide = true;

  inputs = {
    email: null,
    password: null
  };
  constructor(
    protected router: Router,
    public snackBar: MatSnackBar,
    protected sessionService: SessionService,
    protected authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.login(this.inputs)
      .subscribe((response: HttpResponse<AuthToken>) => {
        this.sessionService.setToken(response.body);
        this.router.navigateByUrl('/dashboard');
      }, (err: HttpErrorResponse) => {
        if (err.status === 422) {
          const message = 'Incomplete data submitted!';
          // const message: string = err.error.;
          this.snackBar.open(message, null, {
            duration: 3000,
            horizontalPosition: 'right'
          });
        } else if (err.status === 400) {
          const message = 'Invalid login details';
          // const message: string = err.error.;
          this.snackBar.open(message, null, {
            duration: 10000,
            horizontalPosition: 'right'
          });
        } else {
          this.snackBar.open('Problem connecting...', null, {
            duration: 5000,
            horizontalPosition: 'right',

          });
        }
      });
  }


}
