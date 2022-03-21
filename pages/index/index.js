// 图表滚动需到真机下查看效果
Page({
  data: {
    testData: [
      [
        { value: '06:00', type: 'text' },
        { value: '大雨', type: 'text' },
        { value: '/static/00.png', type: 'icon' },
        { value: 27, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '东风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '07:00', type: 'text' },
        { value: '大雨', type: 'text' },
        { value: '/static/01.png', type: 'icon' },
        { value: 27, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '东风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '08:00', type: 'text' },
        { value: '多云', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 28, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '东风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '09:00', type: 'text' },
        { value: '多云', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 29, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '南风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '10:00', type: 'text' },
        { value: '晴', type: 'text' },
        { value: '/static/01.png', type: 'icon' },
        { value: 30, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '东南风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '11:00', type: 'text' },
        { value: '晴', type: 'text' },
        { value: '/static/01.png', type: 'icon' },
        { value: 31, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '东南风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '12:00', type: 'text' },
        { value: '晴', type: 'text' },
        { value: '/static/01.png', type: 'icon' },
        { value: 31, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '东南风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '13:00', type: 'text' },
        { value: '晴', type: 'text' },
        { value: '/static/01.png', type: 'icon' },
        { value: 32, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '东南风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '14:00', type: 'text' },
        { value: '晴', type: 'text' },
        { value: '/static/01.png', type: 'icon' },
        { value: 32, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '东南风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '15:00', type: 'text' },
        { value: '大雨', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 27, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '西风', type: 'text' },
        { value: '3级', type: 'smalltext' },
      ],
      [
        { value: '16:00', type: 'text' },
        { value: '多云', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 28, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '西风', type: 'text' },
        { value: '3级', type: 'smalltext' },
      ],
      [
        { value: '17:00', type: 'text' },
        { value: '多云', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 29, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '西风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '18:00', type: 'text' },
        { value: '多云', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 29, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '西风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '19:00', type: 'text' },
        { value: '多云', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 29, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '西风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '20:00', type: 'text' },
        { value: '多云', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 29, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '西风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '21:00', type: 'text' },
        { value: '多云', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 29, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '西风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '22:00', type: 'text' },
        { value: '多云', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 28, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '西风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '23:00', type: 'text' },
        { value: '多云', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 28, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '西风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '00:00', type: 'text' },
        { value: '多云', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 28, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '西风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '01:00', type: 'text' },
        { value: '多云', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 28, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '西风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '02:00', type: 'text' },
        { value: '大雨', type: 'text' },
        { value: '/static/01.png', type: 'icon' },
        { value: 27, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '西北风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '03:00', type: 'text' },
        { value: '大雨', type: 'text' },
        { value: '/static/01.png', type: 'icon' },
        { value: 27, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '西风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '04:00', type: 'text' },
        { value: '大雨', type: 'text' },
        { value: '/static/00.png', type: 'icon' },
        { value: 27, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '西风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '05:00', type: 'text' },
        { value: '大雨', type: 'text' },
        { value: '/static/00.png', type: 'icon' },
        { value: 27, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: '西风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
    ],
    testDataChartOption: {
      grid: {
        containLabel: true,
        x: -13,
        x2: 15,
        top: 17,
        bottom: 15
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        show: false,
        axisLabel: {
          interval: 49
        }
      },
      yAxis: {
        min: 'dataMin',
        show: false,
      },
      series: [{
        type: 'line',
        symbolSize: '4',
        data: [],
        lineStyle: {
          color: '#9c97d0',
        },
        itemStyle: {
          color: "#77a8d1"
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(106, 187, 255, 0.1)' },
              { offset: 1, color: 'rgba(106, 187, 255, 0)' }
            ],
          }
        }
      }]
    },
    testData1: [
      [
        { value: '昨天', type: 'text' },
        { value: '04/11', type: 'text' },
        { value: '多云', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 29, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: 19, unit: '°', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: '晴', type: 'text' },
        { value: '东风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '今天', type: 'text' },
        { value: '04/12', type: 'text' },
        { value: '多云', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 29, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: 20, unit: '°', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: '多云', type: 'text' },
        { value: '东风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '明天', type: 'text' },
        { value: '04/13', type: 'text' },
        { value: '多云', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 30, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: 21, unit: '°', type: 'text' },
        { value: '/static/01.png', type: 'icon' },
        { value: '晴', type: 'text' },
        { value: '东南风', type: 'text' },
        { value: '1级', type: 'smalltext' },
      ],
      [
        { value: '周三', type: 'text' },
        { value: '04/14', type: 'text' },
        { value: '多云', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 29, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: 21, unit: '°', type: 'text' },
        { value: '/static/00.png', type: 'icon' },
        { value: '大雨', type: 'text' },
        { value: '南风', type: 'text' },
        { value: '3-4级', type: 'smalltext' },
      ],
      [
        { value: '周四', type: 'text' },
        { value: '04/15', type: 'text' },
        { value: '大雨', type: 'text' },
        { value: '/static/01.png', type: 'icon' },
        { value: 26, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: 21, unit: '°', type: 'text' },
        { value: '/static/01.png', type: 'icon' },
        { value: '大雨', type: 'text' },
        { value: '东风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '周五', type: 'text' },
        { value: '04/16', type: 'text' },
        { value: '大雨', type: 'text' },
        { value: '/static/00.png', type: 'icon' },
        { value: 25, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: 20, unit: '°', type: 'text' },
        { value: '/static/00.png', type: 'icon' },
        { value: '大雨', type: 'text' },
        { value: '东风', type: 'text' },
        { value: '2级', type: 'smalltext' },
      ],
      [
        { value: '周六', type: 'text' },
        { value: '04/17', type: 'text' },
        { value: '晴', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: 28, unit: '°', type: 'text' },
        { value: '', type: 'chart' },
        { value: 22, unit: '°', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: '晴', type: 'text' },
        { value: '东南风', type: 'text' },
        { value: '1级', type: 'smalltext' },
      ],
    ],
    testData1ChartOption: {
      grid: {
        containLabel: true,
        x: -13,
        x2: 15,
        top: 17,
        bottom: 15
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        show: false,
        axisLabel: {
          interval: 49
        }
      },
      yAxis: {
        min: 'dataMin',
        show: false,
      },
      series: [
        {
          type: 'line',
          symbolSize: '4',
          data: [],
          lineStyle: {
            color: '#d67095',
          },
          itemStyle: {
            color: "#c35f62"
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(255, 106, 106, 0.1)' },
                { offset: 1, color: 'rgba(255, 106, 106, 0)' }
              ],
            }
          }
        },
        {
          type: 'line',
          symbolSize: '4',
          data: [],
          lineStyle: {
            color: '#9c97d0',
          },
          itemStyle: {
            color: "#77a8d1"
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(106, 187, 255, 0.1)' },
                { offset: 1, color: 'rgba(106, 187, 255, 0)' }
              ],
            }
          }
        },
      ]
    },
    testData2: [
      [
        { value: '04/11', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: '阴', type: 'text' },
        { value: 29, unit: '°', type: 'text' }
      ],
      [
        { value: '04/12', type: 'text' },
        { value: '/static/00.png', type: 'icon' },
        { value: '晴', type: 'text' },
        { value: 29, unit: '°', type: 'text' }
      ],
      [
        { value: '04/13', type: 'text' },
        { value: '/static/02.png', type: 'icon' },
        { value: '阴', type: 'text' },
        { value: 30, unit: '°', type: 'text' }
      ],
      [
        { value: '04/14', type: 'text' },
        { value: '/static/01.png', type: 'icon' },
        { value: '多云', type: 'text' },
        { value: 29, unit: '°', type: 'text' }
      ],
      [
        { value: '04/15', type: 'text' },
        { value: '/static/01.png', type: 'icon' },
        { value: '多云', type: 'text' },
        { value: 26, unit: '°', type: 'text' }
      ],
      [
        { value: '04/16', type: 'text' },
        { value: '/static/01.png', type: 'icon' },
        { value: '多云', type: 'text' },
        { value: 25, unit: '°', type: 'text' }
      ],
      [
        { value: '04/17', type: 'text' },
        { value: '/static/00.png', type: 'icon' },
        { value: '晴', type: 'text' },
        { value: 28, unit: '°', type: 'text' }
      ],
    ]
  },

  onLoad() {
    let testData = [];
    let testMaxData1 = [];
    let testMinData1 = [];
    this.data.testData.forEach(item => {
      testData.push(item[3].value)
    })
    this.data.testData1.forEach(item => {
      testMaxData1.push(item[4].value)
      testMinData1.push(item[6].value)
    })
    this.setData({
      'testDataChartOption.series[0].data': testData,
      'testData1ChartOption.series[0].data': testMaxData1,
      'testData1ChartOption.series[1].data': testMinData1
    })
  },

  // 点击回调
  testClick(e) {
    const index = e.detail; // 子组件传来点击的列参数
    console.log(`点击了第 ${index} 列`)
  },
  // 点击回调
  testClick1(e) {
    const index = e.detail; // 子组件传来点击的列参数
    console.log(`点击了第 ${index} 列`)
  }
})
