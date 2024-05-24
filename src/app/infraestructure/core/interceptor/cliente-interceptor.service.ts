import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../driven-adapter/login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteInterceptorService {

  constructor(private loginService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token:String=this.loginService.userToken;

    if (token!=""){
      req=req.clone(
        {
          setHeaders: {
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );
    }
    return next.handle(req);
  }
}
