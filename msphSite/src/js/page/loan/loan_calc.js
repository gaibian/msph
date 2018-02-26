require('../../../css/page/loan/loan_calc.less');


$(()=>{
    "use strict";
      const FastClick = require('fastclick');
      FastClick.attach(document.body);
/*页面主要js*/
class calcParent{
    constructor(dom1,dom2){
        this.domShowBox = $(dom1);
        this.domEnterBox = $(dom2);
        this.activeBox = this.domEnterBox.find('.inter_box');
        this.activeBtn = this.activeBox.find('.crl');
        this.calcBtn = this.domEnterBox.find('.calc_btn');
        this.resetBtn = this.domEnterBox.find('.reset_btn');
        this.allMoneyInput = $('#all_money');
        this.monthInput = $('#month');
        this.interMonthInput = $('#inter_month');
        this.eachRepayment = $('#each_repayment');
        this.lateRepayment = $('#late_repayment');
        this.allInterest = $('#all_interest');
        this.allInterestMoney = $('#all_interest_money');
        this.activeVal = '';
        this.eachRepaymentVal = '';
        this.lateRepaymentVal = '';
        this.allInterestVal = '';
        this.allInterestMoneyVal = '';
        this.flag = false;
        this.init();
    }
    init(){
        let that = this;
        //默认选择到等本等息
        this.activeBtn.eq(1).addClass('active');
        //判断是需要按等本等息算 还是 先息后本算
        this.activeFun();
        this.bind();
    }
    bind(){
        let that = this;
        this.activeBtn.each((index)=>{
            let $this = that.activeBtn.eq(index);
            $this.on('click',()=>{
                that.activeBtn.removeClass('active');
                $this.addClass('active');
                that.activeFun();
                //判断执行计算函数
            });
        });
        //点击计算事件
        this.calcBtn.on('click',()=>{
            //先判断按什么方式计算
            that.emtpyFun();
            if(that.flag){
                if(that.activeVal == '等本等息'){
                    that.calcFunB();
                }else if(that.activeVal == '先息后本'){
                    that.calcFunX();
                }
            }else{
                return false;
            }

            //页面滚动到顶部
        });
        //点击重置事件
        this.resetBtn.on('click',()=>{
            that.resetFun();
        });
    }

    emtpyFun(){
        let that = this;
        this.input = this.domEnterBox.find('input');
        this.input.each((index)=>{
            let $this = that.input.eq(index);
            if($.trim($this.val()) == ''){
                that.flag = false;
            }else{
                that.flag = true;
            }
        })
    }

    calcFunB(){  //等本等息计算函数
        let allMoneyInputVal = Number(this.allMoneyInput.val());
        let monthInputVal = Number(this.monthInput.val());
        let interMonthInputVal = Number(this.interMonthInput.val()) / 1000;

        this.eachRepaymentVal = (allMoneyInputVal * interMonthInputVal) + (allMoneyInputVal / monthInputVal); //每月还款的钱
        this.lateRepaymentVal = this.eachRepaymentVal;  //末期还款的钱
        this.allInterestVal = allMoneyInputVal * monthInputVal * interMonthInputVal;  //总的利息
        this.allInterestMoneyVal = this.allInterestVal + allMoneyInputVal; //本息合计

        this.eachRepaymentValF = Math.round(this.eachRepaymentVal*100) / 100;
        this.lateRepaymentValF = Math.round(this.lateRepaymentVal*100) / 100;
        this.allInterestValF = Math.round(this.allInterestVal*100) / 100;
        this.allInterestMoneyValF = Math.round(this.allInterestMoneyVal*100) / 100;
        this.dataShow(this.eachRepaymentValF,this.lateRepaymentValF,this.allInterestValF,this.allInterestMoneyValF);
    }
    calcFunX(){   //先息后本计算函数
        let allMoneyInputVal = Number(this.allMoneyInput.val());
        let monthInputVal = Number(this.monthInput.val());
        let interMonthInputVal = Number(this.interMonthInput.val()) / 1000;

        this.eachRepaymentVal = allMoneyInputVal * interMonthInputVal; //每月还款的钱
        this.lateRepaymentVal = this.eachRepaymentVal + allMoneyInputVal;  //末期还款的钱
        this.allInterestVal = allMoneyInputVal * monthInputVal * interMonthInputVal;  //总的利息
        this.allInterestMoneyVal = this.allInterestVal + allMoneyInputVal; //本息合计

        this.eachRepaymentValF = Math.round(this.eachRepaymentVal*100) / 100;
        this.lateRepaymentValF = Math.round(this.lateRepaymentVal*100) / 100;
        this.allInterestValF = Math.round(this.allInterestVal*100) / 100;
        this.allInterestMoneyValF = Math.round(this.allInterestMoneyVal*100) / 100;
        this.dataShow(this.eachRepaymentValF,this.lateRepaymentValF,this.allInterestValF,this.allInterestMoneyValF);
    }

    dataShow(num1,num2,num3,num4){
        this.eachRepayment.text(num1);
        this.lateRepayment.text(num2);
        this.allInterest.text(num3);
        this.allInterestMoney.text(num4);
    }

    resetFun(){  //重置事件执行函数
        let that = this;
        this.allInput = this.domEnterBox.find('input');
        this.allInput.each((index)=>{
            let $this = that.allInput.eq(index);
            $this.val('');
        });
        this.domShowBox.find('.num').each((index)=>{
            let $this = that.domShowBox.find('.num').eq(index);
            $this.text('0.00')
        })
    }

    activeFun(){  //判断是选择等额本息 还是 先息后本
        let that = this;
        this.activeBtn.each((index)=>{
            let $this = that.activeBtn.eq(index);
            if($this.hasClass('active')){
                that.activeVal = $this.parent().find('.text').text();
            }
        });
    }
}
new calcParent('.data_show_box','.calc_content_box');

const scrollTo = require('../../component/scroll_to.js');

let opt = [{
    el:'calc_btn',
    position:'data_show_box'
}];
scrollTo.init(opt);

});