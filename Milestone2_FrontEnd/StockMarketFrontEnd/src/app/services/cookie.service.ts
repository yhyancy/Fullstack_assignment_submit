import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'; // 引入cookie

@Injectable({
  providedIn: 'root'
})
export class cookieService {

  constructor(public cookieService: CookieService) { }

  getUnameCookie() {
    console.log(this.cookieService.get("UNAME"))
    return this.cookieService.get("UNAME")
  }
}
