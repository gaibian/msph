require('../../../css/page/order/state_have.less');

$(()=>{
    "use strict";
    const FastClick = require('fastclick');
    FastClick.attach(document.body);
  let flowBox = $('.flow_box');
  let active = flowBox.find('.active');
  active.eq(active.length - 1).css({
    background:'#e1e1e1'
  });
});
