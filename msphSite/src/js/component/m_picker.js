/*
* 移动端picker组件
* */
import BScroll from 'better-scroll';  //导入移动端滚动框架
const picker = (()=>{
  "use strict";
  let _queue = [];
  let EVENT_CHANGE = 'change';
  class pickerFun{
    constructor(dom){
      this.dom = dom;
      this.comfigBtn = this.dom.querySelector('.confim');
      this.cancelBtn = this.dom.querySelector('.cancel');
      this.wheelWrapper = this.dom.querySelector('.wheel_wrapper');
      this.wheel = this.dom.querySelectorAll('.wheel');
      this.wheels = [];
      this.pickerSelectedIndex = [0,0];
      this.init();
    }
    init(){
      for(let i=0;i<this.wheel.length;i++){
        this._createWheel(i);
      }
    }
    bind(){
      //点击完成事件
      this.comfigBtn.on('click',()=>{

      });
      //点击取消事件
      this.cancelBtn.on('click',()=>{

      });
    }
    _createWheel(i){
      if(!this.wheels[i]){
        this.wheels[i] = new BScroll(this.wheelWrapper.children[i],{
          wheel:{
            selectedIndex:this.pickerSelectedIndex[i],
            rotate:25,
            adjustTime:400
          },
          probeType:3
        });

        this.wheels[i].on('scrollEnd',()=> {
          console.log(this.wheels[i].getSelectedIndex())
        })
      }else{
        this.wheels[i].refresh();
      }
      return this.wheels[i];
    }
  }
  return (el)=>{
    //判断传进来的el是dom对象还是字符串
    let wrapper = typeof el === 'string' ? document.querySelectorAll(el) : el;
    for(let i=0;i<wrapper.length;i++){
      let $this = wrapper[i];
      if($this.className.indexOf('init') === -1){
        _queue.push(new pickerFun($this));
        $this.className += ' init';
      }else{
        return false;
      }
    }
  };
})();

module.exports = picker;