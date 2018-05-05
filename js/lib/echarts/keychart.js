var keyChart = echarts.init(document.getElementById('keywords'));
option = {
    title: {
        link: 'https://www.baidu.com/s?wd=' + encodeURIComponent('ECharts'),
        x: 'center',
        textStyle: {
            fontSize: 23
        }

    },
    backgroundColor: '#F7F7F7',
    tooltip: {
        show: true
    },
    toolbox: {
        feature: {
            saveAsImage: {
                iconStyle: {
                    normal: {
                        color: '#FFFFFF'
                    }
                }
            }
        }
    },
    series: [{
        // name: '热点分析',
        type: 'wordCloud',
        //size: ['9%', '99%'],
        sizeRange: [6, 66],
        //textRotation: [0, 45, 90, -45],
        rotationRange: [-45, 90],
        //shape: 'circle',
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 6
        },
        textStyle: {
            normal: {
                color: function() {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [{
            name: "Jayfee",
            value: 666
        }, {
            name: "Nancy",
            value: 520
        }]
    }]
};

var JosnList = [];

JosnList.push(
    {name:"公平",value:" 3237"},
    {name:"安全",value:" 2164"},
    {name:"美丽",value:" 7561"},
    {name:"宽容",value:" 7778"},
    {name:"善良",value:" 7355"},
    {name:"美味",value:" 2405"},
    {name:"自信",value:" 1842"},
    {name:"热心",value:" 2090"},
    {name:"干净",value:" 1762"},
    {name:"空气好",value:" 1593"},
    {name:"责任",value:" 2060"},
    {name:"自由",value:" 1537"},
    {name:"交通便利",value:" 1908"},
    {name:"景色美",value:" 2107"},
    {name:"和善",value:" 1692"},
    {name:"活力",value:" 1568"},
    {name:"傲慢",value:" 2788"},
    {name:"偏激",value:" 9575"},
    {name:"蛮横",value:" 9400"},
    {name:"消极",value:" 9466"},
    {name:"拥堵",value:" 9266"},
    {name:"贵",value:" 3419"},
    {name:"苛刻",value:" 2984"},
    {name:"落后",value:" 2739"},
    {name:"脏乱差",value:" 2744"},
    {name:"无聊",value:" 2466"},
    {name:"不安全",value:" 3034"},
    {name:"不负责",value:" 1945"}
);

option.series[0].data = JosnList;


//keyChart.setOption(option);
keyChart.on('click', function (params) {
    //alert((params.name));
    window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));

});
keyChart.setOption(option)