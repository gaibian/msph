require("../../../css/page/c_insurance/car_insurance.less");
import BScroll from 'better-scroll';  //导入移动端滚动框架
$(()=>{
  // const FastClick = require('fastclick');
  // FastClick.attach('document.body');
  $('.btm_contact_box').hide();

  let elementPopup = require('../../component/element_popup.js');
  let opt = [{
      el:'popup_btn',
      popup:'plate_popup',
      move:'middle'
  }];

elementPopup.init(opt);

let plateNumber = require('../../common/plate_number.js');

setTimeout(function(){
    plateNumber.one('plate_popup');
},100);


const  calcHeight = ()=>{
  let winHeight = $(window).height();
  let btmNavHeight = $('.nav_bottom_box').height();
  $('.main').css({
    height:winHeight - btmNavHeight
  });
  $('body,html').css({
    height:100+'%',
    overflow:'hidden'
  })
};
calcHeight();

let scrollB = new BScroll('.main',{
  scrollX:false,
  scrollY:true,
  click:true,
});

  let input = $('#plateNo');
  //input.hide();
  // let carRight1 = $('.car_right');
  // carRight.on('click',()=>{
  //
  // });
  input.on('focus',()=>{
    calcHeight();
    $(window).scroll(()=>{
      let top = $(document).scrollTop();
      setTimeout(()=>{
        if(top < 20){
          //debugger;
          scrollB.scrollTo(0,-150,500);
        }else{
          return false;
        }
      },100);
    })
  });
  input.on('blur',()=>{
    calcHeight();
    $(window).unbind('scroll');
  });
  scrollB.on('beforeScrollStart',()=>{
    input.blur();
  });

let gallery = mui('.mui-slider');
gallery.slider({
    interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
});

let cityPicker = new mui.PopPicker({
    layer: 2
});
cityPicker.setData(cityData);

/*订单弹窗*/
let carOrderPopup = $('.car_order_popup_box');
let carOrderCloseBtn = carOrderPopup.find('.close_btn');
carOrderCloseBtn.on('click',function(){
    carOrderPopup.hide();
});

/*设置底部滑动元素的总宽度*/
let scrollInit = {
    init:function(dom){
        this.dom = $(dom);
        this.ul = this.dom.find('ul');
        this.li = this.ul.find('li');
        this.liWidth = this.li.width();
        this.ul.width(this.li.length * this.liWidth);
    }
};
scrollInit.init('.scroll_box');

mui('.mui-scroll-wrapper').scroll({
    scrollY: false, //是否竖向滚动
    scrollX: true, //是否横向滚动
    startX: 0, //初始化时滚动至x
    startY: 0, //初始化时滚动至y
    indicators: false, //是否显示滚动条
    deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
    bounce: true //是否启用回弹
});

let cityCodeList = citylist;
let cityResult = document.getElementById('cityResult');
let choiceBtn = $('.choice_btn');
choiceBtn.on('click',function(){
    cityPicker.show(function(items){
        var k = '3' + items[1].value;
        var lcode = '';
        $.each(cityCodeList, function(key, value) {
            if(key == k) {
                lcode = value['lcode'];
            }
        });
        var prov_val = items[0].value;
        var extra_provs = {'110000':"京",'120000':"津",'310000':"沪",'500000':"渝"};
        if(extra_provs[prov_val]){
            lcode = extra_provs[prov_val];
        }
        var choose_prefix = lcode.split("");
        $('#plateNoPrefix').removeClass('new-car-popup').html(lcode); // 获取车牌地区前缀
        $('#plateNo').removeClass('new-car-plateno');
        cityResult.innerText = items[1].text;
        $("#addressCity").val(items[1].text);// 赋值车辆地区代码

        $("#platePrefix").val(lcode);
        $("#citycode").val(k);
    });
});

/*车牌转大写*/
// const carPlate = $('.car_plate');
// const carRight = carPlate.find('.car_right');
// const carInput = carRight.find('input');
// carInput.on('blur',function(){
//    let val = $(this).val();
//     $(this).val(val.toUpperCase())
// });

});