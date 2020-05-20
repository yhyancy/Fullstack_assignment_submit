import { Component, OnInit } from '@angular/core';
import { COMPANY } from '../../../Model/company';
import { ManageCompanyService } from '../../../services/manage-company.service'
import { NgbModalConfig, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';  //modal

@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ManagecompanyComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize: any;

  // companyList用于接收后台的数据
  public companyList: COMPANY[] = []
  public addedCompany: any = {
    company_code: '',
    company_name: '',
    turnover: null,
    ceo: '',
    board_of_director: '',
    listed_in_se: 'No',
    sector_name: '',
    brife_write_up: '',
    stock_code: '',
    company_status: 'Inactive'
  }
  modalRef: NgbModalRef  //用于关闭modal
  constructor(public manageCompanyService: ManageCompanyService, config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getComapnyList()
  }
  //  后台获取 companylist
  getComapnyList() {
    this.manageCompanyService.getCompanyList().subscribe((data: any) => {
      console.log(data)
      this.companyList = data
      // 分页
      this.collectionSize = this.companyList.length
    })
  }
  // 打开AddCompany modal
  openScrollableContent(content) {
    this.modalService.open(content);
  }
  // 添加公司
  addCompany() {
    console.log(this.addedCompany)
    this.manageCompanyService.addCompany(this.addedCompany).subscribe((data: any) => {
      console.log(data)
      if (data.status == "ok") {
        // 关闭modal
        this.modalRef.close()
        // 重新渲染页面
        this.getComapnyList()
      } else {
        alert('add company failed.')
      }
    })
  }
  // 更新公司

  // 停用公司
  disableCompany(company: COMPANY) {
    this.manageCompanyService.disableCompany(company).subscribe((data: any) => {
      console.log(data)
      if (data.status == "ok") {
        // 重新渲染页面
        this.getComapnyList()
      }
      else {
        alert('disable company failed.')
      }
    })
  }

  // 分页
  get CompanyList(): COMPANY[] {
    return this.companyList
      .map((company, i) => ({ id: i + 1, ...company }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
