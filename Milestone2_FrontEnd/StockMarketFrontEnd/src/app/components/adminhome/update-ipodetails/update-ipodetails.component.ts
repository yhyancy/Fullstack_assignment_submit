import { Component, OnInit } from '@angular/core';
import { IPO } from '../../../Model/ipo'
import { IPOlist } from '../../../Mock/ipoList'// mock 数据
import { NgbModalConfig, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IPOService } from '../../../services/ipo.service'
@Component({
  selector: 'app-update-ipodetails',
  templateUrl: './update-ipodetails.component.html',
  styleUrls: ['./update-ipodetails.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class UpdateIPODetailsComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize: any

  //IPOlist用于接收从后台的传来的数据
  public IPOlist: IPO[] = []
  public currentIPO: IPO
  public addedIPO: any = {
    company_name: '',
    stock_exchange: 'BSE',
    price_per_share: '',
    total_num: '',
    remark: ''
  }
  modalRef: NgbModalRef;
  result: any

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
      // 分页
      this.collectionSize = this.IPOlist.length;
    })
  }

  open(content: any) {
    // this.currentIPO = data
    this.modalRef = this.modalService.open(content, { size: 'lg' });
  }

  addIpo() {
    console.log(this.addedIPO)
    this.ipoService.addIpo(this.addedIPO).subscribe((data: any) => {
      console.log(data)
      if (data.status == 'ok') {
        alert('add IPO successfully.')
        // close modal
        this.modalRef.close()
        // 重新渲染页面
        this.getIpos()
      }
      else {
        alert('add IPO failed.')
      }
    })

  }

  get IPOList(): IPO[] {
    return this.IPOlist
      .map((country, i) => ({ id: i + 1, ...country }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
