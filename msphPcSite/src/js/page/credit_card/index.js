require('../../../css/page/credit_card/index.less');

$(()=>{
    "use strict";
    const hoverPopup = require('../../component/hover_popup');
    hoverPopup('.hover_box');

    /*图片懒加载*/
    const Exposure = require('../../component/lazy.js');
    let $lazy = document.getElementsByClassName('lazy');

    Exposure.one($lazy,function(){
        "use strict";
        let srcValue = this.getAttribute('data-src');
        this.setAttribute('src',srcValue);
    });

    /*轮播*/
    const carousel = require('../../component/carousel');
    carousel('.carousel');
})