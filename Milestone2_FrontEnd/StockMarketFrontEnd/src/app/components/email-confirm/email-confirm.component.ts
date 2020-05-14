import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment' //root url
import { ActivatedRoute } from '@angular/router' //引入ActivatedRoute, 实现获取参数
import { Router } from '@angular/router' // 页面跳转



@Component({
  selector: 'app-email-confirm',
  templateUrl: './email-confirm.component.html',
  styleUrls: ['./email-confirm.component.scss']
})
export class EmailConfirmComponent implements OnInit {

  constructor(public http: HttpClient, public activedRoute: ActivatedRoute, public router: Router) { }
  public emailConfirm: any


  ngOnInit(): void {
  }
  confirm() {
    this.activedRoute.queryParams.subscribe((data) => {
      console.log(data)
      this.emailConfirm = data
    })

    let api = environment.baseUrl + "/signup/validate?uname=yancy666&code=8244"
    // TODO: 如何获取uname和code
    this.http.get(api).subscribe((response: any) => {
      console.log(response)
      if (response.status == "OK") {
        //  注册并激活成功，redirect sign in
        this.router.navigate(['/login'])
      }
      else {
        //激活失败，提示信息：注册失败
        alert('FAILED')
      }
    })

  }

}
