require('../../../css/page/user/use_red_envelopes.less');

 $(function(){
   "use strict";

   class fool{
     constructor(dom){
       this.dom = dom;
       this.reduceBtn = this.dom.find('.reduce');
       this.addBtn = this.dom.find('.add');
       this.input = this.dom.find('.input');
       this.numVal = this.dom.find('.num_val');
       this.maxNum = this.numVal.attr('data-num');
       this.maskBox = $('.remind_popup');
       this.allEnveNum = $('.all_enve_num');
       this.enveType = this.dom.attr('data-type');
       this.priceNum = Number(this.dom.find('.price_num').text().replace('￥',''));
       this.maxEnveNum = $('.max_enve_num');
       this.enveNum = 0;
       this.init();
     }
     init(){
       this.input.val(0);
       this.inputVal = Number(this.input.val());
       this.allEnveNum.text('￥' + this.enveNum);
       this.bind();
     }
     bind(){
       var that = this;
       this.input.on('focus',function(){
         that.enveNum = Number(that.allEnveNum.text().replace('￥',''));
       });
       this.input.on('keyup',function(){

         that.inputVal = Number(that.input.val());
         if(that.inputVal === 0){
           return false;
         }else{
           if(that.inputVal > that.maxNum){
             that.input.val(that.maxNum);
             that.maskBox.show();
             setTimeout(function(){
               that.maskBox.hide();
             },2000)
           }else{
             if(that.enveType === 'default'){  //点击的是50
               that.enveNum = that.enveNum + (that.inputVal * that.priceNum);
               $(this).attr('data-num',that.inputVal * that.priceNum);
               let newAllNum = that.input * that.priceNum;
             }else if(that.enveType === 'not_default'){  //点击的是200
               that.enveNum = that.enveNum + (that.inputVal * that.priceNum);
               $(this).attr('data-num',that.inputVal * that.priceNum);
             }
             that.calcFun();
           }
         }

       });

       this.addBtn.on('click',function(){
         let maxNum = Number(that.maxEnveNum.text().replace('￥',''));
         let newAllNum = Number(that.allEnveNum.text().replace('￥',''));
         that.attrNum = Number(that.input.attr('data-num'));

         if(that.inputVal >= that.maxNum){
           that.input.val(that.maxNum);
           that.inputVal = Number(that.input.val());
           return false;
         }else{
           if(that.enveType === 'default'){  //点击的是50
             if(newAllNum > maxNum - that.priceNum){
               return false;
             }else{
               that.enveNum = that.attrNum + that.priceNum;
               that.input.attr('data-num',that.enveNum);
               that.input.val(that.inputVal + 1);
               that.inputVal = Number(that.input.val());
             }
           }else if(that.enveType === 'not_default'){  //点击的是200
             if(newAllNum > maxNum - that.priceNum){
               return false;
             }else{
               that.enveNum = that.attrNum + that.priceNum;
               that.input.attr('data-num',that.enveNum);
               that.input.val(that.inputVal + 1);
               that.inputVal = Number(that.input.val());
             }

           }
           that.calcFun()
         }

       });

       this.reduceBtn.on('click',function(){
         that.attrNum = Number(that.input.attr('data-num'));
         if(this.inputVal > that.maxNum){
           that.input.val(that.maxNum);
           that.inputVal = Number(that.input.val());
           return false;
         }else{
           if(that.inputVal <= 0){
             that.input.val(0);
           }else{
             that.input.val(that.inputVal - 1);
             that.inputVal = Number(that.input.val());
             if(that.enveType === 'default'){  //点击的是50
               that.enveNum = that.attrNum - that.priceNum;
               that.input.attr('data-num',that.enveNum);
             }else if(that.enveType === 'not_default'){  //点击的是200
               that.enveNum = that.attrNum - that.priceNum;
               that.input.attr('data-num',that.enveNum);
             }

             that.calcFun()

           }
         }
       });
     }
     calcFun(){
       var that = this;
       let maxNum = Number(that.maxEnveNum.text().replace('￥',''));
       this.addNumArr = [];
       $('.envelopes_list_box').each(function(){
         let val = $(this).find('.num_val input').attr('data-num');
         that.addNumArr.push(val);
       });
       let newNum = 0;
        for(var i =0;i<that.addNumArr.length;i++){
          newNum = newNum + Number(that.addNumArr[i]);
        }
       //let newNum = Number(that.addNumArr[0]) + Number(that.addNumArr[1]);
       console.log(newNum);
       if(newNum > maxNum){
         return false;
       }else{
         that.allEnveNum.text('￥' + newNum);
       }

     }
   }

   var _queue = [];
   $('.envelopes_list_box').each(function(){
     var $this = $(this);
     if($this.hasClass('xj')){
       return false;
     }
     _queue.push(new fool($this));
     $this.addClass('xj');
   });
 });

