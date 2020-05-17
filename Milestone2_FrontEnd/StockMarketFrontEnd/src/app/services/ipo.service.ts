import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //请求数据
import { environment } from '../../environments/environment' //root url

@Injectable({
  providedIn: 'root'
})
export class IPOService {

  constructor(public http: HttpClient) { }

  // USER
  getIPOs() {
    // let api = environment.baseUrl + '/user/ipo/list'
    let api = "http://localhost:9002/user/ipo/list"
    return this.http.get(api)
  }

  // admin
  getAdminIPOs() {
    // let api = environment.baseUrl + '/user/ipo/list'
    let api = "http://localhost:9002/admin/ipo/list"
    return this.http.get(api)
  }

}
