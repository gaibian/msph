import BScroll from 'better-scroll';  //导入移动端滚动框架

const mCarouselScale = (function(){
    let _queue = [];
    class carouselScaleFun{
        constructor(dom){
            this.dom = dom;
            this.ul = this.dom.children[0]; //获取到第一个子元素ul
            this.li = this.ul.querySelectorAll('li');
            this.liWidth = this.li[0].clientWidth + 2;
            this.liLength = this.li.length;
            this.spanBox = this.dom.querySelector('.indicator');
            this.loop = true;  //是否开启无缝轮播
            this.autoPlay = true;  //是否开启轮播功能
            this.interval = 2000;  //轮播的间隔时间
            this.liMarginRight = Math.ceil(this.getStyle(this.li[0],'marginRight').replace('px',''));
            this.pageIndex = 0;
            this.opts = {
                scrollX:true,
                scrollY:false,
                momentum:false,  //根据速度 产生的惯性挂动
                snap:{
                    loop:this.loop,
                    threshold:0.3,
                    speed:400,
                    stepX:this.liWidth + parseInt(this.liMarginRight),
                },
                click:true
            };
            this.init();
        }
        init(){
            if (!this.dom) {
                console.warn('can not resolve the wrapper dom');
            }
            this.scroller = this.dom.children[0];
            if (!this.ul) {
                console.warn('the wrapper need at least one child element to be scroller');
            }
            this.li[0].className = 'active_li';
            this.ul.style.width = ((parseInt(this.liWidth) + parseInt(this.liMarginRight)) * (this.liLength + 2)) + 'px';

            setTimeout(()=>{
                this.scroll = new BScroll(this.dom,this.opts);
                this.bind();
            });
            let li = this.ul.querySelectorAll('li');
            li[li.length - 1].className = '';
        }
        bind(){

            this.scroll.on('scrollStart',()=>{
                let pageIndex = this.scroll.getCurrentPage().pageX;
                if(this.scroll.movingDirectionX == -1){   //代表往左滑
                    this.pageIndex --;
                    if(this.pageIndex < 0){
                        this.pageIndex = this.liLength - 1;
                    }
                    for(let i=0;i<this.li.length;i++){
                        this.li[i].className = this.li[i].className.replace('active_li','');
                    }
                    this.li[this.pageIndex].className = 'active_li';
                }else if(this.scroll.movingDirectionX == 1){  //代表往右滑
                    for(let i=0;i<this.li.length;i++){
                        this.li[i].className = this.li[i].className.replace('active_li','');
                    }
                    if(pageIndex >= this.liLength){
                        pageIndex = 0;
                    }else if(pageIndex < 0){
                        pageIndex = this.liLength-1;
                    }
                    //console.log(pageIndex);
                    this.pageIndex = pageIndex;
                    this.li[pageIndex].className = 'active_li';
                }
            });
            this.scroll.on('scrollEnd',()=>{

            })
            window.addEventListener('resize',()=>{
                if(!this.scroll){
                    return
                }
                this.scroll.refresh();
            });
        }
        getStyle(obj,attr){
            if(obj.currentStyle){
                return obj.currentStyle[attr];
            }
            else{
                return document.defaultView.getComputedStyle(obj,null)[attr];
            }
        }
    }
    return (el)=>{
        //判断传进来的el是dom对象还是字符串
        let wrapper = typeof el === 'string' ? document.querySelectorAll(el) : el;
        for(let i=0;i<wrapper.length;i++){
            let $this = wrapper[i];
            if($this.className.indexOf('init') === -1){
                _queue.push(new carouselScaleFun($this));
                $this.className += ' init';
            }else{
                return false;
            }
        }
    };
})();

module.exports = mCarouselScale;