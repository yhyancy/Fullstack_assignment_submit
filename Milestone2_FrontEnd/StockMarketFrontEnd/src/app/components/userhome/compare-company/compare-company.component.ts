import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CompareCompanyList } from '../../../Mock/compare_company'
import { Compare_Company } from '../../../Model/compare_company'
import { CompareService } from '../../../services/compare.service'

// var echarts = require('echarts');

import * as $ from 'jquery'
@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.scss']
})
export class CompareCompanyComponent implements OnInit {
  // myChart = echarts.init(document.getElementById('main'));

  // 绘制图表
  model: NgbDateStruct;
  // standard chart
  public Scatagory: string = "Company"
  public SSE: string = "BSE"
  // custom chart
  public Ccatgory: string = "Company"
  public CSE1: string = "BSE"
  public CSE2: string = "BSE"

  // echarts start
  upColor = '#ec0000';
  upBorderColor = '#8A0000';
  downColor = '#00da3c';
  downBorderColor = '#008F28';

  public data0: any = {
    name: '',
    time1: [],
    time2: [],
    price1: [],
    price2: []
  }
  public visiable: boolean = false

  splitData(rawData: any) {
    console.log(rawData)
    this.data0.name = rawData.name
    var data1 = rawData.price1
    var data2 = rawData.price2

    console.log(data1)
    console.log(this.data0.time1)
    for (var i = 0; i < data1.length; i++) {
      this.data0.time1.push(data1[i].time)
      this.data0.price1.push(data1[i].price)
      this.data0.time2.push(data2[i].time)
      this.data0.price2.push(data2[i].price)
    }
    console.log('time1', this.data0.time1)
    console.log('price1', this.data0.price1)
  }
  echartsIntance: any;

  standardOptions1 = {
    xAxis: {
      type: 'category',
      // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      // data: [820, 932, 901, 934, 1290, 1330, 1320],
      data: [],
      type: 'line'
    }]
  };


  standardOptions2 = {
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [],
      type: 'line'
    }]
  };

  // echarts end

  constructor(public compareService: CompareService) { }

  ngOnInit(): void {

  }
  // ngDoCheck(): void {
  //   if (this.visiable == true) {
  //     // this.options.xAxis.data.push(this.data0.time1)
  //     this.options.xAxis.data = this.data0.time1

  //     // this.options.series[0].data.push(this.data0.price1)
  //     this.options.series[0].data = this.data0.price1

  //     console.log(this.options.xAxis.data.push(this.data0.time1))
  //   }
  // }
  onChartInit(ec: any) {
    this.echartsIntance = ec;
  }

  setOptions() {

    // this.options.xAxis.data.push(this.data0.time1)
    this.standardOptions1.xAxis.data = this.data0.time1
    this.standardOptions2.xAxis.data = this.data0.time2
    // this.options.series[0].data.push(this.data0.price1)
    this.standardOptions1.series[0].data = this.data0.price1
    this.standardOptions2.series[0].data = this.data0.price2

    console.log(this.standardOptions1)
    if (this.echartsIntance) {
      this.echartsIntance.clear();
      this.echartsIntance.setOption(this.standardOptions1, true);
      this.echartsIntance.setOption(this.standardOptions2, true);
    }
    this.visiable = true
  }
  generateStandardChart(value: any, valid: boolean) {
    console.log(value)
    if (valid) {
      // 向后台请求数据
      // 一个公司，不同时间段
      if (this.Scatagory == "Company") {
        this.compareService.compareSingleCompany(value).subscribe((data: any) => {
          console.log(data)
          this.splitData(data)
          this.setOptions()
        })
      }
      // 一个sector，不同时间段
      else {
        this.compareService.compareSingleSector(value).subscribe((data: any) => {
          console.log(data)
          this.splitData(data)
          this.setOptions()
        })
      }
    }
  }
  generateCustomChart(value: any, valid: boolean) {
    console.log(value)
    if (valid) {
      // 向后台请求数据
      // 两个公司，相同时间段
      if (this.Ccatgory == "Company") {
        this.compareService.compareCompanies(value).subscribe((data) => {
          console.log(data)
        })
      }
      // 一个公司，一个sector，相同时间段
      else {
        this.compareService.compareComandSec(value).subscribe((data) => {
          console.log(data)
        })
      }
    }
  }
}
