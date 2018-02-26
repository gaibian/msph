//导入当前页面的主less文件
require('../../../css/page/credit_card/card_list.less');

$(()=>{
    "use strict";
  const FastClick = require('fastclick');
  FastClick.attach(document.body);

let elementPopup = require('../../component/element_popup.js');

let opt = [{
    el:'choice_box',
    popup:'menu_popup_box',
    move:'middle'
}];

elementPopup.init(opt);


let menuFun = {
    init:function(dom,callback){
        this.menuPopup = $(dom);
        this.callback = callback;
        this.choiceBox = this.menuPopup.find('.choice_box');
        this.menuPopupDom = this.menuPopup.find('.menu_popup_box');
        this.spanTit = this.menuPopup.find('.tit_text');
        this.menuUl = this.menuPopup.find('.menu_ul');
        this.menuLi = this.menuUl.find('.menu_li');
        this.bind();
    },
    bind:function(){
        const that = this;
        this.menuLi.on('click',function(){
            let text = $(this).find('span').text();
            that.menuPopupDom.hide();
            that.spanTit.text(text);
            that.menuLi.find('.gou_icon').removeClass('active');
            $(this).find('.gou_icon').addClass('active');
            that.choiceBox.removeClass('classActive');
            that.callback();
        })
    }
};
let callback = function(){

};
menuFun.init('.card_list_choice',callback);

});