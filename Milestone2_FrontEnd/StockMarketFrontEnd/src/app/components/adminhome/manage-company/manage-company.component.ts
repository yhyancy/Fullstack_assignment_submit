import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { QueryList, ViewChildren } from '@angular/core'
import { Observable } from 'rxjs';
// import { Country } from '../../Model/country';
import { COMPANY } from '../../Model/company';
// import { CountryService } from '../../../services/country.service';
import { CompanyService } from '../../../services/company.service';
import { NgbdSortableHeader, SortEvent } from '../../../directives/sortable.directive';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.scss'],
  providers: [CompanyService, DecimalPipe]
})
export class ManageCompanyComponent implements OnInit {
  companyList$: Observable<COMPANY[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: CompanyService) {
    this.companyList$ = service.companyList$;
    this.total$ = service.total$;
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

}
