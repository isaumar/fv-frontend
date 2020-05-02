import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, Validators} from '@angular/forms';
import {SessionService} from '../auth-services/session.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../auth-services/authentication.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new ErrorStateMatcher();
  hide = true;

  inputs = {
    email: null,
    password: null,
    confirmPassword: null,
    firstName: null,
    lastName: null,
    phoneNumber: null
  };

  constructor(
    public router: Router,
    protected sessionService: SessionService,
    protected authenticationService: AuthenticationService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  register(){
    this.authenticationService.register(this.inputs).subscribe((response: HttpResponse<any>) => {
      if (response.status === 201) {
        this.snackBar.open('Account created successfully', null, {
          duration: 3000,
          horizontalPosition: 'right'
        });
        this.router.navigateByUrl('/');
      }
    }, (error: HttpErrorResponse) => {
    });
  }

}
