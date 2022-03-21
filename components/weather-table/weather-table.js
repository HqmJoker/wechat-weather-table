import * as echarts from '../../ec-canvas/echarts';
Component({
  properties: {
    option: {
      type: Object,
      observer: 'updateChart',
      value: {}
    },
    weatherData: {
      type: Array,
      observer: 'updateWeatherData',
      value: []
    }
  },
  data: {
    chartPositionIndex: -1, // 数据列图表位于第几行，用于定位图表位置
    ec: {
      lazyLoad: true,
    },
  },
  methods: {
    clickDayColumn(e) {
      const index = e.currentTarget.dataset.index
      this.triggerEvent('clickDayColumn', index)
    },
    // 更新数据，解决组件初始化时参数为空bug
    updateWeatherData(weatherData) {
      if(weatherData.length===0) {
        this.setData({
          chartPositionIndex: -1
        })
        return;
      }
      const index = weatherData[0].findIndex( item => item.type === 'chart')
      this.setData({
        chartPositionIndex: index
      })
    },
    // 更新天气图表
    updateChart(option) {
      if (this.chart) {
        this.chart.dispose();
      }
      const ecComponent = this.selectComponent('#weather-table-dom');
      if(!ecComponent) {
        return;
      }
      ecComponent.init((canvas, width, height, dpr) => {
        // 获取组件的 canvas、width、height 后的回调函数
        // 在这里初始化图表
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        chart.setOption(option);
        // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
        this.chart = chart;
        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return chart;
      });
    }
  }
})
