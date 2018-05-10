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

    {name:"不公平",value:" 3237"},
    {name:"安全不好",value:" 2164"},
    {name:"污染",value:" 7561"},
    {name:"垃圾乱扔",value:" 7355"},
    {name:"不卫生",value:" 2405"},
    {name:"傲慢",value:" 2788"},
    {name:"偏激",value:"1075"},
    {name:"蛮横",value:" 1400"},
    {name:"消极",value:" 1466"},
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