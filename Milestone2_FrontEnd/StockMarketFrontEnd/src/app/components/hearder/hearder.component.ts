import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; // 引入router，NavigationEnd, 实现刷新页面
import { cookieService } from '../../services/cookie.service' // 引入cookie service

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.scss']
})
export class HearderComponent implements OnInit {
  public UNAME_COOKIE: Boolean
  navigationSubscription;
  constructor(private router: Router, private cookieService: cookieService) {
    // 实现重新读取cookie, 刷新页面
    this.navigationSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.init();
      }
    });
  }

  ngOnInit(): void {

  }
  init() {
    console.log('get UNAME cookie', this.cookieService.getUnameCookie())
    // 判断UNAME Cookie是否存在，如果存在，显示ME, 如果不存在，显示SIGN IN
    if (this.cookieService.getUnameCookie()) {
      this.UNAME_COOKIE = true
    } else {
      this.UNAME_COOKIE = false
    }
  }
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }


}
