require('../../../css/page/channel/scale.less');

$(()=>{
  "use strict";
  const FastClick = require('fastclick');
  FastClick.attach(document.body);
  const pageJs = (()=>{
    "use strict";
    class pageFun{  //父类
      constructor(btn,$selector){
        this.btn = $(btn);
        this.pageDom = $($selector);
        this.listDom = this.pageDom.find('.level_list_box');
        this.remindPopup = $('.remind_popup');
        this.maxGrade = 10;
        this.inputFlag = true;
        this._queue = [];
        this.remindContent = '';
      }
      judgeAddDom(){  //判断是否可以增加层级方法
        this.listDom = this.pageDom.find('.level_list_box');
        this.listLength =this.listDom.length;
        this.listDom.each((index)=>{
        	let $this = this.listDom.eq(index);
	let inputDom = $this.find('input');
	inputDom.each((index)=>{
	  let $input = inputDom.eq(index);
	  if($.trim($input.val()) === ''){
	    this.inputFlag = false;
	    return false;
	  }else{
	    this.inputFlag = true;
	  }
	});
          if(!this.inputFlag){
	  return false;
          }
        });
        if(!this.inputFlag){
          this.remindContent = '请填写上一层级的数据';
          this.remindDom();
          return false;
        }else{
          if(this.listLength >= this.maxGrade){
            this.remindContent = '已经添加到最大层级数';
            this.remindDom();
          }else{
	  this.addDom();
          }
        }
      }
      addDom(){  //添加层级dom方法
          let chNum = this.listLength + 1;
          let creatDom = $('<div class="level_list_box">' +
              '<div class="level_title"><h1 class="title">LV.<span class="title_num">'+ chNum +'</span></h1><div class="delete_btn">删除</div></div>' +
              '<div class="level_content"><div class="input_box"><label class="input_title">月订单总额</label>' +
              '<input class="money_input" type="text" placeholder="" name="money[]"><em class="unit">万元</em></div>' +
              '<div class="input_box"><label class="input_title">返佣</label><input class="unit_input" type="text" name="back_rate[]">' +
              '<em class="unit">%</em></div></div></div>');
          this.pageDom.append(creatDom);
      }
      remindDom(){  //操作错误提醒方法
      	this.remindPopup.text(this.remindContent);
        this.remindPopup.css({
          opacity:1,
          visibility:'visible'
        });
        	setTimeout(()=>{
	  this.remindPopup.css({
	    opacity:0,
              visibility:'hidden'
	  });
	},1500)
      }
    }

    class listChildFun{  //每个单独层级操作的类
      constructor(el,app){
        this.el = el;
        this.deleteBtn = this.el.find('.delete_btn');
        this.numDom = this.el.find('.title_num');
        this.index = Number(this.numDom.text());
        this.moneyInput = this.el.find('.money_input');
        this.unitInput = this.el.find('.unit_input');
        this.app = app;
        this.bind();
      }
      bind(){
        this.deleteBtn.on('click',()=>{
          //数字需要重新更新 删除之后this.listDom会发生改变
          this.el.remove();
          this.app.listDom = this.app.pageDom.find('.level_list_box');
          this.app.listDom.each((index)=>{
            let $this = this.app.listDom.eq(index);
            $this.find('.title_num').text(index+1);
          });
          this.judgeIndex();
          this.app._queue.splice(this.index-1,1);
        });
        this.moneyInput.on('blur',()=>{
          this.judgeInput('.money_input',this.moneyInput);
        });
        this.unitInput.on('blur',()=>{
          this.judgeInput('.unit_input',this.unitInput);
        })
      }
      judgeIndex(){  //重置当前dom的index下标
        this.numDom = this.el.find('.title_num');
        this.index = Number(this.numDom.text());
      }
      judgeInput(otherInput,$input){  //光标输入判断
        this.judgeIndex();
        if(this.index === 1){//表示是第一个
          return false;
        }else{
          if(this.index === this.app.listDom.length){  //只需要比上一个值大
            let prevDom = this.app.listDom.eq(this.index-2).find(otherInput);
            if(prevDom.val() >= $input.val()){
              this.app.remindContent = '请输入比上一级大的数字';
              this.app.remindDom();
              $input.val('');
              return false;
            }else{

            }
          }else{  //需要跟上下级比较
            let prevDom = this.app.listDom.eq(this.index-2).find(otherInput);
            let nextDom = this.app.listDom.eq(this.index).find(otherInput);
            if($input.val() <= prevDom.val()){
              this.app.remindContent = '请输入比上一级大的数字';
              this.app.remindDom();
              $input.val('');
              return false;
            }else{
              if($input.val() >= nextDom.val()){
                this.app.remindContent = '请输入比下一级小的数字';
                this.app.remindDom();
                $input.val('');
              }else{
              }
            }
          }
        }

      }
    }

    class listFun extends pageFun{  //子类
      constructor(btn,$selector){
        super(btn,$selector);
        this.init();
        this.bind();
      }
      init(){
        this.listDom = this.pageDom.find('.level_list_box');
        this.listDom.each((index)=>{
          let $this = this.listDom.eq(index);
          $this.find('.title_num').text(index+1);
          this._queue.push(new listChildFun($this,this));
        });
      }
      bind(){
        //新增层级事件
        this.btn.on('click',()=>{
          this.judgeAddDom();
          this.listDom = this.pageDom.find('.level_list_box');
          let lastDom = this.listDom.eq(this.listDom.length - 1);
          this._queue.push(new listChildFun(lastDom,this));
        });
      }
    }
    return (btn,$selector)=>{
      new listFun(btn,$selector);
    }
  })();
  pageJs('.footer_btn','.scale_page_content');
});