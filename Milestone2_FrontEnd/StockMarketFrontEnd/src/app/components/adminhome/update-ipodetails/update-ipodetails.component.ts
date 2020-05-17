import { Component, OnInit } from '@angular/core';
import { IPO } from '../../../Model/ipo'
import { IPOlist } from '../../../Mock/ipoList'// mock 数据
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IPOService } from '../../../services/ipo.service'
@Component({
  selector: 'app-update-ipodetails',
  templateUrl: './update-ipodetails.component.html',
  styleUrls: ['./update-ipodetails.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class UpdateIPODetailsComponent implements OnInit {
  //IPOlist用于接收从后台的传来的数据
  public IPOlist: IPO[] = []
  page = 1;
  pageSize = 4;
  collectionSize = this.IPOlist.length;
  // public ipoList: IPO[] = IPOlist
  public currentIPO: IPO
  public SE = "BSE"


  constructor(public ipoService: IPOService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getIpos()
  }
  getIpos() {
    // 从后台获取IPO信息
    this.ipoService.getAdminIPOs().subscribe((data: any) => {
      console.log(data)
      this.IPOlist = data
    })
  }

  // open(content: any, data: any) {
  //   this.currentIPO = data
  //   this.modalService.open(content);
  // }
  open(content: any) {
    // this.currentIPO = data
    this.modalService.open(content);
  }

  // addIpo(value: any, valid: boolean) {

  // }

  addIpo() {

  }

  get IPOList(): IPO[] {
    return this.IPOlist
      .map((country, i) => ({ id: i + 1, ...country }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
