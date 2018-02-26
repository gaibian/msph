require('../../../css/page/credit_card/details.less');

$(()=>{
    "use strict";
    const hoverPopup = require('../../component/hover_popup');
    hoverPopup('.hover_box');

    const tabContent = require('../../component/tab_content');
    tabContent.init('.tab_box');

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

    const enlargeImg = (()=>{
        class imgFun{
            constructor(dom){
                this.dom = $(dom);
                this.bigImg = this.dom.find('.img_box img');
                this.ul = this.dom.find('.carousel_ul');
                this.li = this.ul.find('>li');
                this.bind();
            }
            bind(){
                this.li.each((index)=>{
                    let $this = this.li.eq(index);
                    $this.on('click',()=>{
                        let dataImg = $this.find('img').attr('data-img');
                        this.bigImg.attr('src',dataImg);
                    })
                })
            }
        }
        return (el)=>{
            new imgFun(el);
        }
    })();

    enlargeImg('.js_carousel')
});