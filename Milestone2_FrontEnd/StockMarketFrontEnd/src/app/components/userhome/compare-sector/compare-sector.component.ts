import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-sector',
  templateUrl: './compare-sector.component.html',
  styleUrls: ['./compare-sector.component.scss']
})
export class CompareSectorComponent implements OnInit {
  public SE1: any = "BSE"
  public SE2: any = "BSE"

  constructor() { }

  ngOnInit(): void {
  }

}
