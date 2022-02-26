import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppCookieService } from 'src/app/services/app-cookie.service';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  loginform : FormGroup = new  FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  constructor(private userservice : UsersServiceService,
    private cookieservice : AppCookieService,
    private ruote : Router
    ) { }

  ngOnInit(): void {
    
  }
  onSubmit():void{
if(this.loginform.invalid){
        return;
    }
    let username = this.loginform.controls['email'].value;
    let password = this.loginform.controls['password'].value;
   
    this.userservice.login(username,password).subscribe((response)=>{
     this.cookieservice.setToken(response.token);
     this.ruote.navigate(['/home']);
  },(error)=>{
    // alert(error.error.error);
});

  }
}