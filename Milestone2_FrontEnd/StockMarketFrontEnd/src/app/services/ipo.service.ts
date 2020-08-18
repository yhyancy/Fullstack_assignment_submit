import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //请求数据
import { environment } from '../../environments/environment' //root url


@Injectable({
  providedIn: 'root'
})
export class IPOService {

  constructor(public http: HttpClient) { }


  // user/ipo/list
  getUserIPOs() {
    // let api = environment.baseUrl + '/user/ipo/list'
    let api = "http://localhost:8083/user/ipo/list"
    // let api = "http://www.fsd.yancystudy.com:8085/yancy/ipo/user/ipo/list"

    return this.http.get(api)
  }


  // admin/ipo/list
  getAdminIPOs() {
    // let api = environment.baseUrl + '/user/ipo/list'
    let api = "http://localhost:8083/admin/ipo/list"
    return this.http.get(api)
  }

  // admin/ipo/add
  addIpo(ipo: any) {
    let api = "http://localhost:8083/admin/ipo/add"
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(api, JSON.stringify(ipo), httpOtions)

  }

}
