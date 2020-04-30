import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // 引入router,实现页面跳转
import { cookieService } from '../../services/cookie.service' // 引入cookie service

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.scss']
})
export class HearderComponent implements OnInit {

  public userName: String
  public isSignin: boolean

  constructor(private router: Router, private cookieService: cookieService) { }

  ngOnInit(): void {
    // 首次进入页面初始化，通过token判断是否登录
    //如果登录，则显示用户名字的button,通过cookie获取用户名
    if (sessionStorage.getItem('token')) {
      this.isSignin = true
      this.userName = this.cookieService.getUnameCookie()
    }
    // 如果没登录，则显示sign in button
    else {
      this.isSignin = false
    }
  }
  //检测，并在发生Angular无法或不愿意自己检测的变化时做出反应。在每个Angular变更检测周期中调用
  ngDoCheck(): void {
    if (sessionStorage.getItem('token')) {
      this.isSignin = true
      this.userName = this.cookieService.getUnameCookie()
    } else {
      this.isSignin = false
    }

  }

  OnLogout() {
    //删除cookie
    this.cookieService.delUnameCookie()
    // 删除token
    sessionStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}
