import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' //引入router,实现路由的js跳转

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { } //声明路由

  ngOnInit(): void {
  }

  onSignin(value: any, valid: boolean) {
    console.log(value)
    console.log(valid)
    // 验证登录
    if (!valid) {
      alert('请检查用户名和密码');
    }
    else {
      //登录成功
      // TODO: 根据role来判断跳转的URL
      this.router.navigate(['/userhome']);
      // TODO: 向后台发送数据


    }
  }

}
