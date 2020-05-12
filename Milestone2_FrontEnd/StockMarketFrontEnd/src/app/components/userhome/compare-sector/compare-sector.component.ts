import { Component, OnInit } from '@angular/core';
import { CompareService } from '../../../services/compare.service'
@Component({
  selector: 'app-compare-sector',
  templateUrl: './compare-sector.component.html',
  styleUrls: ['./compare-sector.component.scss']
})
export class CompareSectorComponent implements OnInit {
  public SE1: any = "BSE"
  public SE2: any = "BSE"

  constructor(public compareService: CompareService) { }

  ngOnInit(): void {
  }

  generateSectorCharts(value: any, valid: boolean) {
    if (valid) {
      // 两个sector,相同时间段
      this.compareService.compareSectors(value).subscribe((data) => {
        console.log(data)
      })
    }

  }

}
