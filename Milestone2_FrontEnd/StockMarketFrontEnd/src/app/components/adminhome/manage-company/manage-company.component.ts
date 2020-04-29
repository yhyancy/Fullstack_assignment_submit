import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { QueryList, ViewChildren } from '@angular/core'
import { Observable } from 'rxjs';
// import { Country } from '../../Model/country';
import { COMPANY } from '../../Model/company';
// import { CountryService } from '../../../services/country.service';
import { CompanyService } from '../../../services/company.service';
import { NgbdSortableHeader, SortEvent } from '../../../directives/sortable.directive';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(public service: CompanyService, config: NgbModalConfig, private modalService: NgbModal) {
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
  }

  open(content: any, value: any) {
    this.currentCompany = value
    console.log(this.currentCompany)
    this.modalService.open(content);
  }

}
