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
}
