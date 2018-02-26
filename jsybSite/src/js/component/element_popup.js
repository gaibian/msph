/*
* 弹窗组件
* <div class="popup_btn" data-popup="pull_right_popup" data-move="pull_right" ></div>
* <div class="pull_right_popup">
*   <div class="popup_content">
    </div>
*   <div class="mask_box"></div>
* </div>
* 行动形式 data-move
* pull_top pull_right pull_bottom null
* */

const elementPopup = (function(){
    var _queue = [];
    function init(dom){
        var dom = $(dom);
        dom.each(function(index){
            var $this = $(this);
            if($this.hasClass('init')){
                return;
            }
            _queue.push(new ejectFun($this));
            $this.addClass('init');
        })
    }

    function ejectFun(dom){
        this.dom = dom;

        this.init();
    }
    ejectFun.prototype = {
        init:function(){
            this.popupDom = $('.' + this.dom.attr('data-popup'));
            this.maskBox = this.popupDom.find('.mask_box');
            //this.contentBox = this.popupDom.find('.menu_box');
            this.moveMode = this.dom.attr('data-move');
            this.bind();
        },
        bind:function(){
            var that = this;
            this.dom.on('click',function(event){
                //判断运动形式
                if(that.moveMode == 'pull_top'){ //从上往下拉
                    that.topMove();
                }else if(that.moveMode == 'pull_right'){  //从右往左
                    that.rightMove();
                }else if(that.moveMode == 'pull_bottom'){  //从下往上
                    that.bottomMove();
                }
                //event.stopPropagation();
            });
        },
        show:function(){
            this.popupDom.show();
        },
        hide:function(){

            this.popupDom.hide();
        },
        topMove:function(){
            var that = this;
            this.show();
            this.maskBox.on('click',function(){
                that.popupDom.hide();
                $('body').css({
                    height:'auto',
                    overflow:'auto'
                })
            })
            this.bodyFun();
        },
        rightMove:function(){
            var that = this;
            this.popupContent = this.popupDom.find('.popup_content');
            this.popupWidth = this.popupContent.width();
            this.winWidth = $(window).width();
            this.popupDom.show();
            setTimeout(function(){
                that.popupContent.css({
                    left:that.winWidth - that.popupWidth
                })
            },10);
            this.bodyFun();
            this.maskBox.on('click',function(){
                that.popupDom.hide();
                that.popupContent.css({
                    left:100 + '%'
                });
                $('body').css({
                    height:'auto',
                    overflow:'auto'
                })
            })
        },
        bottomMove:function(){

        },
        bodyFun:function(){
            $('body').css({
                height:100 + '%',
                overflow:'hidden'
            })
        }
    };

    return {
        init:init
    }
})();
module.exports = elementPopup;