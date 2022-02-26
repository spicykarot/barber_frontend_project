import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dateTime: Observable<Date>
  nameLogin = sessionStorage.getItem('fname')
  lnameLogin = sessionStorage.getItem('lname')
  
  constructor(private _service: Router ) { 
    this.dateTime = timer(0, 1000).pipe(
      map(() => {
      return new Date()
    })
    )
  }

  ngOnInit() {
  }

  
}
