/*页面返回顶部组件*/
/*
* 需要看页面顶部是否有头,减去头的高度 44px
* */
const scrollTo = (()=>{
    "use strict";
    let _queue = [];
    let init = (opt)=>{
        for(let i=0;i<opt.length;i++){
            _queue.push(new scrollToFun(opt[i]));
        }
    };

    class scrollToFun{
        constructor(obj){
            this.obj = obj;
            this.btn = this.selectorFun(this.obj.el);
            this.positionDom = this.selectorFun(this.obj.position);
            this.iTimer = null;
            this.init();
        }
        selectorFun(dom){
            return $('.' + dom);
        };
        toTop(dom){  //方法获取到距离顶部的距离
            let iTop = 0;
            while(dom){
                iTop += dom.offsetTop;
                dom = dom.offsetParent;
            }
            return iTop;
        };
        init(){
            //获取滚动到目标元素的距离顶部的位置
            this.bind();
        };
        bind(){
            let that = this;
            this.btn.on('click',()=>{
                let top = that.toTop(that.positionDom[0]) - 44;
                $('body,html').animate({scrollTop:top},300);
                return false;
            });
        };
    }

    return {
        init:init
    };
})();

module.exports = scrollTo;