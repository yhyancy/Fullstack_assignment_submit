import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' //引入Router

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onLogin(value: any, valid: boolean) {
    if (valid) {
      this.router.navigate(['/login']);
    }
  }

}
