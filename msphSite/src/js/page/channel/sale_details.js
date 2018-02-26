require('../../../css/page/channel/sale_details.less');


$(()=>{
    "use strict";
    const FastClick = require('fastclick');
    FastClick.attach('document.body');
  const elementPopup = require('../../../js/component/element_popup.js');

  let opt = [{
    el:'bottom_nav_box',
    popup:'sale_detele_popup',
    move:'middle'
  }];

  elementPopup.init(opt);
});




