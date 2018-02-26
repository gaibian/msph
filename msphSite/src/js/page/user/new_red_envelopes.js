require('../../../css/page/user/new_red_envelopes.less');

$(()=>{
  "use strict";
  function show(){
    $('body,html').css({
      height:100 + '%',
      overflow:'hidden'
    })
  }
  function hide(){
    $('body,html').css({
      height:'auto',
      overflow:'auto'
    })
  }
  let receivePopup = $('.page_receive_popup');
  // if(receivePopup.hasClass('active')){
  //   receivePopup.show();
  //   $('body,html').css({
  //     height:100 + '%',
  //     overflow:'hidden'
  //   })
  // }else{
  //   // receivePopup.hide();
  //   // hide();
  // }

  let closeBtn = receivePopup.find('.close_btn');
  closeBtn.on('click',()=>{
    receivePopup.hide();
    receivePopup.removeClass('active');
    hide();
  });

  let secondPopup = $('.second_red_popup');
  // if(secondPopup.hasClass('active')){
  //   secondPopup.show();
  //   show();
  // }else{
  //   secondPopup.hide();
  //   hide();
  // }
  let closeBtn1 = secondPopup.find('.close_btn');
  closeBtn1.on('click',()=>{
    secondPopup.hide();
    secondPopup.removeClass('active');
    hide();
  });

  $('.rules_btn').on('click',()=>{
    $('.page_rules_popup').show();
    show();
  });

  $('.page_rules_popup').on('click',()=>{
    $('.page_rules_popup').hide();
    hide();
  })
});