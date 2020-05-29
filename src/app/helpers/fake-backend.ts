import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import {User} from '../models/user';

const users: User[] = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const { url, method, headers, body } = request;

    return of(null)
    .pipe(mergeMap(handleRoute))
    .pipe(materialize())
    .pipe(delay(500))
    .pipe(dematerialize())

    function handleRoute(){
      switch(true){
        
      }
    }
  }
}