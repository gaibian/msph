require('../../../css/page/function/function.less');

$(function(){
  const tabContent = require('../../component/tab_content');
  tabContent.init('.tab_box');
  $('#fullpage').fullpage({
    navigation:true,
    navigationPosition:'right',
    slidesNavigation:true,
    css3:true,
    navigationColor:'#fff',
    //continuousVertical:true,
    afterLoad:function(anchorLink,index){
      let i = index-1;
      if(i === 0){  //这是第一屏
        $('.section_box').addClass('active');
        console.log(i);
      }else if(i === 1){  //这是第二屏
        $('.two').find('.content_pos').addClass('active');
        $('.down_icon').show();
        console.log(i);
      }else if( i === 2){  //这是第三屏
        $('.three').find('.content_pos').addClass('active');
        $('.down_icon').show();
      }else if( i === 3 ){  //这是第四屏
        $('.four').find('.content_pos').addClass('active');
        $('.locat').addClass('active');
        $('.down_icon').show();
      }else if( i === 4){  //这是第五屏
        $('.five').find('.content_pos').addClass('active');
        $('.down_icon').hide();
      }else if( i === 5){
        $('.six').find('.content_pos').addClass('active');
        $('.down_icon').hide();
      }else if( i === 6){
        $('.seven').find('.content_pos').addClass('active');
        $('.down_icon').hide();
      }else if( i === 7){
        $('.seven').find('.content_pos').addClass('active');
        $('.eight').find('.content_pos').addClass('active');
        $('.down_icon').hide();
      }
    }
  });
  $('.down_icon').on('click',function(){
    $.fn.fullpage.moveSectionDown();
  });

  let mPageNav = $('.m_page_nav_box');
  let mMenuBtn = mPageNav.find('.menu_icon');
  mMenuBtn.on('click',()=>{
    "use strict";
    mPageNav.find('.menu_popup_box').show();
  })
  $('.menu_popup_box').find('.close_btn').on('click',()=>{
    "use strict";
    mPageNav.find('.menu_popup_box').hide();
  })

  let i = 0;
  let imgLi = $('.img_ul_box').find('.img_li');
  imgLi.eq(0).show();
  $('.prev_btn').hide();
  $('.next_btn').on('click',function(){
    "use strict";
      if(i == imgLi.length - 2){
        $(this).hide();
      }
      i++;
      if(i>0){
        $('.prev_btn').show();
      }
      imgLi.each(function(index){
        imgLi.hide();
        imgLi.eq(i).show();
      })

  });
  $('.prev_btn').on('click',function(){
    "use strict";
    console.log(i);
    if(i === 1){
      $(this).hide();
    }
      i--;
      if(i<imgLi.length - 1){
        $('.next_btn').show();
      }
      imgLi.each(function(index){
        imgLi.hide();
        imgLi.eq(i).show();
      })

  })



});