import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:7200/";

  postCustomerData(data: any): Observable<any>{
    return this.http.post(this.url+"customer/", data);
  }
  
}
