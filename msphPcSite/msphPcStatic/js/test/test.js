!function(e){function t(e){delete installedChunks[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=p.p+""+e+"."+m+".hot-update.js",t.appendChild(n)}function r(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=p.p+""+m+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}function o(e){var t=I[e];if(!t)return p;var n=function(n){return t.hot.active?(I[n]?I[n].parents.indexOf(e)<0&&I[n].parents.push(e):(O=[e],v=n),t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),O=[]),p(n)};for(var r in p)Object.prototype.hasOwnProperty.call(p,r)&&"e"!==r&&Object.defineProperty(n,r,function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(t){p[e]=t}}}(r));return n.e=function(e){function t(){P--,"prepare"===D&&(B[e]||d(e),0===P&&0===H&&f())}return"ready"===D&&c("prepare"),P++,p.e(e).then(t,function(e){throw t(),e})},n}function i(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:v!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:a,apply:l,status:function(e){if(!e)return D;j.push(e)},addStatusHandler:function(e){j.push(e)},removeStatusHandler:function(e){var t=j.indexOf(e);t>=0&&j.splice(t,1)},data:_[e]};return v=void 0,t}function c(e){D=e;for(var t=0;t<j.length;t++)j[t].call(null,e)}function u(e){return+e+""===e?+e:e}function a(e){if("idle"!==D)throw new Error("check() is only allowed in idle status");return b=e,c("check"),r(x).then(function(e){if(!e)return c("idle"),null;k={},B={},M=e.c,g=e.h,c("prepare");var t=new Promise(function(e,t){y={resolve:e,reject:t}});w={};return d(8),"prepare"===D&&0===P&&0===H&&f(),t})}function s(e,t){if(M[e]&&k[e]){k[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(w[n]=t[n]);0==--H&&0===P&&f()}}function d(e){M[e]?(k[e]=!0,H++,n(e)):B[e]=!0}function f(){c("ready");var e=y;if(y=null,e)if(b)Promise.resolve().then(function(){return l(b)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in w)Object.prototype.hasOwnProperty.call(w,n)&&t.push(u(n));e.resolve(t)}}function l(n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}if("ready"!==D)throw new Error("apply() is only allowed in ready status");n=n||{};var o,i,a,s,d,f={},l=[],h={},v=function(){console.warn("[HMR] unexpected require("+b.moduleId+") to disposed module")};for(var y in w)if(Object.prototype.hasOwnProperty.call(w,y)){d=u(y);var b;b=w[y]?function(e){for(var t=[e],n={},o=t.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var i=o.pop(),c=i.id,u=i.chain;if((s=I[c])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:u,moduleId:c};if(s.hot._main)return{type:"unaccepted",chain:u,moduleId:c};for(var a=0;a<s.parents.length;a++){var d=s.parents[a],f=I[d];if(f){if(f.hot._declinedDependencies[c])return{type:"declined",chain:u.concat([d]),moduleId:c,parentId:d};t.indexOf(d)>=0||(f.hot._acceptedDependencies[c]?(n[d]||(n[d]=[]),r(n[d],[c])):(delete n[d],t.push(d),o.push({chain:u.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}(d):{type:"disposed",moduleId:y};var x=!1,E=!1,j=!1,H="";switch(b.chain&&(H="\nUpdate propagation: "+b.chain.join(" -> ")),b.type){case"self-declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(x=new Error("Aborted because of self decline: "+b.moduleId+H));break;case"declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+b.moduleId+" in "+b.parentId+H));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(b),n.ignoreUnaccepted||(x=new Error("Aborted because "+d+" is not accepted"+H));break;case"accepted":n.onAccepted&&n.onAccepted(b),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(b),j=!0;break;default:throw new Error("Unexception type "+b.type)}if(x)return c("abort"),Promise.reject(x);if(E){h[d]=w[d],r(l,b.outdatedModules);for(d in b.outdatedDependencies)Object.prototype.hasOwnProperty.call(b.outdatedDependencies,d)&&(f[d]||(f[d]=[]),r(f[d],b.outdatedDependencies[d]))}j&&(r(l,[b.moduleId]),h[d]=v)}var P=[];for(i=0;i<l.length;i++)d=l[i],I[d]&&I[d].hot._selfAccepted&&P.push({module:d,errorHandler:I[d].hot._selfAccepted});c("dispose"),Object.keys(M).forEach(function(e){!1===M[e]&&t(e)});for(var B,k=l.slice();k.length>0;)if(d=k.pop(),s=I[d]){var A={},F=s.hot._disposeHandlers;for(a=0;a<F.length;a++)(o=F[a])(A);for(_[d]=A,s.hot.active=!1,delete I[d],delete f[d],a=0;a<s.children.length;a++){var S=I[s.children[a]];S&&((B=S.parents.indexOf(d))>=0&&S.parents.splice(B,1))}}var C,R;for(d in f)if(Object.prototype.hasOwnProperty.call(f,d)&&(s=I[d]))for(R=f[d],a=0;a<R.length;a++)C=R[a],(B=s.children.indexOf(C))>=0&&s.children.splice(B,1);c("apply"),m=g;for(d in h)Object.prototype.hasOwnProperty.call(h,d)&&(e[d]=h[d]);var U=null;for(d in f)if(Object.prototype.hasOwnProperty.call(f,d)&&(s=I[d])){R=f[d];var T=[];for(i=0;i<R.length;i++)if(C=R[i],o=s.hot._acceptedDependencies[C]){if(T.indexOf(o)>=0)continue;T.push(o)}for(i=0;i<T.length;i++){o=T[i];try{o(R)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:R[i],error:e}),n.ignoreErrored||U||(U=e)}}}for(i=0;i<P.length;i++){var q=P[i];d=q.module,O=[d];try{p(d)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,orginalError:e,originalError:e}),n.ignoreErrored||U||(U=t),U||(U=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||U||(U=e)}}return U?(c("fail"),Promise.reject(U)):(c("idle"),new Promise(function(e){e(l)}))}function p(t){if(I[t])return I[t].exports;var n=I[t]={i:t,l:!1,exports:{},hot:i(t),parents:(E=O,O=[],E),children:[]};return e[t].call(n.exports,n,n.exports,o(t)),n.l=!0,n.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){s(e,t),h&&h(e,t)};var v,y,w,g,b=!0,m="6a55efac0936d3a675d9",x=1e4,_={},O=[],E=[],j=[],D="idle",H=0,P=0,B={},k={},M={},I={};p.m=e,p.c=I,p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="http://cdn.upingou.com/msphPcStatic/",p.h=function(){return m},o(142)(p.s=142)}({0:function(e,t,n){e.exports=!n(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},1:function(e,t){var n=e.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},10:function(e,t,n){"use strict";t.__esModule=!0;var r=n(19),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},11:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},14:function(e,t,n){var r=n(4);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},142:function(e,t,n){e.exports=n(143)},143:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(9),i=r(o),c=n(10),u=r(c);n(144),function(){var e=[],t=function(){function e(t){(0,i.default)(this,e),this.dom=t,this.label=this.dom.find(".label"),this.ulBox=this.dom.find(".ul_box"),this.ul=this.dom.find(".ul"),this.showBtn=this.dom.find(".show_btn"),this.ulHeight=this.ul.height(),this.ulBoxHeight=this.ulBox.height(),this.init()}return(0,u.default)(e,[{key:"init",value:function(){this.row=this.ulHeight/this.ulBoxHeight,this.row>1?this.showBtn.show():this.showBtn.hide(),this.bind()}},{key:"bind",value:function(){var e=this;this.showBtn.on("click",function(){e.showBtn.hasClass("active")?e.closeFun():e.openFun()})}},{key:"closeFun",value:function(){this.showBtn.text("展开"),this.label.css({height:this.ulBoxHeight*this.row+"px"}),this.ulBox.css({height:this.ulBoxHeight+"px"}),this.showBtn.removeClass("active")}},{key:"openFun",value:function(){this.showBtn.text("收起"),this.label.css({height:this.ulBoxHeight*(this.row+1)+"px"}),this.ulBox.css({height:this.ulBoxHeight*this.row+"px"}),this.showBtn.addClass("active")}}]),e}();return function(n){var r="string"==typeof n?$(n):n;r.each(function(n){var o=r.eq(n);if(o.hasClass("init"))return!1;e.push(new t(o)),o.addClass("init")})}}()(".js_nav_list"),$(function(){document.getElementById("test").addEventListener("change",function(){var e=this.files[0];if(console.log(e),window.FileReader){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(e){console.log(e.target.result)}}},!1)})},144:function(e,t){},16:function(e,t,n){var r=n(4),o=n(2).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},17:function(e,t,n){var r=n(22);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},18:function(e,t,n){e.exports=!n(0)&&!n(5)(function(){return 7!=Object.defineProperty(n(16)("div"),"a",{get:function(){return 7}}).a})},19:function(e,t,n){e.exports={default:n(20),__esModule:!0}},2:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},20:function(e,t,n){n(21);var r=n(1).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},21:function(e,t,n){var r=n(7);r(r.S+r.F*!n(0),"Object",{defineProperty:n(3).f})},22:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},3:function(e,t,n){var r=n(8),o=n(18),i=n(14),c=Object.defineProperty;t.f=n(0)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},4:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},5:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},6:function(e,t,n){var r=n(3),o=n(11);e.exports=n(0)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},7:function(e,t,n){var r=n(2),o=n(1),i=n(17),c=n(6),u=function(e,t,n){var a,s,d,f=e&u.F,l=e&u.G,p=e&u.S,h=e&u.P,v=e&u.B,y=e&u.W,w=l?o:o[t]||(o[t]={}),g=w.prototype,b=l?r:p?r[t]:(r[t]||{}).prototype;l&&(n=t);for(a in n)(s=!f&&b&&void 0!==b[a])&&a in w||(d=s?b[a]:n[a],w[a]=l&&"function"!=typeof b[a]?n[a]:v&&s?i(d,r):y&&b[a]==d?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(d):h&&"function"==typeof d?i(Function.call,d):d,h&&((w.virtual||(w.virtual={}))[a]=d,e&u.R&&g&&!g[a]&&c(g,a,d)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},8:function(e,t,n){var r=n(4);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},9:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}});