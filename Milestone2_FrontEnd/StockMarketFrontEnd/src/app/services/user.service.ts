import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //post数据交互
import { environment } from '../../environments/environment' //root url
import { cookieService } from '../services/cookie.service' // 引入cookie service
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public username: any
  constructor(public http: HttpClient, public cookieService: cookieService) { }
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

  // change pwd
  postChangePwd(value: any) {
    // 从cookie里获取uanme
    this.username = this.cookieService.getUnameCookie()
    value.username = this.username //添加 username属性
    console.log(value)
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`${environment.baseUrl}/changepwd`, JSON.stringify(value), httpOtions)
  }

  public get currentUserToken(): string {
    return sessionStorage.getItem('token');
  }
}
