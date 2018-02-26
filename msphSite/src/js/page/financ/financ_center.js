require('../../../css/page/financ/financ_center.less');


$(()=>{
    "use strict";
  const FastClick = require('fastclick');
  FastClick.attach(document.body);
  let gallery = mui('.mui-slider');
  gallery.slider({
    interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
  });
});