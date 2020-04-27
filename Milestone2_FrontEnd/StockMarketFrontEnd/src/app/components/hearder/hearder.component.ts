import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'; // 读取cookie

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.scss']
})
export class HearderComponent implements OnInit {
  public UNAME_COOKIE: Boolean
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    console.log('this is header')
    this.getUnameCookie();
  }
  // 判断UNAME Cookie是否存在，如果存在，显示ME, 如果不存在，显示SIGN IN
  getUnameCookie() {
    if (this.cookieService.get("UNAME")) {
      this.UNAME_COOKIE = true
    } else {
      this.UNAME_COOKIE = false
    }
  }

}
