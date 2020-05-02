import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  protected user;

  protected token;

  constructor()
   {
     this.token = JSON.parse(localStorage.getItem('token'));
   }

  get isLoggedIn() {
    return this.token != null;
  }

  setUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  hasRole(role: 'VENDOR'|'DEVELOPER') {
    if (!this.user) {
      return false;
    }
    return this.user.roles.includes(role);
  }

  getToken() {
    return this.token;
  }

  setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
    this.token = token;
  }
}
