import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AppCookieService {

  constructor(private cookieservice  : CookieService) {}

  setToken(token:string):void{
    this.cookieservice.set('TOKEN',token);
  }

  getToken():string{
    return this.cookieservice.get('TOKEN');
  }

  checkToken():boolean{
    return this.cookieservice.check('TOKEN');
  }

  deleteToken():void{
    this.cookieservice.delete('TOKEN');
  }
}