
require("../../../css/page/index/index_new.less");
//import  temp from "art-template";
//console.log(temp,require('art-template'));
$(()=>{
    "use strict";
    const FastClick = require('fastclick');
    FastClick.attach(document.body);
    // window.temp = require('art-template');
    // console.log(temp,1);
    const templateModule = require('../../template/template');
  templateModule.init([{
        el:'.carousel_box',
          template:'top_carousel',
          position:'inside'
    }]);

   //template.config("escape",false);ul

    let Exposure = require("../../component/lazy.js");
    let $lazy = document.getElementsByClassName('lazy');
    Exposure.one($lazy,function(){
        let srcValue = this.getAttribute('data-src');
        this.setAttribute('src',srcValue);
    });

    let gallery = mui('.mui-slider');
    gallery.slider({
        interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
    });
});



