import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {URL} from '../service/api/api'
import {throwError} from 'rxjs'
import {catchError} from 'rxjs/operators'
import {Signupdata} from '../models/user-data'
import {Logindata} from '../models/login-data'


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
 
  private signupurl = URL.signup;
  private loginurl = URL.login;
  constructor(public _http: HttpClient) { }
  gettoken(){return localStorage.getItem('authorization');}

  signup(form:Signupdata){
    return this._http.post<any>(this.signupurl,form)
        .pipe(catchError(this.errorHandler));
   }

   errorHandler(error: HttpErrorResponse){
     return throwError(error);
   }
  login(form:Logindata){
    return this._http.post<any>(this.loginurl,form)
    .pipe(catchError(this.errorHandler));
}

}