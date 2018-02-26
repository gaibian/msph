require('../../../css/page/financ/financ_list.less');

$(()=>{
    "use strict";
  const FastClick = require('fastclick');
  FastClick.attach(document.body);
/*导入页面需要依赖的模块*/
let elementPopup = require('../../component/element_popup.js');
let tabContent = require('../../component/tab_content.js');
tabContent.init('.tab_box');

let opt = [{
    el:'popup_btn',
    popup:'pull_right_popup',
    move:'right'
}];

elementPopup.init(opt);

/*页面筛选操作*/
let pageJs = {
    init:function(dom,callback){
        this.window = $(window);
        this.dom = $(dom);
        this.callback = callback;
        this.popupMiddleContent = this.dom.find('.popup_middle_content');
        this.topTitleBox = this.dom.find('.top_title_box');
        this.btnBox = this.dom.find('.btn_box');
        this.resetBtn = this.btnBox.find('.reset_btn');
        this.finishBtn = this.btnBox.find('.finish_btn');
        //this.conLi = this.popupMiddleContent.
        this.conBox = this.popupMiddleContent.find('.con_box');
        this.reset();
        this.bind();
        this.conClickFun();
    },
    reset:function(){
        var _height = this.window.height() - (this.topTitleBox.height() + this.btnBox.height());
        this.popupMiddleContent.css({
            height:_height
        });
    },
    bind:function(){
        var that = this;
        this.resetBtn.on('click',function(){
            that.conBox.each(function(){
                $(this).find('.con_li').removeClass('active');
            });
        });
        this.finishBtn.on('click',function(){
            that.callback();
        })
    },
    conClickFun:function(){
        var that = this;
        this._queue = [];
        this.conBox.each(function(){
            var $this = $(this);
            if($this.hasClass('init')){
                return;
            }
            that._queue.push(new conLiFun($this));
            $this.addClass('init');
        });

        function conLiFun(dom){
            this.dom = dom;
            this.conLi = this.dom.find('.con_li');
            this.bind = function(){
                var that = this;
                this.conLi.on('click',function(){
                    var $this = $(this);

                    if($this.hasClass('active')){
                        $this.removeClass('active');
                    }else{
                        that.conLi.removeClass('active');
                        $this.addClass('active');
                    }
                });
            };
            this.bind();
        };
    }
};
let callback = function(){   //点击完成按钮 后端操作函数

};
pageJs.init('.pull_right_popup',callback);

})
