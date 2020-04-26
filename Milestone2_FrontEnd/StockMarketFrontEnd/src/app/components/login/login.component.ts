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
  public result: any = { //登录后接收后台返回的值
    token: '',
    isAuth: '', //1 登录成功 0 用户不存在 -1 密码错误
    uType: ''
  };

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
        console.log(data)
        this.result = data
        if (1 == this.result.isAuth) {
          console.log('登录成功')
          this.alerts.push({ type: 'success', message: 'username or password error.' });
          // TODO: 根据role来判断跳转的URL
          this.router.navigate(['/userhome']);
        }
        else if (0 == this.result.isAuth) {
          console.log('用户不存在')
          this.alerts.push({ type: 'danger', message: 'user does not exist.' });
        }
        else { // -1 == this.result.isAuths
          console.log('密码错误')
          this.alerts.push({ type: 'danger', message: 'Wrong password.' });
        }

      })

      //TEST:
      // this.router.navigate(['/userhome']);

    }
  }
  reset() {
    this.alerts = Array.from(ALERTS);
  }
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}
