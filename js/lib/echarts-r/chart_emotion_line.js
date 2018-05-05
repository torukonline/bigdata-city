var chart_emotion_line = echarts.init(document.getElementById('chart_emotion_line'));
chart_emotion_line_option = {
    title: {
        text: '民情趋势'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['旅游服务指数'],
        align: 'right',
        right: 10
    },
    grid: {
        // left: '3%',
        // right: '4%',
        // bottom: '3%',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        axisTick: {show: false},
        data: ['2018-04-23', '2018-04-24', '2018-04-25','2018-04-26', '2018-04-27', '2018-04-28', '2018-04-29', '2018-04-30', '2018-05-01', '2018-05-02']
    }],
    yAxis: [{
        type: 'value',
        name: '周指数',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    // barWidth:20,
    // barGap:'0%',
    series: [{
        name: '旅游服务指数',
        type: 'line',
        data: [5,10,6,20, 12, 31, 34, 31, 10, 15],
        itemStyle:  {normal: {color:'#CC6666'}},
        markPoint:{ data : [
                {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}
            ]}
    }]
};
chart_emotion_line.setOption(chart_emotion_line_option);