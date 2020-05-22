import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CompareCompanyList } from '../../../Mock/compare_company'
import { Compare_Company } from '../../../Model/compare_company'
import { CompareService } from '../../../services/compare.service'

import * as $ from 'jquery'
@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.scss']
})
export class CompareCompanyComponent implements OnInit {
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
    }
    console.log(this.data0.time1)
    console.log(this.data0.price1)
  }

  options = {
    title: {
      text: '股票图表',
      left: 0
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      // data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
      data: ['日K']

    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      data: [],
      scale: true,
      boundaryGap: false,
      axisLine: { onZero: false },
      splitLine: { show: false },
      splitNumber: 20,
      min: 'dataMin',
      max: 'dataMax'
    },
    yAxis: {
      scale: true,
      splitArea: {
        show: true
      }
    },
    dataZoom: [
      {
        type: 'inside',
        start: 50,
        end: 100
      },
      {
        show: true,
        type: 'slider',
        top: '90%',
        start: 50,
        end: 100
      }
    ],
    series: [
      {
        name: '日K',
        type: 'candlestick',
        data: [],
        itemStyle: {
          color: this.upColor,
          color0: this.downColor,
          borderColor: this.upBorderColor,
          borderColor0: this.downBorderColor
        },
        markPoint: {
          label: {
            normal: {
              formatter: function (param) {
                return param != null ? Math.round(param.value) : '';
              }
            }
          },
          data: [
            {
              name: 'XX标点',
              coord: ['2013/5/31', 2300],
              value: 2300,
              itemStyle: {
                color: 'rgb(41,60,85)'
              }
            },
            {
              name: 'highest value',
              type: 'max',
              valueDim: 'highest'
            },
            {
              name: 'lowest value',
              type: 'min',
              valueDim: 'lowest'
            },
            {
              name: 'average value on close',
              type: 'average',
              valueDim: 'close'
            }
          ],
          tooltip: {
            formatter: function (param) {
              return param.name + '<br>' + (param.data.coord || '');
            }
          }
        },
        markLine: {
          symbol: ['none', 'none'],
          data: [
            [
              {
                name: 'from lowest to highest',
                type: 'min',
                valueDim: 'lowest',
                symbol: 'circle',
                symbolSize: 10,
                label: {
                  show: false
                },
                emphasis: {
                  label: {
                    show: false
                  }
                }
              },
              {
                type: 'max',
                valueDim: 'highest',
                symbol: 'circle',
                symbolSize: 10,
                label: {
                  show: false
                },
                emphasis: {
                  label: {
                    show: false
                  }
                }
              }
            ],
            {
              name: 'min line on close',
              type: 'min',
              valueDim: 'close'
            },
            {
              name: 'max line on close',
              type: 'max',
              valueDim: 'close'
            }
          ]
        }
      }
    ]
  };
  // echarts end

  constructor(public compareService: CompareService) { }

  ngOnInit(): void {

  }
  ngDoCheck(): void {
    if (this.visiable == true) {
      this.options.xAxis.data.push(this.data0.time1)
      this.options.series[0].data.push(this.data0.price1)
      console.log(this.options.xAxis.data.push(this.data0.time1))
    }

  }
  setOptions() {
    this.options.xAxis.data.push(this.data0.time1)
    this.options.series[0].data.push(this.data0.price1)
    console.log(this.options)
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
