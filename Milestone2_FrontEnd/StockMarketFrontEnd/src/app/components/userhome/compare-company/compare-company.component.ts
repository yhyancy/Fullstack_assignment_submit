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
  public result: any[] = []

  // echarts start
  upColor = '#ec0000';
  upBorderColor = '#8A0000';
  downColor = '#00da3c';
  downBorderColor = '#008F28';

  data0 = this.splitData(this.result)
  splitData(rawData: any) {
    console.log(rawData)
    var comName = rawData.name
    var time1 = []
    var time2 = []
    var price1 = []
    var price2 = []
    var data1 = rawData.splice(1, 1)
    var data2 = rawData.splice(1, 1)

    for (var i = 0; i < data1.length; i++) {
      time1.push(data1.time)
      time2.push(data2.time)
      price1.push(data1.price)
      price2.push(data2.price)
    }
    return {
      comName: comName,
      time1: time1,
      time2: time2,
      price1: price1,
      price2: price2
    };
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
      data: this.data0.time1,
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
        data: this.data0.price1,
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
  generateStandardChart(value: any, valid: boolean) {
    console.log(value)
    if (valid) {
      // 向后台请求数据
      // 一个公司，不同时间段
      if (this.Scatagory == "Company") {
        this.compareService.compareSingleCompany(value).subscribe((data: any) => {
          console.log(data)
          this.result = JSON.parse(data)
          console.log(this.result)
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
