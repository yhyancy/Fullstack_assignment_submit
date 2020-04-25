import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' //引入router,实现路由的js跳转
import { UserService } from '../../services/user.service' //引入服务-实现点击sign in,post提交数据

interface Alert {
  type: string;
  message: string;
}
const ALERTS: Alert[] = [];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  alerts: Alert[];
  constructor(public router: Router, public userService: UserService) {
    // constructor(public router: Router) {

    this.reset();

  } //声明路由

  ngOnInit(): void {
  }

  onLogin(value: any, valid: boolean) {
    console.log(value)
    console.log(valid)
    // 登录操作
    if (valid) {
      //登录验证成功
      // 向后台发送数据
      this.userService.postLogIn(value).subscribe((data) => {
        // if (200 = data.result) {
        //   console.log('登录成功')
        //   this.alerts.push({ type: 'success', message: 'username or password error!' });
        //   // TODO: 根据role来判断跳转的URL
        //   this.router.navigate(['/userhome']);
        // } else {
        //   console.log('登录失败')
        //   this.alerts.push({ type: 'danger', message: 'username or password error!' });
        // }
        console.log(data)
        this.router.navigate(['/userhome']);
      })

      //TEST:
      // this.router.navigate(['/userhome']);

    }
  }
  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
