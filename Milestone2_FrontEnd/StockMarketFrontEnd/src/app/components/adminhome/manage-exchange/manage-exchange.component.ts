import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EXCHANGE } from '../../../Model/exchange'
import { ExchangeList } from '../../../Mock/exchangeList'

@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ManageExchangeComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize = ExchangeList.length;
  public exchangeList: EXCHANGE[] = ExchangeList
  public currentExchange: EXCHANGE

  get countries(): EXCHANGE[] {
    return ExchangeList
      .map((country, i) => ({ id: i + 1, ...country }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }
  open(content, data) {
    this.currentExchange = data
    this.modalService.open(content);
  }

}
