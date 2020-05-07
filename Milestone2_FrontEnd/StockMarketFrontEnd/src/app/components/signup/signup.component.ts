import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' //引入Router
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public router: Router, public userService: UserService) { }

  ngOnInit(): void {
  }

  onSignUp(value: any, valid: boolean) {
    if (valid) {
      //往后台传送数据
      this.userService.postSignUp(value).subscribe((data) => {
        console.log(data)
      })
      // TODO:判断： 提示信息， 然后跳转
      this.router.navigate(['/login']);


    }
  }

}
