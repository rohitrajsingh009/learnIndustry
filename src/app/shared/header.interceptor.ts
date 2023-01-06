import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
// ng g interceptor shared/header
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var API_KEY = '123456';
    console.log(request)
    const newHeaders = new HttpHeaders({
      "Content-Type":"application/json",
      "setHeaders": API_KEY,
      "authorization":`Bearer ${localStorage.getItem('token')}`
       }
       );
//clone request and change header
let clone = request.clone( { headers: newHeaders } );
    return next.handle(clone);
  }
}
