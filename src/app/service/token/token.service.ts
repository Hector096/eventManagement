import { Injectable , Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {HttpServiceService} from '../http-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(private injector : Injector) { }

 intercept(req, next ){

  let token =  this.injector.get(HttpServiceService);
 let tokentreq = req.clone({
    setHeaders:{
      Authorization: `${token.gettoken()}`
    }
 })
   return next.handle(tokentreq)

 }


  
}