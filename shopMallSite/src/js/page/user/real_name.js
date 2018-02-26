require('../../../css/page/user/real_name.less');


var uploadImgBox = $('.upload_img_box');
var uploadIng = uploadImgBox.find('.uploading');


uploadIng.each(function(){
    var $this = $(this);
    var xsz_file = $this.find('.xsz_file');
    var xsz_img = $this.find('.xsz_img');
    $this.find('.xsz_upload').on('click',function(){
        xsz_file.trigger("click");
    });
    xsz_file.on("change",function(){
        "use strict";
        console.log('正在上传');
        var UPLOAD_MODULE_COROLLER_METHOD = '{:U("upload")}';
        var insure_img_upload = new mui.PicUpload({"MODULE_COROLLER_METHOD":UPLOAD_MODULE_COROLLER_METHOD, "FILE_ID":xsz_file, "IMG_ID":xsz_img,
            'callback':function(data){
                console.log('上传完毕');
                //loadClose();
                if(data.status){
                    xsz_file.next("input").val(data.msg);
                    //xsz_upload.removeClass('cl');
                }
            }
        });
    });
});

$('#keep_btn').on("click",function(){
    "use strict";
    console.log('正在提交');
    mui.ajax({
        url:'',
        async:true,
        data:$("#form").serialize(),
        type:'post',
        dataType:'json',
        success:function(data){
            console.log('提交成功');
        },
        error:function(){
            console.log('网络错误');
        }
    })
});