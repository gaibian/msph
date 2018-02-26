require('../../../css/page/insurance/detail.less');

const tabContent = (function(){
    "use strict";
    let _queue = [];

    class tabFun{
        constructor(el){
            this.el = $(el);
            this.tabBtn = this.el.find('.tab_btn');
            this.tabContent = this.el.find('.explain_list_box');
            this.init();
        }
        init(){
            this.tabContent.eq(0).show();
            this.bind();
        }
        bind(){
            this.tabBtn.each((index)=>{
                let $this = this.tabBtn.eq(index);
                $this.on('click',()=>{
                    this.tabBtn.removeClass('active');
                    this.tabBtn.eq(index).addClass('active');
                    this.tabContent.hide();
                    this.tabContent.eq(index).show();
                })
            })
        }
    }

    return (el)=>{
        _queue.push(new tabFun(el));
    }

})();

tabContent('.explain_content');