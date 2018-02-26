require('../../../css/page/index/index.less');

$(function(){
    "use strict";

  /*图片懒加载*/
  const Exposure = require('../../component/lazy.js');
  let $lazy = document.getElementsByClassName('lazy');

  Exposure.one($lazy,function(){
    "use strict";
    let srcValue = this.getAttribute('data-src');
    this.setAttribute('src',srcValue);
  });

  const input = require('../../component/input_check');
  input('.state_box');

    const hoverPopup = require('../../component/hover_popup');
    hoverPopup('.hover_box');

    const tabContent = require('../../component/tab_content');
    tabContent.init('.tab_box');

    const carousel = require('../../component/carousel');
    carousel('.carousel');

    /*导入城市选择数据*/
    const citySelect = require('../../component/city_select');
    citySelect('.city_select');

});