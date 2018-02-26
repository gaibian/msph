/*导入当前页面的主less文件*/
require('../../../css/page/loan/my_loan.less');


$(()=>{
  "use strict";
  const FastClick = require('fastclick');
  FastClick.attach(document.body);
  let tabContent = require('../../component/tab_content.js');
  tabContent.init('.tab_box');
});

