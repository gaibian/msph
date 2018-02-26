//贷款计算 数据
const loanCalcData = (function(){
    let monthData = [{
        value: "3",
        text: "3"
    },{
        value: "6",
        text: "6"
    },{
        value: "12",
        text: "12"
    },{
        value: "24",
        text: "24"
    },{
        value: "36",
        text: "36"
    },{
        value: "48",
        text: "48"
    },{
        value: "60",
        text: "60"
    }];

    let areaData = [{
        value:'宁波市',
        text:'宁波市'
    },{
        value:'其他地区',
        text:'其他地区'
    }];


    return {
        monthData:monthData,
        areaData:areaData
    }
})();

module.exports = loanCalcData;