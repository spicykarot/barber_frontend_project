import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private http: HttpClient) { }

  fetchBarberShopList(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/apiBarberShop/getAllBarberShop');
  }
}
