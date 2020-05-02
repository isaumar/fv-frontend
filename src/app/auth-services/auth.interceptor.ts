import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';

import {SessionService} from './session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    protected sessionService: SessionService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const data = this.sessionService.getToken();
    if (data) {
      const headers = request.headers
        .set('Authorization', `Bearer ${data.access_token}`);
      request = request.clone({headers});
    }
    return next.handle(request);
  }
}
