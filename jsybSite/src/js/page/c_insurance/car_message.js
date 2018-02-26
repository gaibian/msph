require('../../../css/page/c_insurance/car_message.less');

const template = require('../../template/template.js');
template.init([{
    el:'body',
    position:'inside',
    template:'page_title',
    parament:[{
        title:'补充车辆信息'
    }]
}]);

/*图片懒加载*/
const Exposure = require("../../component/lazy.js");
let $lazy = document.getElementsByClassName('lazy');
Exposure.one($lazy,function(){
    let srcValue = this.getAttribute('data-src');
    this.setAttribute('src',srcValue);
});

//window.verify = require('../../component/verify.js');

/*verify.init([{
    el:'.form',
    success:function(){
        console.log('表单所有验证成功')
    },
    error:function(){
        console.log('表单所有验证失败')
    }
}]);*/

