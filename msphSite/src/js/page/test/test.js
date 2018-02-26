require('../../../css/page/test/test.less');
$(()=>{
  "use strict";
  // const FastClick = require('fastclick');
  // FastClick.attach(document.body);
  // const mCarousel = require('../../component/m_carousel.js');
  // mCarousel('.wrapper');
  // const mPicker = require('../../component/m_picker.js');
  // mPicker('.picker');

  var handler = function(captchaObj){
    captchaObj.onReady(function(){

    }).onSuccess(function(){

    });
    $('.btn').on('click',function(){
      //先通过前端校验
      var vaildate = captchaObj.getValidate();
      if(!vaildate){
        alert('请先完成验证');
        return;
      }
      // captchaObj.verify();
      // console.log('sss');
      $.ajax({  //提交表单数据 进行验证

      })
    })
  };
  $.ajax({
    url:'',
    type:'get',
    dataType:'json',
    success:function(data){
      initGeetest({
        gt:data.gt,
        challenge:data.challenge,
        offline:!data.success,
        new_captcha:data.new_captcha,
        product:'bind',
        width:'300px',
      },handler);
    },
    error:function(){
      console.log('请求ajax失败');
    }
  })

});





