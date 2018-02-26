require('../../../css/page/loan/loan_product_details.less');

$(()=>{
    "use strict";
  const FastClick = require('fastclick');
  FastClick.attach(document.body);

/*导入页面上需要的组件*/
const elementPopup = require('../../component/element_popup.js');
let opt = [{
    el:'apply_btn',
    popup:'apply_popup',
    move:'middle'
}];
elementPopup.init(opt);
/*页面js*/
const pageScrollBox = $('.page_scroll_box');
const headerNav = $('.page_header_title');
const scrollPosition = $('.scroll_position');
const bottomBtnBox = $('.bottom_btn_box');
const winHeight = $(window).height();

pageScrollBox.css({
    height:winHeight - (headerNav.outerHeight(true) + bottomBtnBox.outerHeight(true))
});
scrollPosition.css({
    height:winHeight - (headerNav.outerHeight(true) + bottomBtnBox.outerHeight(true))
});

const inputFocus = {
    init:function(dom){
        this.dom = $(dom);
        this._queue = [];
        var that = this;
        this.inputListBox = this.dom.find('.input_list_box');
        this.inputListBox.each((index)=>{
            var $this = that.inputListBox.eq(index);
            if($this.hasClass('init')){
                return;
            }
            that._queue.push(new inputFun($this));
            $this.addClass('init');
        });

        function inputFun(dom){
            this.dom = dom;
            this.inputBox = this.dom.find('.input_box');
            this.input = this.inputBox.find('input');
            this.label = this.dom.find('.label_name');
            var that = this;
            this.input.on('focus',function(){
                that.label.addClass('label_move');
                setTimeout(function(){
                    that.inputBox.css({
                        opacity:1
                    })
                },500);

            });
            /*this.input.on('blur',function(){

                that.inputBox.css({
                    opacity:0
                });
                that.label.removeClass('label_move');
                setTimeout(function(){

                },500);
            })*/
        }
    }
};

inputFocus.init('.form');

window.verify = require('../../component/verify.js');

let inputListBox = $('.input_list_box');
inputListBox.each(function(){
    let $this = $(this);
    $this.find('.delete_btn').on('click',function(){
        $this.find('input').val('');
    })
});

});
