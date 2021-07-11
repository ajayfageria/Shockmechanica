import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 private url = "http://localhost:7200/"
  constructor(private http: HttpClient) { }

  public adminLogin(data: any): Observable<any>{
    return this.http.post(this.url+"user/login", data);
  }

  public createAdmin(data: any): Observable<any>{
    return this.http.post(this.url+"user/register", data);
  }

  public getAdminData(id?:any): Observable<any>{
    if(id){
    return this.http.get(this.url+"customer/"+id);
    }else{

    return this.http.get(this.url+"customer/");
    }
  }

  public deleteAdminData(id:any): Observable<any>{
    return this.http.delete(this.url+"customer/"+id); 
}




}
