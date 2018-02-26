require('../../../css/page/loan/apply_loan.less');

$(()=>{
  "use strict";
  /*图片懒加载*/
  const Exposure = require('../../component/lazy.js');
  let $lazy = document.getElementsByClassName('lazy');

  Exposure.one($lazy,function(){
    "use strict";
    let srcValue = this.getAttribute('data-src');
    this.setAttribute('src',srcValue);
  });
});