import { Component, OnInit } from '@angular/core';
import { IPO } from '../../Model/ipo'
import { IPOService } from '../../../services/ipo.service'



const IPOlist: IPO[] = [
  {
    id: 1,
    companyName: 'KFC',
    stockExchange: 'ASE',
    pricePerShare: 356.23,
    totalNumber: '1356.23',
    openDateTime: new Date(),
    remarks: 'REMARK1'
  },
  {
    id: 2,
    companyName: 'KFC',
    stockExchange: 'ASE',
    pricePerShare: 356.23,
    totalNumber: '1356.23',
    openDateTime: new Date(),
    remarks: 'REMARK1'
  },
  {
    id: 3,
    companyName: 'KFC',
    stockExchange: 'ASE',
    pricePerShare: 356.23,
    totalNumber: '1356.23',
    openDateTime: new Date(),
    remarks: 'REMARK1'
  },
  {
    id: 4,
    companyName: 'KFC',
    stockExchange: 'ASE',
    pricePerShare: 356.23,
    totalNumber: '1356.23',
    openDateTime: new Date(),
    remarks: 'REMARK1'
  }
  ,
  {
    id: 5,
    companyName: 'KFC',
    stockExchange: 'ASE',
    pricePerShare: 356.23,
    totalNumber: '1356.23',
    openDateTime: new Date(),
    remarks: 'REMARK1'
  }
  ,
  {
    id: 6,
    companyName: 'KFC',
    stockExchange: 'ASE',
    pricePerShare: 356.23,
    totalNumber: '1356.23',
    openDateTime: new Date(),
    remarks: 'REMARK1'
  }

];
@Component({
  selector: 'app-ipo-list',
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.scss']
})

export class IPOListComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize = IPOlist.length;
  // public IPOList:any; //用于接收从后台的传来的数据

  constructor(public ipoService: IPOService) { }

  ngOnInit(): void {
    // 从后台获取IPO信息
    this.getIpos()
  }
  getIpos() {
    // this.IPOList= this.ipoService.getIPOs()
  }

  // Pagination
  get IPOList(): IPO[] {
    return IPOlist
      .map((IPO, i) => ({ id: i + 1, ...IPO }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  // TODO: 未完成
  currentIPO(key) {
    console.log(key)
  }
}
