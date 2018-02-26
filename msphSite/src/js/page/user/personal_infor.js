require('../../../css/page/user/personal_infor.less');

$(()=>{
  "use strict";
  const elementPopup = require('../../component/element_popup');
  elementPopup.init([{
    el:'load_img_btn',
    popup:'load_header_popup',
    move:'bottom'
  }]);
});