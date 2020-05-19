import { Component, OnInit } from '@angular/core';
import { COMPANY } from '../../../Model/company';
import { ManageCompanyService } from '../../../services/manage-company.service'

@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.scss']
})
export class ManagecompanyComponent implements OnInit {
  // 用于接收后台传值
  companyList: COMPANY[] = []
  page = 1;
  pageSize = 4;
  collectionSize: any;
  constructor(public manageCompanyService: ManageCompanyService) { }

  ngOnInit(): void {
    this.getComapnyList()
  }

  getComapnyList() {
    //  后台获取 companylist
    this.manageCompanyService.getCompanyList().subscribe((data: any) => {
      console.log(data)
      this.companyList = data
      // 分页
      this.collectionSize = this.companyList.length
    })
  }

  get countries(): COMPANY[] {
    return this.companyList
      .map((country, i) => ({ id: i + 1, ...country }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
