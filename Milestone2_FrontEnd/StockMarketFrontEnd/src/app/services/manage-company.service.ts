import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageCompanyService {

  constructor(public http: HttpClient) { }

  // /admin/company/list
  getCompanyList() {
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) }; //固定写法
    var api = 'http://localhost:8082/admin/company/list'
    return this.http.get(api)
  }

  // 增加公司
  addCompany(company: any) {
    console.log(company)
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) }; //固定写法
    var api = 'http://localhost:8082/admin/company/add'
    return this.http.post(api, JSON.stringify(company), httpOtions)
  }
  //  更新公司
  editCompany(company: any) {
    console.log(company)
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) }; //固定写法
    var api = 'http://localhost:8082/admin/company/update'
    return this.http.post(api, JSON.stringify(company), httpOtions)
  }

  // 停用公司
  disableCompany(company) {
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) }; //固定写法
    var api = 'http://localhost:8082/admin/company/disable'
    return this.http.post(api, JSON.stringify(company), httpOtions)
  }
}
