/*
	html公共模板
 */
/*
	注意事项
	1.如果是把模板插入在body里的话,就不传el属性
	2.如果是把模板插入在元素后面的话,就传入前面元素的class 或是 id tag
	3.html模板的名字和less模板的名字保持一样
 */
const templateJs = (function(){
	let _queue = [];
	let init = (opt)=>{  //实例化内容
		for(let i=0;i<opt.length;i++){
				_queue.push(new renderFun(opt[i]))
		}
	}
	class renderFun{
		constructor(o){
			this.o = o;
			this.init();
		}
		init(){
			var that = this;
			let {el,template,position,parament} = this.o;
			this.el = $(el);
			this.template = template;
			this.position = position;
			this.parament = parament;
			//let template1 = require('template-web');
			require(`../../css/common/template/${this.template}.less`);
			that.tem = require(`../../view/common/template/${this.template}.art`);
		  //that.tem.config("escape",false);
		  console.log(that.tem);
			that.newNode = $('<div></div>');
			if(that.parament == undefined){
				this.staticFun()
			}else{
				this.dataFun()
			}
		}
		staticFun(){
			this.newNode.html(this.tem());
			this.domFun();
		}

		dataFun(){
			let that = this;
			this.el.each(function(index){
				let $this = $(this);
				let newDom = $('<div></div>');
				newDom.html(that.tem(that.parament[index]));
				if(that.position == 'after'){
					$this.after(newDom);
				}else if(that.position == 'before'){
					$this.before(newDom);
				}else if(that.position == 'inside'){
					$this.prepend(newDom);
				}
			})
		}

		domFun(){
			if(this.position == 'after'){
				this.el.after(this.newNode);
			}else if(this.position == 'before'){
				this.el.before(this.newNode);
			}else if(this.position == 'inside'){
				this.el.prepend(this.newNode);
			}
		}
	}
	return {
		init:init
	};

})();

module.exports = templateJs;