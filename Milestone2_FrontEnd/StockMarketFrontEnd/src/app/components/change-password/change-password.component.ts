import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  changePwd(value: any, valid: boolean) {

    alert('修改密码成功')
    // 前端校验old password 是否和以前一样，并且new password不能和 old password一致
    // 前端发送新密码 给后端， 格式？
    // 后端返回200，前端redirect signin 页面，重新登录
    if (valid) {
      this.router.navigate(['/login'])
    }
  }

}
