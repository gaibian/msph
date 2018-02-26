require('../../../css/page/channel/search.less');

$(()=>{
  "use strict";
  const FastClick = require('fastclick');
  FastClick.attach(document.body);
  const cleanInput = require('../../component/input_clean');
  cleanInput('.search_input');

  /*存入cookie*/
  let getCookie = function(name){
    let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
      return unescape(arr[2]);
    }else{
      return null;
    }
  };
  /*数组去重*/
  Array.prototype.unique1 = function(){
    var res = [this[0]];
    for(var i = 1; i < this.length; i++){
      var repeat = false;
      for(var j = 0; j < res.length; j++){
        if(this[i] == res[j]){
          repeat = true;
          break;
        }
      }
      if(!repeat){
        res.push(this[i]);
      }
    }
    return res;
  }
  let inputBox = $('.search_input');
  let searchBtn = $('.search_text');
  let input = inputBox.find('input');
  let resultDom = $('.search_result_box');
  let resultCloseBtn = resultDom.find('.close_btn');
  let resultUl = $('.result_ul');
  let searchVal = getCookie("search");
  let cookieValFun = function(){
    let val = input.val();
    if($.trim(val) != ''){
      searchVal = searchVal + ',' + val;
      let cookieArr = searchVal.split(',');
      let newArr = cookieArr.unique1();
      searchVal = newArr.join(',');
      document.cookie ="search=" + searchVal;
    }
  };
  searchBtn.on('click',()=>{
    cookieValFun();
  });
  resultCloseBtn.on('click',()=>{
    searchVal = '';
    document.cookie = "search=" + searchVal;
    resultUl.empty();
  });

  if(searchVal){
    searchVal = getCookie("search");
    let inputVal = getCookie("search");
    let valArr = inputVal.split(',');
    valArr.shift();
    if(valArr.length < 10){
      for(let i=0;i<valArr.length;i++){
        let creatLi = $('<li class="result_li">'+ valArr[i] +'</li>');
        resultUl.append(creatLi);
      }
    }else{
      for(let i=0;i<10;i++){
        let creatLi = $('<li class="result_li">'+ valArr[i] +'</li>');
        resultUl.append(creatLi);
      }
    }
    let resultLi = resultUl.find('.result_li');
    resultLi.each((index)=>{
      let $this =resultLi.eq(index);
      $this.on('click',function(){
        let text = $this.text();
        input.val(text);
      })
    })
  }else{
    searchVal = '';
  }
});