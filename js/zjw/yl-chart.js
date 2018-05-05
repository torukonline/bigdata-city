//养老 床位与老人的 点线图
function initPeopleAndBedChart(){
    var e = echarts.init(document.getElementById("yanglao-bar-chart"));

    option = {
        title: {
            text: '2010-2018年 老龄人口与养老院床位趋势',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data:['老龄人口数', '可提供床位数'],
            left: 'left'
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018' ]
        },
        yAxis: [{
            type: 'value',
            scale: true,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },{
            type: 'value',
            scale: true,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        }
            ],
        series: [{
            name: '老龄人口数',
            type: 'scatter',
            data: [11, 22, 33, 44, 55, 66, 77, 88, 99]
        }, {
            name: '可提供床位数',
            type: 'line',
            data: [1, 25, 36, 30, 58, 62, 79, 80, 100]
        }]
    };

    e.setOption(option);
}



//养老 年龄段与花销柱状图
function initAgeAndCostChart(){
    var e = echarts.init(document.getElementById("cost-bar-chart"));

    option = {
        title: {
            text: '不同年龄段消费分布统计(元)',
            top: 'top'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['药品花销', '养老院花销','生活用品花销','保健品花销','其他'],
            right:'right'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:  {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['50~59周岁','60~69周岁','70~79周岁','80~89周岁','90~99周岁','100周岁以上']
        },
        series: [
            {
                name: '药品花销',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [320, 302, 301, 334, 390, 330]
            },
            {
                name: '养老院花销',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [120, 132, 101, 134, 90, 230]
            },
            {
                name: '生活用品花销',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [220, 182, 191, 234, 290, 330]
            },
            {
                name: '保健品花销',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [150, 212, 201, 154, 190, 330]
            },
            {
                name: '其他',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [820, 832, 901, 934, 1290, 1330]
            }
        ]
    };

    e.setOption(option);
}