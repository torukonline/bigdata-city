//教育 学校数量 饼状图
function initSchoolChart(){
    var e = echarts.init(document.getElementById("jiaoyu-chart"));

    option = {
        title : {
            text: '学校数量分布',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['大学数量','高中数量','初中数量','小学数量','幼儿园数量']
        },
        series : [
            {
                name: '医院数量',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:1, name:'大学数量'},
                    {value:2, name:'高中数量'},
                    {value:3, name:'初中数量'},
                    {value:4, name:'小学数量'},
                    {value:5, name:'幼儿园数量'},
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


//教育 师生数量分布 饼状图
function initStudentChart(){
    var e = echarts.init(document.getElementById("jiaoyu-chart"));

    option = {
        title : {
            text: '师生数量分布',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['教师数量','学生数量']
        },
        series : [
            {
                name: '师生数量',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:256, name:'教师数量'},
                    {value:1123, name:'学生数量'}
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



//教育 师生数量分布 饼状图
function showTeacherLevelChart(){
    var e = echarts.init(document.getElementById("showTeacherLevelChart"));

    option = {
        title: {
            text: '不同学科教师教育背景',
            center: 'top'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            text: ['数学','物理','化学','英语','语文','生物','政治','历史','地理','文体']
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
            data: ['数学','物理','化学','英语','语文','生物','政治','历史','地理','文体']
        },
        series: [
            {
                name: '博士及更高',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [2, 3, 1, 2, 3, 1, 1, 2, 3, 3],
                barWidth: '40%'
            },
            {
                name: '研究生',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [3, 4, 6, 2, 6, 1, 3, 4, 4, 5],
                barWidth: '40%'
            },
            {
                name: '本科',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [12, 13, 15, 14, 10,12, 12, 11, 10, 10]
            },
            {
                name: '专科及以下',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [8, 9, 6, 7, 8,5, 4, 6, 7, 9]
            }
        ]
    };
    e.setOption(option);
}



function initTeacherAgeChart(){
    var e = echarts.init(document.getElementById("showTeacherAgeChart"));

    option = {
        title: {
            text: '不同年龄段教师性别数量',
            center: 'top'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['男教师数量','女教师数量']
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
            data: ['20-29岁','30-39岁','40-49岁','50-59岁','60岁以上']
        },
        series: [
            {
                name: '男教师数量',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [19, 25, 29, 31, 12],
                barWidth: '40%'
            },
            {
                name: '女教师数量',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [19, 40, 39, 45, 4]
            }
        ]
    };

    e.setOption(option);
}


function showStudentEduChart(){
    var e = echarts.init(document.getElementById("showStudentEduChart"));

    option = {
        title: {
            text: '近10年本地生源去向分布',
            center: 'top'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            text: ['重点大学','统招本科','专科','自主就业']
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
            data: ['2010','2011','2012','2013','2014','2015','2016','2017']
        },
        series: [
            {
                name: '重点大学',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [34, 20, 12, 24, 38, 32, 40, 45],
                barWidth: '40%'
            },
            {
                name: '统招本科',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [123, 112, 145, 155, 120, 169, 130, 122],
                barWidth: '40%'
            },
            {
                name: '专科',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [45, 46, 33, 21, 46,59, 45, 30]
            },
            {
                name: '自主就业',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [60, 55, 43, 33, 21, 55, 41, 61]
            }
        ]
    };

    e.setOption(option);
}

function showPeixunjigouCHart(){
    var e = echarts.init(document.getElementById("showPeixunjigouCHart"));

    option = {
        title : {
            text: '本地特长培训机构及数量',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['舞蹈','音乐','数理化','英语','武术','乐高','计算机']
        },
        series : [
            {
                name: '培训机构数量',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:12, name:'舞蹈'},
                    {value:6, name:'音乐'},
                    {value:33, name:'数理化'},
                    {value:40, name:'英语'},
                    {value:5, name:'武术'},
                    {value:0, name:'乐高'},
                    {value:10, name:'计算机'}
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