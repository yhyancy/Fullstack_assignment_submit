import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //post数据交互
import { environment } from '../../environments/environment' //root url
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  // 'Access-Control-Allow-Credentials': 'true' 允许跨域
  postLogIn(user: any) {
    // const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOtions);
  }

  postSignUp(user: any) {
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    // const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post(`${environment.baseUrl}/signup`, JSON.stringify(user), httpOtions)
  }

  public get currentUserToken(): string {
    return sessionStorage.getItem('token');
  }
}
