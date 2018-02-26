//导入当前页面的主less文件
require('../../../css/page/credit_card/card_center.less');

$(()=>{
    "use strict";
  const FastClick = require('fastclick');
  FastClick.attach(document.body);
  //顶部轮播图执行
  let gallery = mui('.mui-slider');
  gallery.slider({
    interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
  });
});
