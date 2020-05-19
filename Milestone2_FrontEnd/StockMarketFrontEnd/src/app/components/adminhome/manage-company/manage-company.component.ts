import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { QueryList, ViewChildren } from '@angular/core'
import { Observable } from 'rxjs';
import { COMPANY } from '../../../Model/company';
import { CompanyService } from '../../../services/company.service';
import { NgbdSortableHeader, SortEvent } from '../../../directives/sortable.directive';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ManageCompanyService } from '../../../services/manage-company.service'

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.scss'],
  providers: [CompanyService, DecimalPipe, NgbModalConfig, NgbModal]

})
export class ManageCompanyComponent implements OnInit {
  companyList$: Observable<COMPANY[]>;
  total$: Observable<number>;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  public currentCompany: any = {}
  public IpoInfo: any = {
    stockExchange: '',
    pricePerShare: '',
    totalNumber: '',
    openDateTime: '',
    remark: ''
  }

  constructor(public service: CompanyService, public manageCompanyService: ManageCompanyService, config: NgbModalConfig, private modalService: NgbModal) {
    // TODO: 从后台获取CompnayList
    // this.companyList$ = service.getCompanyList;
    this.companyList$ = service.companyList$;
    this.total$ = service.total$;
    config.backdrop = 'static';
    config.keyboard = false;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }


  ngOnInit(): void {
    this.getCompanyList()
  }
  // 从后台获取数据
  getCompanyList() {
    this.manageCompanyService.getCompanyList().subscribe((data) => {
      console.log(data)
    })

  }

  openScrollableContent(content: any, value: any) {
    this.currentCompany = value
    console.log(this.currentCompany)
    this.modalService.open(content);
  }

}
