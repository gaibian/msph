/**
 * 图片上传插件, 需要exif.js支持(处理图片角度)
 * varstion 1.0.1
 * by Houfeng
 */

(function($, document) {
	var PicUpload = $.PicUpload = $.Class.extend({
		//构造函数
		init: function(options) {
			var self = this;
            if (!self.isCanvasSupported()) {
                mui.alert("canvas不支持");
            }
			self.options = options || {"MODULE_COROLLER_METHOD":"", "FILE_ID":"upload_file", "IMG_ID":"upload_img"};
            if(typeof self.options.FILE_ID=='object'){
                self.file = self.options.FILE_ID.get(0);
            }else{
                self.file = document.getElementById(self.options.FILE_ID);
            }
            if(typeof self.options.IMG_ID=='object'){
                self.img = self.options.IMG_ID.get(0);
            }else{
                self.img = document.getElementById(self.options.IMG_ID);
            }
			self.callback = self.options.callback ? self.options.callback : function(){};
            self.progress = self.options.progress ? self.options.progress : function(){};
            self.failed = self.options.failed ? self.options.failed : function(){};
			self.httpurl = self.options.MODULE_COROLLER_METHOD;

			var fr = new FileReader();
            if (fr.readAsDataURL) {
                fr.readAsDataURL(self.file.files[0]);
            }
            else if (fr.readAsDataurl) {
                fr.readAsDataurl(self.file.files[0]);
            }else{
                mui.alert("FileReader不支持");
            }
			fr.onload = function(evt){
				self.appendFile(evt);
			};
			fr.onerror = self.errorHandler;
		},
		isCanvasSupported : function(){
            var elem = document.createElement('canvas');
            return !!(elem.getContext && elem.getContext('2d'));
		},
		appendFile: function(evt){
			var self = this;
		  	var img = new Image();
		        img.src = evt.target.result;
	        img.onload = function () {
	        	var that = this;
	        	var Orientation = null;
				EXIF.getData(this, function() {
		            EXIF.getAllTags(this);
		            Orientation = EXIF.getTag(this, 'Orientation');
		            //生成比例 
		            var w = that.width,
		                h = that.height;
		                
					if(w>1000){
						scale = w / h;
						w = 1000 || w;  //宽度限制，等比缩小
						h = w / scale;
					}

		            //生成canvas
		            var canvas = document.createElement('canvas');
		            var ctx = canvas.getContext('2d');
		            canvas.width = w;
		            canvas.height = h;

	                if(Orientation != "" && Orientation != 1){
	                    switch (Orientation) {
                            case 3:
                                imgRotation = 180;
                                ctx.translate(w, h);
                                ctx.rotate(180 * Math.PI / 180);
                                break;
                            case 6:
                                imgRotation = 90;
                                canvas.height = w;
                                canvas.width = h;
                                ctx.translate(h, 0);
                                ctx.rotate(90 * Math.PI / 180);
                                break;
                            case 8:
                                imgRotation = 270;
                                canvas.height = w;
                                canvas.width = h;
                                ctx.translate(0, w);
                                ctx.rotate(270 * Math.PI / 180);
                                break;
                            default:
                                imgRotation = 0;
                                break;
	                    }
	                }
		            ctx.drawImage(that, 0, 0, w, h);
		            var base64 = canvas.toDataURL('image/jpeg');   //, 0.8 第二个参数表示图片质量，越低越模糊。
					self.img.src = base64;//这里丢到img 的 src 里面就能看到效果了
	                self.uploadFile(base64);
		      });
	    	}
		},
		uploadProgress: function(evt,progress){
			var self = this;
            if (evt.lengthComputable) {
                var completedPercent = evt.loaded / evt.total;
//                console.log("上传中,进度百分之"+completedPercent);
                self.progress(evt);
            }
		},
		uploadFile: function(data){
			var self = this;
			var fd = new FormData();
            fd.append('mypic', data);
            var xhr = new XMLHttpRequest();
            xhr.upload.addEventListener("progress", function(e){ self.uploadProgress(e,self.progress);}, false);
            xhr.addEventListener("load", function(e){ self.uploadComplete(e,self.callback);}, false);
            xhr.addEventListener("error", function(e){ self.uploadFailed(e,self.failed);}, false);
            xhr.open("POST", self.httpurl);
            xhr.send(fd);
		},
		uploadComplete: function(evt,callback) {
			var self = this;
            var json_rule = /^{.*}$/;
            if(json_rule.test(evt.target.responseText)){
                var data_res = eval("("+evt.target.responseText+")");
                self.callback(data_res);
//                if(data_res.state=='success' || data_res.status==1){
//                    self.callback(data_res);
//                }else{
//                	errmsg = data_res.msg ? data_res.msg : data_res.info;
//                    mui.toast(errmsg);
//                }
            }else{
                self.uploadFailed;
            }
        },
        errorHandler : function(evt) {
            switch (evt.target.error.code) {
                case evt.target.error.NOT_FOUND_ERR:
                    mui.alert('文件未找到!');
                    break;
                case evt.target.error.NOT_READABLE_ERR:
                    mui.alert('文件不可读');
                    break;
                case evt.target.error.ABORT_ERR:
                    break;
                default:
                    mui.alert('上传出错！');
            }
        },
        uploadFailed : function(evt,failed){
        	var self = this;
        	mui.alert("上传失败,请重新上传");
            self.failed(evt);
        }
	});
})(mui, document);