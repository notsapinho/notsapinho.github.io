(function(t){function e(e){for(var o,s,u=e[0],i=e[1],c=e[2],p=0,d=[];p<u.length;p++)s=u[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"3d55":function(t,e,n){"use strict";n("801a")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{ref:"console",staticClass:"console"},[n("span",{staticClass:"italic"},[t._v("Type 'help' for more information.")]),n("div",{staticClass:"logs"},t._l(t.logs,(function(t,e){return n("CommandInput",{key:e,attrs:{command:t.command,result:t.result}})})),1),n("CommandInput",{attrs:{func:t.executeCommand,main:""}})],1)])},a=[],s=(n("498a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.main?n("div",{staticClass:"mainInputDiv"},[n("span",{staticClass:"bold"},[t._v("$")]),t._v(" "),n("input",{staticClass:"mainInput",attrs:{type:"name",maxlength:"20",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.func(e)}}})]):n("div",{staticClass:"copiedInputDiv"},[n("div",{staticClass:"copiedInputTyper"},[n("span",{staticClass:"bold"},[t._v("$")]),t._v(" "),n("span",{staticClass:"copiedInput",attrs:{type:"name"}},[t._v(t._s(t.command))])]),n("div",{staticClass:"resultDiv"},t._l(t.result,(function(e,o){return n("span",{key:o},[t._v(t._s(e))])})),0)])}),u=[],i={props:{main:Boolean,command:String,result:Array,func:Function}},c=i,l=(n("3d55"),n("2877")),p=Object(l["a"])(c,s,u,!1,null,null,null),d=p.exports,f={name:"App",components:{CommandInput:d},data:function(){return{logs:[]}},methods:{createInputCopy:function(){},executeCommand:function(t){var e=t.target.value.trim();if(e){switch(e){case"help":this.logs.push({command:e,result:["Try one of these commands:","help","about","social","clear"]});break;case"about":this.logs.push({command:e,result:["I do useless things, like this one and I'm homeless."]});break;case"social":this.logs.push({command:e,result:["Discord: notsapinho#2975","Github: github.com/notsapinho"]});break;case"clear":this.logs=[];break;default:this.logs.push({command:e,result:["'".concat(e,"' is not recognized as an internal command or external command.")]});break}t.target.value=""}}}},m=f,h=(n("034f"),Object(l["a"])(m,r,a,!1,null,null,null)),v=h.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(v)}}).$mount("#app")},"801a":function(t,e,n){},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.46279656.js.map