import { Component, OnInit } from '@angular/core';
import { COMPANY } from '../../../Model/company';
import { ManageCompanyService } from '../../../services/manage-company.service'

@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.scss']
})
export class ManagecompanyComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize: any;

  // companyList用于接收后台的数据
  public companyList: COMPANY[] = []
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
  // 分页
  get CompanyList(): COMPANY[] {
    return this.companyList
      .map((company, i) => ({ id: i + 1, ...company }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
