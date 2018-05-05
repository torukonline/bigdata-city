var jobChart = echarts.init(document.getElementById('jobindustry'));
option = {
    backgroundColor:'#FFF',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        x: 'left',
        data:['互联网行业','金融行业','教育行业','快速消费品行业','医疗行业','房地产行业','电子商务']
    },
    series: [
        {
            name:'传统行业',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            // center: [330,300],
            color: ['#ccc', '#91e1e0',],
            label: {
                normal: {
                    position: 'inner',
                    formatter: '{b}\n{d}%'

                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:27392, name:'教育行业'},
                {value:15247, name:'医疗行业'},
                {value:3963, name:'房地产行业'},
                {value:3963, name:'快速消费品行业'}
            ]
        },
        {
            name:'创新型行业',
            type:'pie',
            radius: ['35%', '45%'],
            // center: [330, 300],
            color: ['#669999','#33CC99','#CC6666', '#FF9966', '#3399CC'],
            label: {
                normal: {
                    formatter: '{b}\n  {c} ({d}%)'
                }
            },

            data:[
                {value:1103, name:'互联网行业'},
                {value:1257, name:'金融行业'},
                {value:1281, name:'电子商务'}
            ]
        }
    ]
};
jobChart.setOption(option);