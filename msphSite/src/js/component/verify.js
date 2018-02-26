/*前端验证*/
require('../../css/common/template/error_popup.less');
require('../../css/common/template/success_popup.less');
const formVail = (()=>{
    var _queue = [];
    let init = (opt)=>{
        for(let i=0;i<opt.length;i++){
            let o = opt[i];
            _queue.push(new bgBind(o));
        }
    };

    class validation{
        constructor(obj){
            this.obj = obj;
            //验证规则
            this.rules = {
                'empty':{
                    "rule":[/\S/],
                    "message":"请输入信息",
                    "error":"*不能为空",
                },
                'card':{
                    "rule":[/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/],
                    "message":"请输入身份证",
                    "error":"*请输入正确的身份证号",
                },
                'name':{
                    "rule":[/^(?=([\u4e00-\u9fa5].*){2})/],
                    "message":"请输入姓名",
                    "error":"*请输入您的姓名",
                },
                'number':{
                    "rule":["^[0-9]*[1-9][0-9]*$"],
                    "message":"请输入数字",
                    "error":"*请输入数字格式",
                },
                'Address':{
                    "rule":[/^(?=([\u4e00-\u9fa5].*){9})/],
                    "message":"请输入地址信息",
                    "error":"*请输入正确的地址信息",
                },
                'Date':{
                    "rule":[/^(\d{4})-(\d{2})-(\d{2})$/],
                    "message":"请输入身份证到期日期",
                    "error":"*请输入正确的身份证到期日期",
                },
                'phone':{
                    "rule":[/^[1][345678]\d{9}$/],
                    "message":"请输入手机号码",
                    "error":"*请输入正确的手机号码"
                },
                'Email':{
                    "rule":[/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/],
                    "message":"请输入邮箱地址",
                    "error":"*请输入正确的邮箱地址"
                }
            };
        }
        init(){  //初始化
            this.form = $(this.obj.el);
            this.input = this.form.find('input[data-toggle]');
            this.sendBtn = $('.' + this.form.attr('data-btn'));
            this.flagArr = [];
            this.flag = false;
        }
    }
    class bgBind extends validation{
        constructor(obj){
            super(obj);
            super.init();
            this.init();
            this.bind();
            
        }
        init(){
            let that = this;
            this.input.each((index)=>{
                let $this = that.input.eq(index);
                $this.attr('check',false);
                $this.on('blur',()=>{
                    let type = $this.attr('checkType');
                        if(type.indexOf('Date') != -1){
                            type = 'Date';
                        }else if(type.indexOf('Address') != -1){
                            type = 'Address';
                        }else if(type.indexOf('Email') != -1){
                            type = 'Email';
                        }
                        that.checkIsOK($this,type,index);
                });
            });
        };

        bind(){
            let that = this;
            this.sendBtn.on('click',function(){
                that.flagArr = [];
                that.input.each((index)=>{
                    let $this = that.input.eq(index);

                    let type = $this.attr('checkType');
                    let o = {
                        check:$this.attr('check'),
                        type:type
                    };
                    that.flagArr.push(o);
                    if($this.attr('check') == 'true'){
                        that.success();
                    }else{
                        let obj = that.rules[type];

                    };
                });

                for(let i=0;i<that.flagArr.length;i++){

                    if(that.flagArr[i]['check'] == 'false'){
                        let errorVal = that.rules[that.flagArr[i]['type']]['error'];
                        that.flag = false;
                        that.error(errorVal);
                        break;
                    }else{
                        that.flag = true;
                    };

                };

                if(that.flag){
                    if($(this).hasClass('formSuccess')){
                        //alert('请不要重复提交');
                    }else{
                        $(this).addClass('formSuccess');
                        var successDom = $('<div class="success_popup"><div class="success_content"><div class="img"></div><p class="text">'+ '提交成功' +'</p></div><div class="mask_box"></div></div>');
                        $('body').append(successDom);
                        
                        that.obj.success();
                        //alert('申请成功,数据正在提交中...');
                    }
                    
                }else{
                    $(this).removeClass('formSuccess');
                }
            });
        };

        checkIsOK(This,type,index){ //对每个input进行验证
            var text = This.val();

            var obj = this.rules[type];
            if(typeof obj['rule'] == 'function'){

            }else{
                for(let i=0;i<obj.rule.length;i++){
                    var rex = new RegExp(obj.rule[i]);
                    if(rex.test(text)){
                        This.attr('data-val',text);
                        This.attr('check',true);
                    }else{
                        This.attr('check',false);
                    };
                };
            };
        };

        //验证出错
        error(message){
            var that = this;
            var errorDom = $('<div class="error_popup"><div class="error_content"><div class="img"></div><p class="text">'+ message +'</p></div><div class="mask_box"></div></div>');
            $('body').append(errorDom);
            this.errorPopup = $('.error_popup');
            //this.errorCloseBtn = this.errorPopup.find('.error_close_btn');
            /*this.errorCloseBtn.on('click',function(){
                that.errorPopup.hide();
            })*/
            setTimeout(function(){
                that.errorPopup.hide();
            },500)
            //This.val('');
            //This.attr('placeholder',message);

        }
        //验证成功
        success(){

        }

    }

    return {
        init:init
    }
})();



/*var formVail = (()=>{
	var _queue = [];

	var init = (dom)=>{
		let $el = $(dom);
		$el.each((index)=>{
			let $this = $el.eq(index);
			if($this.hasClass('init')){
				return;
			};
			_queue.push(new bgBind($this));
			$this.addClass('init');
		});
	};

	class validation{
		constructor(dom){
			this.rules = {  //验证规则
				'number':{
					"rule":["^[0-9]*[1-9][0-9]*$"],
					"message":"请输入数字",
					"error":"*请输入数字",
				},
				'phone':{
					"rule":[/^[1][345678]\d{9}$/],
					"message":"请输入手机号码",
					"error":"*请输入正确的手机号码"
				}
			};
			this.form = $(dom);
			this.input = this.form.find('input[data-toggle]');
			this.sendBtn = this.form.find('.sendBtn');
			this.flagArr = [];
			this.flag = false;
		};

		init(){   //对验证进行初始化
			let that = this;
			this.input.each((index)=>{
				let $this = that.input.eq(index);
				var obj = that.rules[$this.attr('checkType')];
				var val = obj['message'];
				$this.attr('placeholder',val);
			});
		};

		//验证出错
		error(){

		};

		//验证成功
		success(dom){
			console.log('xiaojun12');
		};
	};

	class bgBind extends validation{
		constructor(dom){
			super(dom);
			super.init();
			this.init();
			this.bind();
		};

		static success(){
			console.log('返回成功');
		};

		init(){
			var that = this;
			this.input.each((index)=>{
				let $this = that.input.eq(index);
				$this.on('blur',()=>{
					var type = $this.attr('checkType');
					that.checkIsOK($this,type,index);
				});
			});
		};

		bind(){
			var that = this;
			this.sendBtn.on('click',function(){
				that.flagArr = [];
				that.input.each((index)=>{
					let $this = that.input.eq(index);
					that.flagArr.push($this.attr('check'));
					let type = $this.attr('checkType');
					if($this.attr('check') == 'true'){
						//super.success();
					}else{
						var obj = that.rules[type];
						$this.focus();
						//super.error($this,obj["error"]);
					};
				});
				for(let i=0;i<that.flagArr.length;i++){
					if(that.flagArr[i] == 'false'){
						that.flag = false;
						break;
					}else{
						that.flag = true;
					};
				};

				if(that.flag){
					that.passSuccess();
				};
			});
		};

		passSuccess(){
			console.log('全部验证通过')
		}

		checkIsOK(This,type,index){ //对每个input进行验证
			var text = This.val();
			var obj = this.rules[type];
			if(typeof obj['rule'] == 'function'){
				console.log('验证的是一个函数')
			}else{
				for(let i=0;i<obj.rule.length;i++){
					var rex = new RegExp(obj.rule[i]);
					if(rex.test(text)){
						This.attr('data-val',text);
						This.attr('check',true);
					}else{
						This.attr('check',false);
					};
				};
			};
		};
	};
	return {
		init:init,
	};

})();*/

module.exports = formVail;