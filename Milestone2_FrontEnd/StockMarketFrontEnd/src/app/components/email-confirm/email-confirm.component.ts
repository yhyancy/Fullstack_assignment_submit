import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment' //root url

@Component({
  selector: 'app-email-confirm',
  templateUrl: './email-confirm.component.html',
  styleUrls: ['./email-confirm.component.scss']
})
export class EmailConfirmComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }
  validate() {

    this.http.get(`${environment.baseUrl}/signup/validate`).subscribe((response: any) => {
      console.log(response)
    })
    // if (response.status = "ok") { rediredt sign in}
    // else { failed }

  }

}
