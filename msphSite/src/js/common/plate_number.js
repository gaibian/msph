
const plateNumber = (function(){
    let one = dom =>{
        return new init(dom);
    };

    function init(el){
        this.selectors = document.getElementsByClassName(el)[0];
        this.closeBtn = this.selectors.getElementsByClassName('icon')[0];
        this.provinceDom = this.selectors.getElementsByClassName('creat_popup_3')[0];
        this.provinceDomA = this.provinceDom.getElementsByTagName('a');
        this.enDom = this.selectors.getElementsByClassName('creat_popup_9')[0];
        this.enDomA = this.enDom.getElementsByTagName('a');
        this.plateInputVal = document.getElementById('platePrefix');
        this.valueDom = document.getElementById('plateNoPrefix');
        this.bind();
    };

    init.prototype.bind = function(){
        var that = this;
        for(let i=0;i<this.provinceDomA.length;i++){
            this.provinceDomA[i].onclick = function(event){
                for(let i=0;i<that.provinceDomA.length;i++){
                    that.provinceDomA[i].classList.remove('active');
                }
                this.classList.add('active');
                for(let i=0;i<that.enDomA.length;i++){
                    that.enDomA[i].classList.remove('active');
                }
            }
        };

        for(let i=0;i<this.enDomA.length;i++){
            this.enDomA[i].onclick = function(event){
                for(let i=0;i<that.enDomA.length;i++){
                    that.enDomA[i].classList.remove('active');
                };
                this.classList.add('active');
                that.dataShow();
            };
        };
        this.closeBtn.onclick = function(event){
            that.selectors.style.display = 'none';
        }
    };

    init.prototype.dataShow = function(){
        var provinceActive = this.provinceDom.getElementsByClassName('active')[0];
        var enActive = this.enDom.getElementsByClassName('active')[0];
        this.value = provinceActive.innerText + enActive.innerText;
        this.valueDom.innerText = this.value;
        this.plateInputVal.value = this.value;
        this.selectors.style.display = 'none';
    };

    return {
        one:one
    }

})();

module.exports = plateNumber;

