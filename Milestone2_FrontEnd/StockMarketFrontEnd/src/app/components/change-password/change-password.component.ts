import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { cookieService } from '../../services/cookie.service' // 引入cookie service
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public username: any
  public result: any

  constructor(public router: Router, public cookieService: cookieService, public userService: UserService) { }

  ngOnInit(): void {
  }
  changePwd(value: any, valid: boolean) {
    // 前端校验old password 是否和以前一样，并且new password不能和 old password一致
    // 前端发送新密码 给后端， 格式？
    // 后端返回200，前端redirect signin 页面，重新登录
    if (valid) {

      // 发送请求
      this.userService.postChangePwd(value).subscribe((data) => {
        this.result = data
        if (this.result.status == "ok") {
          //删除cookie
          this.cookieService.delUnameCookie()
          // 删除token
          sessionStorage.removeItem('token')
          alert('change password successfully.')
          //重新登录
          this.router.navigate(['/login'])
        }
        else {
          alert('change password failed.')
        }
      })



    }
  }

}
