/*
*dom结构
* <div class='popup'>
*   <div class='mask_box'></div>
*   <div class='popup_content'>
*       <div class='close_btn'></div>
*   </div>
* </div>
* 弹窗组件
* 需要给popup_content类添加样式
*middle方式  不需要添加样式
*right方式 需要添加 right_move 样式
* bottom方式 需要添加 bottom_move 样式
*
* 调用方式 elementPopup.init([{
*   el:'btn', //按钮的类名
*   popup:'popup',  //弹窗的类名
*   move:'middle'  //弹窗的运动形式 middle / right / bottom
* }])
*/
const elementPopup = (()=>{
    let _queue = [];
    let init = (opt)=>{
        for(let i=0;i<opt.length;i++){
            let el = opt[i].el;
            let popup = opt[i].popup;
            _queue.push(new elClass(opt[i]));
        };
    };

    class elClass{
        constructor(opt){
            this.opt = opt;
            this.el = this.classSelector(this.opt.el);
            this.popup = this.classSelector(this.opt.popup);
            this.move = this.opt.move;
            this.elArr = [];
            this.init();
        }

        init(){
            let that = this;
            this.el.each((index)=>{
                let $el = that.el.eq(index);
                let $popup = that.popup.eq(index);
                if($el.hasClass('init')){return}
                that.elArr.push(new clickPopup($el,$popup,that.move));
                $el.addClass('init');
            })
        }

        classSelector(dom){
            return $('.' + dom);
        }
    }

    class elementFun{  //父类 定义属性和方法
        constructor(el,popup,move){
            this.elDom = el;
            this.popupDom = popup;
            this.moveShape = move;
            this.closeBtn = this.popupDom.find('.close_btn');
            this.maskBox = this.popupDom.find('.mask_box');
            this.bodyDom = $('body');
        }

        moveShapeFun($el){  //判断是弹窗的形式
            if(this.moveShape == 'middle'){
                return new middleFun(this.elDom,this.popupDom,this.moveShape,$el);
            }else if(this.moveShape == 'right'){
                return new rightFun(this.elDom,this.popupDom,this.moveShape,$el);
            }else if(this.moveShape == 'bottom'){
                return new bottomFun(this.elDom,this.popupDom,this.moveShape,$el);
            }
        }

        bodyCss(flag){
            if(flag){
                this.bodyDom.css({
                    overflow:'hidden',
                    height:'100%'
                })
            }else{
                this.bodyDom.css({
                    overflow:'auto',
                    height:'auto'
                })
            }
            
        }
    }

    class clickPopup extends elementFun{
        constructor(el,popup,move){
            super(el,popup,move);
            this.bind();
        }
        bind(){
            let that = this;
            this.elDom.on('click',(index)=>{
                let $this = that.elDom.eq(index);
                super.moveShapeFun($this);
            })
        }
    }

    //中间直接弹窗
    class middleFun extends elementFun{
            constructor(el,popup,move,$el){
                super(el,popup,move);
                this.$el = $el;
                this.init();
            };
            init(){
                let that = this;
                if(this.$el.prevObject.hasClass('classActive')){
                    this.$el.prevObject.removeClass('classActive');
                    this.hide();
                }else{
                    this.$el.prevObject.addClass('classActive');
                    this.show();
                }
                this.maskBox.on('click',()=>{
                    this.hide();
                });
                this.closeBtn.on('click',()=>{
                    this.hide();
                });

            };
            show(){
                super.bodyCss(true);
                this.popupDom.show();
            };
            hide(){
                super.bodyCss(false);
                this.$el.prevObject.removeClass('classActive');
                this.popupDom.hide();
            };
    };

    //从右侧滑出
    class rightFun extends elementFun{
        constructor(el,popup,move,$el){
            super(el,popup,move);
            this.$el = $el;
            this.popupContent = this.popupDom.find('.popup_content');
            this.contentWidth = this.popupContent.outerWidth(true);
            this.winWidth = $(window).width();
            this.init();
        };
        init(){
            let that = this;
            this.show();
            this.maskBox.on('click',()=>{
                that.hide();
            });
            this.closeBtn.on('click',()=>{
                that.hide();
            })
        };
        show(){
            let that = this;
            super.bodyCss(true);
            this.popupDom.show();
            setTimeout(function(){
                that.popupContent.addClass('right_move');
            },1);
        };
        hide(){
            super.bodyCss(false);
            this.popupDom.hide();
            this.popupContent.removeClass('right_move');
        }

    };

    //从底部滑出
    class bottomFun extends elementFun{
        constructor(el,popup,move,$el){
            super(el,popup,move);
            this.$el = $el;
            this.popupContent = this.popupDom.find('.popup_content');
            this.contentHeight = this.popupContent.outerHeight(true);
            //this.winWidth = $(window).width();
            this.init();
        }
        init(){
            this.show();
            this.maskBox.on('click',()=>{
                this.hide();
            });
            this.closeBtn.on('click',()=>{
                this.hide();
            });
        }
        show(){
            let that = this;
            super.bodyCss(true);
            this.popupDom.show();
            setTimeout(function(){
                that.popupContent.addClass('bottom_move');
            },1);
        }
        hide(){
            super.bodyCss(false);
            this.popupDom.hide();
            this.popupContent.removeClass('bottom_move');
        }
    };

    return {init:init};

})();

module.exports = elementPopup;