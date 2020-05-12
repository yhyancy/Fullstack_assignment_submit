import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment' //root url

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  constructor(public http: HttpClient) { }

  //  standard chart
  // 一个公司，不同时间段
  compareSingleCompany(value: any) {
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`${environment.baseUrl}/compare/company/single`, JSON.stringify(value), httpOtions);
  }
  // 一个sector，不同时间段
  compareSingleSector(value: any) {
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`${environment.baseUrl}/compare/sector/single`, JSON.stringify(value), httpOtions);
  }

  // custom chart
  // 两个公司compareCompanies，相同时间段
  compareCompanies(value: any) {
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`${environment.baseUrl}/compare/sector/multi`, JSON.stringify(value), httpOtions);
  }
  // 一个公司一个sector，相同时间段
  compareComandSec(value: any) {
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`${environment.baseUrl}/compare/comandsec`, JSON.stringify(value), httpOtions);
  }

  // 两个sector,相同时间段
  compareSectors(value: any) {
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`${environment.baseUrl}/compare/sector/multi`, JSON.stringify(value), httpOtions);
  }
}
