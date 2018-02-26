/*
* <div class="input_box input_clean">
*   <input type="text">
*       <i class="input_clean_btn"></i>
*</div>
* */

const inputClean = (()=>{
    let _queue = [];
    class inputFun{
        constructor(dom){
            this.dom = dom;
            console.log(this.dom);
            this.cleanBtn = this.dom.find('.input_clean_btn');
            this.input = this.dom.find('input');
            this.inputVal = this.input.val();
            this.init();
        }
        init(){
            this.empty();
            this.input.on('keyup',()=>{
                this.inputVal = this.input.val();
                this.empty();
            });
            this.bind();
        }
        empty(){
            if(this.inputVal == ''){
                this.hide();
            }else{
                this.show();
            }
        }
        hide(){
            this.cleanBtn.css({
                opacity:0,
                visibility:'hidden'
            })
        }
        show(){
            this.cleanBtn.css({
                opacity:1,
                visibility:'visible'
            })
        }
        bind(){
            this.cleanBtn.on('click',()=>{
                this.input.val('');
            });
        }
    }

    return (el)=>{
        let wrapper = typeof el === 'string' ? $(el) : el;
        wrapper.each((index)=>{
            let $this = wrapper.eq(index);
            if($this.hasClass('init')) return false;
            _queue.push(new inputFun($this));
            $this.addClass('init');
        });
    }
})();

module.exports = inputClean;
