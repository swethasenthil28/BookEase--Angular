import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/Login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  userLogin(newLogin:Login): Observable<any> {
    return this.httpClient.post("http://localhost:8080/client/login", newLogin);
  }
  adminLogin(newLogin:Login):Observable<any>{
    return this.httpClient.post("http://localhost:8080/owner/login",newLogin);
  }
}
