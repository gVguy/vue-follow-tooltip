(function(t){function e(e){for(var n,r,a=e[0],u=e[1],l=e[2],h=0,d=[];h<a.length;h++)r=a[h],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var u=i[a];0!==o[u]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},o={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=u;s.push(["8c94","chunk-vendors"]),i()})({"04f5":function(t,e,i){},"24bb":function(t,e,i){"use strict";i("04f5")},"8c94":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("7a23"),o={id:"app"},s=Object(n["c"])("h1",null,"vue-tooltip",-1),r={class:"docs-link",href:"https://github.com/gVguy/vue-tooltip"},a=Object(n["d"])("Docs"),u=[a],l={class:"text"},c=Object(n["d"])(" This is some text that is hard to understand without some clarification "),h=[c];function d(t,e,i,a,c,d){var p=Object(n["f"])("tooltip");return Object(n["e"])(),Object(n["b"])("div",o,[s,Object(n["c"])("h3",null,[Object(n["g"])(Object(n["c"])("a",r,u,512),[[p,"View docs on github"]])]),Object(n["g"])(Object(n["c"])("div",l,h,512),[[p,"This explains everyting"]])])}var p={name:"Demo",components:{},data:function(){return{}},computed:{},methods:{},created:function(){},mounted:function(){}},f=(i("24bb"),i("6b0d")),v=i.n(f);const b=v()(p,[["render",d]]);var m=b,y=i("d4ec"),g=i("bee2"),w=(i("c740"),i("ac1f"),i("1276"),i("7db0"),i("caad"),{delay:500,center:!0,offsetX:0,offsetY:20}),O=[];function j(t){var e=t.getPropertyValue("transition-property").split(", ").findIndex((function(t){return"opacity"==t}));return-1!=e?parseFloat(t.getPropertyValue("transition-duration").split("s, ")[e]):0}var k=function(){function t(e){Object(y["a"])(this,t),Object.assign(this,w),this.el=document.createElement("div"),this.el.textContent=e,this.el.className="tooltip",Object.assign(this.el.style,{position:"fixed",opacity:0}),this.state="hidden",this.id=O.length,O.push(this)}return Object(g["a"])(t,[{key:"handleEvent",value:function(t){var e=this;switch(t.type){case"pointermove":this.position(t.clientX,t.clientY);break;case"pointerover":var i=O.find((function(t){return["will-hide","hiding"].includes(t.state)&&t.id!=e.id}));i?("will-hide"==i.state&&(clearTimeout(i.timeout),i.hide(!0)),this.show(!0)):this.show();break;case"pointerout":this.hide();break;case"transitionend":"showing"==this.state?this.state="visible":"hiding"==this.state&&this.unmount();break}}},{key:"show",value:function(t){var e=this;"hidden"==this.state?(document.documentElement.append(this.el),this.computedStyle=window.getComputedStyle(this.el),this.el.style.width=this.computedStyle.getPropertyValue("width"),this.el.style.height=this.computedStyle.getPropertyValue("height"),this.transitionDuration=j(this.computedStyle),this.timeout=setTimeout((function(){e.el.style.opacity=1,e.transitionDuration?e.state="showing":e.state="visible"}),t?0:this.delay),document.addEventListener("pointermove",this),this.el.addEventListener("transitionend",this),this.state="will-show"):"hiding"==this.state?(this.el.style.opacity=1,this.state="showing"):"will-hide"==this.state&&(clearTimeout(this.timeout),this.state="visible")}},{key:"hide",value:function(t){var e=this;"visible"==this.state||t?(this.timeout=setTimeout((function(){e.el.style.opacity=0,e.transitionDuration?e.state="hiding":e.unmount()}),t?0:this.delay),this.state="will-hide"):"showing"==this.state?(this.el.style.opacity=0,this.state="hiding"):"will-show"==this.state&&(clearTimeout(this.timeout),this.unmount())}},{key:"unmount",value:function(){this.el.remove(),this.el.removeEventListener("transitionend",this),document.removeEventListener("pointermove",this),this.state="hidden"}},{key:"position",value:function(t,e){this.el.style.top=e+this.offsetY+"px",this.el.style.left=t+this.offsetX-(this.center?.5*this.el.offsetWidth:0)+"px"}}]),t}(),x={mounted:function(t,e){t.tooltip=new k(e.value),t.addEventListener("pointerover",t.tooltip),t.addEventListener("pointerout",t.tooltip)},beforeUnmount:function(t){t.removeEventListener("pointerover",t.tooltip),t.removeEventListener("pointerout",t.tooltip)},install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.assign(w,e),t.directive("tooltip",this)}},E=Object(n["a"])(m);E.use(x),E.mount("#app"),document.title="vue-tooltip"}});
//# sourceMappingURL=app.1a6d88cb.js.map