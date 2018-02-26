require('../../../css/page/car_insurance/index.less');

$(()=>{
  "use strict";
  const hoverPopup = require('../../component/hover_popup');
  hoverPopup('.hover_box');

  const input = require('../../component/input_check');
  input('.state_box');

  const tabContent = require('../../component/tab_content');
  tabContent.init('.tab_box');

  /*导入城市选择数据*/
  const citySelect = require('../../component/city_select');
  citySelect('.city_select');

  /*车险保障*/
  let aTextBox = $('.a_text_box');
  let carGuaranteeDom = $('.car_guarantee_details_box');
  aTextBox.each((index)=>{
    let $this = aTextBox.eq(index);
    $this.on('mouseover',()=>{
      aTextBox.find('.explan_text_box').removeClass('active');
      $this.find('.explan_text_box').addClass('active');
    });
    $this.on('mouseleave',()=>{
      aTextBox.find('.explan_text_box').removeClass('active');
    })
  });

});