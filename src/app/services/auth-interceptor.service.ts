import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppCookieService } from './app-cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{
 
  constructor(private AppCookieService : AppCookieService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.AppCookieService.getToken();
    if(token){
      let modifide = req.clone(
      {
        headers : req.headers.set('Authorization', `Bearer ${token}`)
       }
       );
       return next.handle(modifide);
    }
    return next.handle(req);
  }
}