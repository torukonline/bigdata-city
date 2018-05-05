//医疗 医院等级分布 饼状图
function initHospitalChart(){
    var e = echarts.init(document.getElementById("yiliao-chart"));

    option = {
        title : {
            text: '各级医院数量',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['三级甲等','三级乙等','三级丙等','二级甲等','一级甲等','其他']
        },
        series : [
            {
                name: '医院数量',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:2, name:'三级甲等'},
                    {value:3, name:'三级乙等'},
                    {value:1, name:'三级丙等'},
                    {value:2, name:'二级甲等'},
                    {value:2, name:'一级甲等'},
                    {value:3, name:'其他'},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    e.setOption(option);
}


//医疗 医院科室分布 饼状图
function initOfficeChart(){
    var e = echarts.init(document.getElementById("yiliao-chart"));

    option = {
        title : {
            text: '科室数量',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['内科','外科','妇科','儿科','口腔科','肿瘤科']
        },
        series : [
            {
                name: '科室数量',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:12, name:'内科'},
                    {value:11, name:'外科'},
                    {value:8, name:'妇科'},
                    {value:5, name:'儿科'},
                    {value:13, name:'口腔科'},
                    {value:2, name:'肿瘤科'},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    e.setOption(option);
}



//医疗 医生分布 饼状图
function initPeopleChart(){
    var e = echarts.init(document.getElementById("yiliao-chart"));

    option = {
        title : {
            text: '医护人员分布',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['主任医师','副主任医师','主治医师','医师','高护','护士']
        },
        series : [
            {
                name: '医生数量',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:274, name:'主任医师'},
                    {value:478, name:'副主任医师'},
                    {value:698, name:'主治医师'},
                    {value:885, name:'医师'},
                    {value:149, name:'高护'},
                    {value:423, name:'护士'},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    e.setOption(option);
}

//医疗 设备分布 饼状图
function initMachineChart(){
    var e = echarts.init(document.getElementById("showMachineChart"));

    var builderJson = {
        "charts": {
            "射线诊断设备": 4,
            "超声诊断设备": 6,
            "功能检查设备": 7,
            "内窥镜": 3,
            "检查设备": 24,
            "核医学设备": 2,
            "实验诊断设备": 33,
            "病理诊断装备": 45
        },
        "components": {
            "手术床": 356,
            "接触治疗机": 134,
            "超声治疗机": 23,
            "透析设备": 17,
            "超声雾化器": 68,
            "浅层治疗机": 59,
            "氦氖激光": 1,
            "高压氧舱": 25,
            "玻璃体切割器": 1,
            "心脏除颤起搏设备": 33,
            "人工呼吸机": 16
        }
    };

    var downloadJson = {
        "射线诊断设备": 4,
        "超声诊断设备": 6,
        "功能检查设备": 7,
        "内窥镜": 3,
        "检查设备": 24,
        "核医学设备": 2,
        "实验诊断设备": 33,
        "病理诊断装备": 45
    };

    var themeJson = {
        "手术床": 356,
        "接触治疗机": 134,
        "超声治疗机": 23,
        "透析设备": 17,
        "超声雾化器": 68,
        "浅层治疗机": 59,
        "氦氖激光": 1,
        "高压氧舱": 25,
        "玻璃体切割器": 1,
        "心脏除颤起搏设备": 33,
        "人工呼吸机": 16
    };


    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = canvas.height = 100;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.globalAlpha = 0.08;
    ctx.font = '20px Microsoft Yahei';
    ctx.translate(50, 50);
    ctx.rotate(-Math.PI / 4);


    option = {
        backgroundColor: {
            type: 'pattern',
            image: canvas,
            repeat: 'repeat'
        },
        tooltip: {},
        title: [{
            text: '医疗设备数量',
            x: '25%',
            textAlign: 'center'
        }, {
            text: '诊断设备',
            subtext: '总计 124 个',
            x: '75%',
            textAlign: 'center'
        }, {
            text: '治疗设备',
            subtext: '总计 733 个' ,
            x: '75%',
            y: '50%',
            textAlign: 'center'
        }],
        grid: [{
            top: 50,
            width: '50%',
            bottom: '45%',
            left: 10,
            containLabel: true
        }, {
            top: '55%',
            width: '50%',
            bottom: 0,
            left: 10,
            containLabel: true
        }],
        xAxis: [{
            type: 'value',
            splitLine: {
                show: false
            }
        }, {
            type: 'value',
            gridIndex: 1,
            splitLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'category',
            data: Object.keys(builderJson.charts),
            axisLabel: {
                interval: 0,
                rotate: 30
            },
            splitLine: {
                show: false
            }
        }, {
            gridIndex: 1,
            type: 'category',
            data: Object.keys(builderJson.components),
            axisLabel: {
                interval: 0,
                rotate: 30
            },
            splitLine: {
                show: false
            }
        }],
        series: [{
            type: 'bar',
            stack: 'chart',
            z: 3,
            label: {
                normal: {
                    position: 'right',
                    show: true
                }
            },
            data: Object.keys(builderJson.charts).map(function (key) {
                return builderJson.charts[key];
            })
        }, {
            type: 'bar',
            stack: 'chart',
            silent: true,
            itemStyle: {
                normal: {
                    color: '#eee'
                }
            },
            data: Object.keys(builderJson.charts).map(function (key) {
                return builderJson.all - builderJson.charts[key];
            })
        }, {
            type: 'bar',
            stack: 'component',
            xAxisIndex: 1,
            yAxisIndex: 1,
            z: 3,
            label: {
                normal: {
                    position: 'right',
                    show: true
                }
            },
            data: Object.keys(builderJson.components).map(function (key) {
                return builderJson.components[key];
            })
        }, {
            type: 'bar',
            stack: 'component',
            silent: true,
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#eee'
                }
            },
            data: Object.keys(builderJson.components).map(function (key) {
                return builderJson.all - builderJson.components[key];
            })
        }, {
            type: 'pie',
            radius: [0, '30%'],
            center: ['75%', '25%'],
            data: Object.keys(downloadJson).map(function (key) {
                return {
                    name: key.replace('.js', ''),
                    value: downloadJson[key]
                }
            })
        }, {
            type: 'pie',
            radius: [0, '30%'],
            center: ['75%', '75%'],
            data: Object.keys(themeJson).map(function (key) {
                return {
                    name: key.replace('.js', ''),
                    value: themeJson[key]
                }
            })
        }]
    }
    e.setOption(option);
}



//养老 年龄段与花销柱状图
function initSickChart(){
    var e = echarts.init(document.getElementById("showSickChart"));

    option = {
        title: {
            text: '过去十年每月疾病发生次数统计',
            top: 'top'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis:  {
            type: 'value'
        },
        xAxis: {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },
        series: [
            {
                name: '病毒性感冒',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [320, 302, 301, 334, 390, 330, 320, 301, 334, 390, 330, 320]
            },
            {
                name: '食物中毒',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210]
            },
            {
                name: '跌打损伤',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310, 191, 234, 290, 330, 310]
            },
            {
                name: '过敏',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [150, 212, 201, 154, 190, 330, 410, 201, 154, 190, 330, 410]
            },
            {
                name: '心脑血管疾病',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    e.setOption(option);
}