import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //请求数据
import { environment } from '../../environments/environment' //root url

@Injectable({
  providedIn: 'root'
})
export class IPOService {

  constructor(public http: HttpClient) { }

  getIPOs() {
    let api = environment.baseUrl + '/userhome/ipolist'
    return this.http.get(api).subscribe((response: any) => {
      console.log(response)
    })

  }
}
