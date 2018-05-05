var timeChart = echarts.init(document.getElementById('timechart'));
option1 = {
    title: {
        // text: '网路数据收集示意图',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [
        {
            name:'时间',
            type : 'category',
            boundaryGap: false,
            data: (function (){
                var now = new Date();
                var res = [];
                var len = 10;
                while (len--) {
                    res.unshift(now.toLocaleString().replace(/^\D*/,''));
                    now = new Date(now - 2000);
                }
                return res;
            })()
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '抓取数量',
            max: 30,
            min: 0,
            boundaryGap: false
        }
    ],
    series: [
        {
            name:'旅游相关',
            type:'line',
            color:'green',
            areaStyle: {normal: {}},
            data:(function (){
                var res = [];
                var len = 10;
                while (len--) {
                    res.push((Math.random()*10 + 5).toFixed(1) - 0);
                }
                return res;
            })()
        }
        // {
        //     name:'大众电瓶',
        //     type:'line',
        //     //   areaStyle: {normal: {}},
        //     data:(function (){
        //         var res = [];
        //         var len = 0;
        //         while (len < 10) {
        //             res.push((Math.random()*10 + 5).toFixed(1) - 0);
        //             len++;
        //         }
        //         return res;
        //     })()
        // },
        // {
        //     name:'猫途鹰',
        //     type:'line',
        //     // areaStyle: {normal: {}},
        //     data:(function (){
        //         var res = [];
        //         var len = 0;
        //         while (len < 10) {
        //             res.push((Math.random()*10 + 5).toFixed(1) - 0);
        //             len++;
        //         }
        //         return res;
        //     })()
        // },
        // {
        //     name:'马蜂窝',
        //     type:'line',
        //     // areaStyle: {normal: {}},
        //     data:(function (){
        //         var res = [];
        //         var len = 0;
        //         while (len < 10) {
        //             res.push((Math.random()*10 + 5).toFixed(1) - 0);
        //             len++;
        //         }
        //         return res;
        //     })()
        // }
    ]
};


setInterval(function (){
    axisData = (new Date()).toLocaleString().replace(/^\D*/,'');

    var data0 = option1.series[0].data;
    // var data1 = option.series[1].data;
    // var data2 = option.series[2].data;
    // var data3 = option.series[3].data;
    data0.shift();
    data0.push((Math.random()*10 + 5).toFixed(1) - 0);
    // data1.shift();
    // data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
    // data2.shift();
    // data2.push((Math.random() * 10 + 5).toFixed(1) - 0);
    // data3.shift();
    // data3.push((Math.random() * 10 + 5).toFixed(1) - 0);
    option1.xAxis[0].data.shift();
    option1.xAxis[0].data.push(axisData);


    timeChart.setOption(option1);
}, 2000);

timeChart.setOption(option1);