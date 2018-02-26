require('../../../css/page/user/all_profit.less');


// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echarts_main'));

var option = {
    color: ['#fff'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '0%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis : [
        {
            type : 'category',
            data : ['12.04', '12.05', '12.06', '12.07', '12.08', '12.09', '12.10'],
            axisTick: {
                show:false,
                alignWithLabel: true
            },
            nameTextStyle:{
                color:'#fff',
                fontSize:48,
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#fff',
                    opacity:0.5
                }
            },
        }
    ],
    yAxis : [
        {
            show:false,
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '2%',
            data:[10.00, 52.00, 200.00, 334.00, 390.00, 330.00, 220.00],
            legendHoverLink:false,
            animation:{
                show:true
            },
            label:{
                normal:{
                    show:true,
                    position:[0,-20]
                },
                emphasis:{
                    show:false
                }
            },
            silent:true,
            itemStyle:{
                normal:{
                    color:'rgba(255,255,255,0.4)',
                    shadowColor:'rgba(0,0,0,0)'
                },
                emphasis:{
                    color:'#fff'
                }
            }
        }
    ]
};

myChart.setOption(option);
// Enable data zoom when user click bar.
// var zoomSize = 6;
// myChart.on('click', function (params) {
//     console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
//     myChart.dispatchAction({
//         type: 'dataZoom',
//         startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
//         endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
//     });
// });
