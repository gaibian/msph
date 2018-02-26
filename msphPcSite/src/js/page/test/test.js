require('../../../css/page/test/test.less');

const navList = (()=>{
  "use strict";
  let _queue = [];
  class navListFun{
    constructor(dom){
      this.dom = dom;
      this.label = this.dom.find('.label');
      this.ulBox = this.dom.find('.ul_box');
      this.ul = this.dom.find('.ul');
      this.showBtn = this.dom.find('.show_btn');
      this.ulHeight = this.ul.height();
      this.ulBoxHeight = this.ulBox.height();
      this.init();
    }
    init(){
      this.row = this.ulHeight / this.ulBoxHeight;
      this.row > 1 ? this.showBtn.show() : this.showBtn.hide();
      this.bind();
    }
    bind(){
      this.showBtn.on('click',()=>{
        if(this.showBtn.hasClass('active')){
          this.closeFun();
        }else{
          this.openFun();
        }
      });
    }
    closeFun(){
      this.showBtn.text('展开');
      this.label.css({
        height:this.ulBoxHeight * this.row + 'px',
      });
      this.ulBox.css({
        height:this.ulBoxHeight + 'px'
      });
      this.showBtn.removeClass('active');
    }
    openFun(){
      this.showBtn.text('收起');
      this.label.css({
        height:this.ulBoxHeight * (this.row + 1) + 'px',
      });
      this.ulBox.css({
        height:this.ulBoxHeight * this.row + 'px'
      });
      this.showBtn.addClass('active');
    }
  }
  return (el)=>{
    let wrapper = typeof el === 'string' ? $(el) : el;
    wrapper.each((index)=>{
      let $this = wrapper.eq(index);
      if($this.hasClass('init')) return false;
      _queue.push(new navListFun($this));
      $this.addClass('init');
    });
  }
})();

navList('.js_nav_list');

$(()=>{
  "use strict";
  var test = document.getElementById('test');
  test.addEventListener('change', function() {
    var t_files = this.files[0];
    console.log(t_files);
    if(window.FileReader){
      let reader = new FileReader();
      reader.readAsDataURL(t_files);
      reader.onloadend = function(e){
        console.log(e.target.result);
      }
    }
    //var str = '';
    // for (var i = 0, len = t_files.length; i < len; i++) {
    //   console.log(t_files[i]);
    //   str += '<a href="javascript:void(0)">' + t_files[i].name + '</a>';
    // };
    //document.getElementById('content').innerHTML = str;
  }, false);
});

