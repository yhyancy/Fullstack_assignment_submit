import { Component, OnInit } from '@angular/core';
import { IPO } from '../../../Model/ipo'
import { IPOlist } from '../../Mock/ipoList'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-update-ipodetails',
  templateUrl: './update-ipodetails.component.html',
  styleUrls: ['./update-ipodetails.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class UpdateIPODetailsComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize = IPOlist.length;
  public ipoList: IPO[] = IPOlist
  public currentIPO: IPO


  get countries(): IPO[] {
    return IPOlist
      .map((country, i) => ({ id: i + 1, ...country }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  open(content: any, data: any) {
    this.currentIPO = data
    this.modalService.open(content);
  }

}
