function Timego(time) {
  var InterValObj; //timer变量，控制时间
  var count = time; //间隔函数，1秒执行
  var curCount;//当前剩余秒数
  var record_btn = $("#yzagain");
  function sendMessage() {
    curCount = count;
    //设置button效果，开始计时
    record_btn.attr("disabled", true);
    record_btn.addClass('active');
    record_btn.css({cursor: "default", color: "#666"});
    record_btn.html("重发(" + count + ")秒");
    InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
  }
  //timer处理函数
  function SetRemainTime() {
    if (curCount == 0) {
      window.clearInterval(InterValObj);//停止计时器
      record_btn.removeAttr("style");
      record_btn.removeClass('active');
      record_btn.html("点击重发");
      record_btn.removeAttr("disabled");//启用按钮
    }
    else {
      curCount--;
      record_btn.html("重发(" + curCount + ")秒");
      document.cookie = "lastTime=" + curCount;
    }
  }
  sendMessage();
}

var geetest = function(url,num,phoneVal,data,time){
  var hander = function(captchaObj) {
    captchaObj.onReady(function(){
      captchaObj.verify();
    }).onSuccess(function(){
      var vaildate = captchaObj.getValidate();
      if (!vaildate) {
        alert('请先完成验证');
        return;
      }
      $.ajax({
        url:url,
        async: false,
        data:{
          phone:phoneVal,
          type:num,
          geetest_challenge:vaildate.geetest_challenge,
          geetest_validate:vaildate.geetest_validate,
          geetest_seccode:vaildate.geetest_seccode
        },
        type: 'post',
        dataType: 'json',
        success:function(data){
          if(data.status){
            mui.toast('短信发送成功,有效期1分钟');
            $('body').css({
              height:'auto'
            });
            Timego(time);
          }else{
            mui.alert(data.msg);
          }
        }
      })

    });
  };
  var o = JSON.parse(data.json);
  initGeetest({
    gt:o.gt,
    challenge:o.challenge,
    offline:!o.success,
    new_captcha:o.new_captcha,
    product:'bind',
    width:'300px'
  },hander);
};