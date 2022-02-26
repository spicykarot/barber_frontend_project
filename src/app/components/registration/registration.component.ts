import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  registernform : FormGroup = new  FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required)

  });

  constructor(private userservice : UsersServiceService,
    private ruote : Router
    ) { }

  ngOnInit(): void {
    
  }
  onSubmit():void{
if(this.registernform.invalid){
        return;
    }
    let email = this.registernform.controls['email'].value;
    let password = this.registernform.controls['password'].value;
    let firstName = this.registernform.controls['firstName'].value;
    let lastName = this.registernform.controls['lastName'].value;
    
    this.userservice.registration(email,password,firstName,lastName).subscribe((response)=>{
     this.ruote.navigate(['/login']);
  },(error)=>{
    // alert(error.error.error);
});

  }
}
