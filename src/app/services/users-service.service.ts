import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginResponse } from '../interface/i-loginresponse';
import { IRegisterresponse } from '../interface/i-registerresponse';

//TODO API
const URL__API = 'http://localhost:8080/apiUser/';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http : HttpClient) {
  }

  login(email : string , password :string): Observable <ILoginResponse>{
       let url = URL__API + 'login';
       let body = {
         email : email ,
         password : password
       }
       return this.http.post<ILoginResponse>(url,body); 
  }

  registration(email : string , password :string,firstName :string,lastName :string): Observable <IRegisterresponse>{
    let url = URL__API + 'registra';
    let body = {
      email : email ,
      password : password,
      firstName : firstName,
      lastName : lastName

    }
    return this.http.post<IRegisterresponse>(url,body); 
}
}
