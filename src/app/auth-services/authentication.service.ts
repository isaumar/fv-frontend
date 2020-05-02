import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken} from '../models/auth-token';
import {LOGIN_URL, REGISTER_URL, USER_URL} from '../models/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {}


  login(data: any): Observable<any> {
    return this.httpClient.post<AuthToken>(LOGIN_URL, data, {
      observe: 'response'
    });
  }

  register(data: any): Observable<any> {
    return this.httpClient.post(REGISTER_URL, data, {
      observe: 'response'
    });
  }

  getUser() {
    return this.httpClient.get(USER_URL);
  }

}
