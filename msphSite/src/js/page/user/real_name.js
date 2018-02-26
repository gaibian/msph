require('../../../css/page/user/real_name.less');

$(()=>{
  "use strict";
  const inputClean = require('../../component/input_clean');
  inputClean('.input_clean');

  let input = $('.form_input');
  input.each((index)=>{
    let $this = input.eq(index).find('input');
    $this.on('focus',()=>{
      input.eq(index).find('.title').addClass('move');
    });
    $this.on('blur',()=>{
      if($.trim($this.val()) === ''){
        input.eq(index).find('.title').removeClass('move');
      }

    })
  })
});