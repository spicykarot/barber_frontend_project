import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppCookieService } from './app-cookie.service';

@Injectable({
  providedIn: 'root'
})
export class GuardtokenService implements CanActivate{

  constructor(
    private appcookieservice : AppCookieService,
    private router:Router
    ) { }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.appcookieservice.checkToken()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
