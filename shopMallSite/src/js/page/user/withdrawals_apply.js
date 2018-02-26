require('../../../css/page/user/withdrawals_apply.less');

const elementPopup = require('../../component/element_popup.js');
elementPopup.init([{
    el:'mode_btn',
    popup:'mode_popup',
    move:'bottom'
}]);

var modePopup = $('.mode_popup');
var popupContent = modePopup.find('.popup_content');
var ul = modePopup.find('.ul');
var li = ul.find('.mode_list');

li.on('click',function(){
    "use strict";
    var val = $(this).attr('data-val');
    var text = $(this).text();
    modePopup.hide();
    popupContent.removeClass('bottom_move');
    $('.input_box').find('.text_mode').text(text);
    $('.input_box').find('.text_mode').attr('val',val);
});

