
/*内容模块标题渲染*/
require("../../css/common/content_title.less");
const contentTitle = require('../../view/common/content_title.art');
const titleDom = $('.content_title_box');

titleDom.each(function(index){
    var dataTitle = $(this).attr('data-title');
    var dataMore = $(this).attr('data-more');
    $(this).html(contentTitle(
        {
            title:dataTitle,
            dataMore:dataMore
        }
    ));
});