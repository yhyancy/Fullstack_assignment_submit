import { Component, OnInit } from '@angular/core';
import { IPO } from '../../Model/ipo'
import { IPOService } from '../../../services/ipo.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


const IPOlist: IPO[] = [
  {
    id: 1,
    companyName: 'KFC',
    stockExchange: 'ASE',
    pricePerShare: 356.23,
    totalNumber: '1356.23',
    openDateTime: new Date(),
    remark: 'REMARK1'
  },
  {
    id: 2,
    companyName: 'KFC',
    stockExchange: 'ASE',
    pricePerShare: 356.23,
    totalNumber: '1356.23',
    openDateTime: new Date(),
    remark: 'REMARK1'
  },
  {
    id: 3,
    companyName: 'KFC',
    stockExchange: 'ASE',
    pricePerShare: 356.23,
    totalNumber: '1356.23',
    openDateTime: new Date(),
    remark: 'REMARK1'
  },
  {
    id: 4,
    companyName: 'KFC',
    stockExchange: 'ASE',
    pricePerShare: 356.23,
    totalNumber: '1356.23',
    openDateTime: new Date(),
    remark: 'REMARK1'
  }
  ,
  {
    id: 5,
    companyName: 'KFC',
    stockExchange: 'ASE',
    pricePerShare: 356.23,
    totalNumber: '1356.23',
    openDateTime: new Date(),
    remark: 'REMARK1'
  }
  ,
  {
    id: 6,
    companyName: 'KFC',
    stockExchange: 'ASE',
    pricePerShare: 356.23,
    totalNumber: '1356.23',
    openDateTime: new Date(),
    remark: 'REMARK1'
  }

];
@Component({
  selector: 'app-ipo-list',
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})

export class IPOListComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize = IPOlist.length;
  // public IPOList:any; // TODO:用于接收从后台的传来的数据
  public currentIPO: any = {}
  constructor(public ipoService: IPOService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    // TODO: 从后台获取IPO信息
    this.getIpos()
  }
  getIpos() {
    //TODO:
    // this.IPOList= this.ipoService.getIPOs()
  }

  // TODO: 未完成
  // currentIPO(key) {
  //   console.log(key)
  // }

  // open IPO Detail,获取当前行的数据
  open(content: any, value: any) {

    this.currentIPO = value
    console.log('currentIPO', this.currentIPO)
    this.modalService.open(content);
  }

  // Pagination
  get IPOList(): IPO[] {
    return IPOlist
      .map((IPO, i) => ({ id: i + 1, ...IPO }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
