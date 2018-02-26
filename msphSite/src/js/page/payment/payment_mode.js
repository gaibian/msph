require('../../../css/page/payment/payment_mode.less');

$(()=>{
    "use strict";
    const FastClick = require('fastclick');
    FastClick.attach(document.body);
    const elementPopup = require('../../component/element_popup.js');
    const tabContent = require('../../component/tab_content.js');

    tabContent.init('.tab_box');

    elementPopup.init([{
        el:'stage_li',
        popup:'by_stages_popup',
        move:'bottom'
    }]);

    $('.tab_content_box').find('.tab_content').eq(0).show();

    // let bigPopup = $('.by_stages_popup');
    // let smallPopup = $('.sure_popup_box');
    // $('.sy_btn').on('click',()=>{
    //     if($('.sy_agree').prop('checked')){
    //         bigPopup.show();
    //         bigPopup.find('.popup_content').removeClass('bottom_move');
    //         smallPopup.show();
    //         smallPopup.find('.pre_btn').on('click',()=>{
    //             smallPopup.hide();
    //             bigPopup.show();
    //             bigPopup.find('.popup_content').addClass('bottom_move');
    //         });
    //     }
    // })
});








