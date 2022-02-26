import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, timer } from 'rxjs';
import { AppCookieService } from '../services/app-cookie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dateTime: Observable<Date>
  nameLogin = sessionStorage.getItem('fname')
  lnameLogin = sessionStorage.getItem('lname')
  
  constructor(private _service: Router , private cookieservice : AppCookieService) { 
    this.dateTime = timer(0, 1000).pipe(
      map(() => {
      return new Date()
    })
    )
  }

  ngOnInit() {
  }
  doLogout():void{
    this.cookieservice.deleteToken();
    this._service.navigate(['/login']);
  }
  
}
