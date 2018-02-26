require('../../../css/page/know/know.less');

$(function(){
  "use strict";

  /*图片懒加载*/
  const Exposure = require('../../component/lazy.js');
  let $lazy = document.getElementsByClassName('scroll_dom');
  Exposure.one($lazy,function(){
    "use strict";
    // let srcValue = this.getAttribute('data-src');
    // this.setAttribute('src',srcValue);
    $(this).addClass('active');
  });

  let mPageNav = $('.m_page_nav_box');
  let mMenuBtn = mPageNav.find('.menu_icon');
  mMenuBtn.on('click',()=>{
    "use strict";
    mPageNav.find('.menu_popup_box').show();
  });
  $('.menu_popup_box').find('.close_btn').on('click',()=>{
    "use strict";
    mPageNav.find('.menu_popup_box').hide();
  })
});