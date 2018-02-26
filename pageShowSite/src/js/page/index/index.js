require('../../../css/page/index/index.less');

$(function(){
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
        $('.one').find('.content_pos').addClass('active');
        $('.down_icon').show();
      }else if(i === 1){  //这是第二屏
        $('.two').find('.content_pos').addClass('active');
        $('.down_icon').show();
      }else if( i === 2){  //这是第三屏
        $('.three').find('.content_pos').addClass('active');
        $('.down_icon').show();
      }else if( i === 3 ){  //这是第四屏
        $('.four').find('.content_pos').addClass('active');
        $('.locat').addClass('active');
        $('.down_icon').show();
      }else if( i === 4){  //这是第五屏
        $('.five').find('.content_pos').addClass('active');
        $('.down_icon').show();
      }else if(i === 5){  //这是第五屏
        $('.five').find('.content_pos').addClass('active');
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
  });
  $('.menu_popup_box').find('.close_btn').on('click',()=>{
    "use strict";
    mPageNav.find('.menu_popup_box').hide();
  })

});