require('../../../css/page/special_page/bank_loan.less');


$(()=>{
    "use strict";
  const FastClick = require('fastclick');
  FastClick.attach(document.body);
  const Exposure = require('../../component/lazy.js');
  let $lazy = document.getElementsByClassName('lazy');

  Exposure.one($lazy,function(){
    "use strict";
    let srcValue = this.getAttribute('data-src');
    this.setAttribute('src',srcValue);
  });
});


