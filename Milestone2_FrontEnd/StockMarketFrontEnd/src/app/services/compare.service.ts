import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment' //root url

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  constructor(public http: HttpClient) { }
  postOneComapre(value: any) {
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(value), httpOtions);
  }
}
