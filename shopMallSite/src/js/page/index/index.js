require('../../../css/page/index/index.less');
$(function(){
    "use strict";
    const mScrollTo = require('../../component/scrollTo.js');
    mScrollTo('.hot_product_box');
    let mySwiper = new Swiper('#swiper1', {
        direction:"horizontal",/*横向滑动*/
        loop:true,/*形成环路（即：可以从最后一张图跳转到第一张图*/
        pagination:".swiper-pagination",/*分页器*/
        prevButton:".swiper-button-prev",/*前进按钮*/
        nextButton:".swiper-button-next",/*后退按钮*/
        autoplay:3000/*每隔3秒自动播放*/
    });

    let li = $("#swiper2").find('li').length;
    let flag = false;
    if(li <= 1){
        flag = false;
    }else{
        flag = true;
    }
    let swiper1 = new Swiper('#swiper2',{
        speed:1000,
        autoplayDisableOnInteraction : false,
        loop:flag,
        centeredSlides : true,
        slidesPerView:1.5,
        paginationClickable:true,
        loopedSlides:8,
        onInit:function(swiper){
            //swiper.slides[1].className="swiper-slide swiper-slide-active";//第一次打开不要动画
        },
    });

    /*图片懒加载*/
    const Exposure = require('../../component/lazy.js');
    let $lazy = document.getElementsByClassName('lazy');

    Exposure.one($lazy,function(){
        "use strict";
        let srcValue = this.getAttribute('data-src');
        this.setAttribute('src',srcValue);
    })
});






