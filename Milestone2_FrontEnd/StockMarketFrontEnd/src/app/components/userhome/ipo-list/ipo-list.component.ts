import { Component, OnInit } from '@angular/core';
import { IPO } from '../../../Model/ipo'
import { IPOlist } from '../../../Mock/ipoList'
import { IPOService } from '../../../services/ipo.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


// const IPOlist: IPO[] = [
//   {
//     id: 1,
//     companyName: 'KFC',
//     stockExchange: 'ASE',
//     pricePerShare: 356.23,
//     totalNumber: '1356.23',
//     openDateTime: new Date(),
//     remark: 'REMARK1'
//   },
//   {
//     id: 2,
//     companyName: 'KFC',
//     stockExchange: 'ASE',
//     pricePerShare: 356.23,
//     totalNumber: '1356.23',
//     openDateTime: new Date(),
//     remark: 'REMARK1'
//   },
//   {
//     id: 3,
//     companyName: 'KFC',
//     stockExchange: 'ASE',
//     pricePerShare: 356.23,
//     totalNumber: '1356.23',
//     openDateTime: new Date(),
//     remark: 'REMARK1'
//   },
//   {
//     id: 4,
//     companyName: 'KFC',
//     stockExchange: 'ASE',
//     pricePerShare: 356.23,
//     totalNumber: '1356.23',
//     openDateTime: new Date(),
//     remark: 'REMARK1'
//   }
//   ,
//   {
//     id: 5,
//     companyName: 'KFC',
//     stockExchange: 'ASE',
//     pricePerShare: 356.23,
//     totalNumber: '1356.23',
//     openDateTime: new Date(),
//     remark: 'REMARK1'
//   }
//   ,
//   {
//     id: 6,
//     companyName: 'KFC',
//     stockExchange: 'ASE',
//     pricePerShare: 356.23,
//     totalNumber: '1356.23',
//     openDateTime: new Date(),
//     remark: 'REMARK1'
//   }

// ];
@Component({
  selector: 'app-ipo-list',
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})

export class IPOListComponent implements OnInit {
  //IPOlist用于接收从后台的传来的数据
  public IPOlist: IPO[] = []
  page = 1;
  pageSize = 4;
  collectionSize = this.IPOlist.length;

  public currentIPO: any = {}
  constructor(public ipoService: IPOService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getIpos()
  }
  getIpos() {
    // 从后台获取IPO信息
    this.ipoService.getIPOs().subscribe((data: any) => {
      console.log(data)
      this.IPOlist = data
    })
  }

  // open IPO Detail,获取当前行的数据
  open(content: any, value: any) {

    this.currentIPO = value
    console.log('currentIPO', this.currentIPO)
    this.modalService.open(content);
  }

  // Pagination
  get IPOList(): IPO[] {
    return this.IPOlist
      .map((IPO, i) => ({ id: i + 1, ...IPO }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
