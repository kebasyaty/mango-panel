(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85a819ce"],{1219:function(t,e,n){},"17b3":function(t,e,n){},"28a0":function(t,e){"function"===typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},3022:function(t,e,n){(function(t){var i=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},i=0;i<e.length;i++)n[e[i]]=Object.getOwnPropertyDescriptor(t,e[i]);return n},r=/%[sdj%]/g;e.format=function(t){if(!S(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(s(arguments[n]));return e.join(" ")}n=1;for(var i=arguments,a=i.length,o=String(t).replace(r,(function(t){if("%%"===t)return"%";if(n>=a)return t;switch(t){case"%s":return String(i[n++]);case"%d":return Number(i[n++]);case"%j":try{return JSON.stringify(i[n++])}catch(e){return"[Circular]"}default:return t}})),u=i[n];n<a;u=i[++n])y(u)||!C(u)?o+=" "+u:o+=" "+s(u);return o},e.deprecate=function(n,i){if("undefined"!==typeof t&&!0===t.noDeprecation)return n;if("undefined"===typeof t)return function(){return e.deprecate(n,i).apply(this,arguments)};var r=!1;function a(){if(!r){if(t.throwDeprecation)throw new Error(i);t.traceDeprecation?console.trace(i):console.error(i),r=!0}return n.apply(this,arguments)}return a};var a,o={};function s(t,n){var i={seen:[],stylize:c};return arguments.length>=3&&(i.depth=arguments[2]),arguments.length>=4&&(i.colors=arguments[3]),b(n)?i.showHidden=n:n&&e._extend(i,n),j(i.showHidden)&&(i.showHidden=!1),j(i.depth)&&(i.depth=2),j(i.colors)&&(i.colors=!1),j(i.customInspect)&&(i.customInspect=!0),i.colors&&(i.stylize=u),h(i,t,i.depth)}function u(t,e){var n=s.styles[e];return n?"["+s.colors[n][0]+"m"+t+"["+s.colors[n][1]+"m":t}function c(t,e){return t}function l(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}function h(t,n,i){if(t.customInspect&&n&&_(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var r=n.inspect(i,t);return S(r)||(r=h(t,r,i)),r}var a=p(t,n);if(a)return a;var o=Object.keys(n),s=l(o);if(t.showHidden&&(o=Object.getOwnPropertyNames(n)),D(n)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return f(n);if(0===o.length){if(_(n)){var u=n.name?": "+n.name:"";return t.stylize("[Function"+u+"]","special")}if(O(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(k(n))return t.stylize(Date.prototype.toString.call(n),"date");if(D(n))return f(n)}var c,b="",y=!1,x=["{","}"];if(v(n)&&(y=!0,x=["[","]"]),_(n)){var w=n.name?": "+n.name:"";b=" [Function"+w+"]"}return O(n)&&(b=" "+RegExp.prototype.toString.call(n)),k(n)&&(b=" "+Date.prototype.toUTCString.call(n)),D(n)&&(b=" "+f(n)),0!==o.length||y&&0!=n.length?i<0?O(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),c=y?d(t,n,i,s,o):o.map((function(e){return g(t,n,i,s,e,y)})),t.seen.pop(),m(c,b,x)):x[0]+b+x[1]}function p(t,e){if(j(e))return t.stylize("undefined","undefined");if(S(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}return w(e)?t.stylize(""+e,"number"):b(e)?t.stylize(""+e,"boolean"):y(e)?t.stylize("null","null"):void 0}function f(t){return"["+Error.prototype.toString.call(t)+"]"}function d(t,e,n,i,r){for(var a=[],o=0,s=e.length;o<s;++o)P(e,String(o))?a.push(g(t,e,n,i,String(o),!0)):a.push("");return r.forEach((function(r){r.match(/^\d+$/)||a.push(g(t,e,n,i,r,!0))})),a}function g(t,e,n,i,r,a){var o,s,u;if(u=Object.getOwnPropertyDescriptor(e,r)||{value:e[r]},u.get?s=u.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):u.set&&(s=t.stylize("[Setter]","special")),P(i,r)||(o="["+r+"]"),s||(t.seen.indexOf(u.value)<0?(s=y(n)?h(t,u.value,null):h(t,u.value,n-1),s.indexOf("\n")>-1&&(s=a?s.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+s.split("\n").map((function(t){return"   "+t})).join("\n"))):s=t.stylize("[Circular]","special")),j(o)){if(a&&r.match(/^\d+$/))return s;o=JSON.stringify(""+r),o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=t.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=t.stylize(o,"string"))}return o+": "+s}function m(t,e,n){var i=t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0);return i>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function v(t){return Array.isArray(t)}function b(t){return"boolean"===typeof t}function y(t){return null===t}function x(t){return null==t}function w(t){return"number"===typeof t}function S(t){return"string"===typeof t}function $(t){return"symbol"===typeof t}function j(t){return void 0===t}function O(t){return C(t)&&"[object RegExp]"===A(t)}function C(t){return"object"===typeof t&&null!==t}function k(t){return C(t)&&"[object Date]"===A(t)}function D(t){return C(t)&&("[object Error]"===A(t)||t instanceof Error)}function _(t){return"function"===typeof t}function I(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t}function A(t){return Object.prototype.toString.call(t)}function N(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(j(a)&&(a=Object({NODE_ENV:"production",BASE_URL:"/admin/contrib/"}).NODE_DEBUG||""),n=n.toUpperCase(),!o[n])if(new RegExp("\\b"+n+"\\b","i").test(a)){var i=t.pid;o[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,i,t)}}else o[n]=function(){};return o[n]},e.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=v,e.isBoolean=b,e.isNull=y,e.isNullOrUndefined=x,e.isNumber=w,e.isString=S,e.isSymbol=$,e.isUndefined=j,e.isRegExp=O,e.isObject=C,e.isDate=k,e.isError=D,e.isFunction=_,e.isPrimitive=I,e.isBuffer=n("d60a");var V=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function L(){var t=new Date,e=[N(t.getHours()),N(t.getMinutes()),N(t.getSeconds())].join(":");return[t.getDate(),V[t.getMonth()],e].join(" ")}function P(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",L(),e.format.apply(e,arguments))},e.inherits=n("28a0"),e._extend=function(t,e){if(!e||!C(e))return t;var n=Object.keys(e),i=n.length;while(i--)t[n[i]]=e[n[i]];return t};var T="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function E(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}function B(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i]);var r=n.pop();if("function"!==typeof r)throw new TypeError("The last argument must be of type Function");var a=this,o=function(){return r.apply(a,arguments)};e.apply(this,n).then((function(e){t.nextTick(o,null,e)}),(function(e){t.nextTick(E,e,o)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,i(e)),n}e.promisify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');if(T&&t[T]){var e=t[T];if("function"!==typeof e)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,T,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,i=new Promise((function(t,i){e=t,n=i})),r=[],a=0;a<arguments.length;a++)r.push(arguments[a]);r.push((function(t,i){t?n(t):e(i)}));try{t.apply(this,r)}catch(o){n(o)}return i}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),T&&Object.defineProperty(e,T,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,i(t))},e.promisify.custom=T,e.callbackify=B}).call(this,n("4362"))},5311:function(t,e,n){"use strict";var i=n("5607"),r=n("2b0e");e["a"]=r["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"6ca7":function(t,e,n){},8547:function(t,e,n){"use strict";var i=n("2b0e"),r=n("80d2");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:r["i"]}}})},"898f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.serviceList.length>0?n("v-container",{attrs:{fluid:""}},[n("v-card",{staticClass:"mt-1"},[n("v-toolbar",{attrs:{dense:"",flat:""}},[n("v-btn",{attrs:{icon:""},on:{click:t.goBack}},[n("v-icon",[t._v("mdi-arrow-left")])],1)],1),n("v-card-title",{staticClass:"pt-0"},[t._v(t._s(t.collectionTitle))]),n("v-card-subtitle",[t._v(t._s(t.breadcrumbs))]),n("v-card-text",{staticClass:"pt-4"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{dense:"",clearable:"","hide-details":"",placeholder:t.$t("message.3"),"append-icon":"mdi-magnify"},on:{input:function(e){return t.documentSearch()}},model:{value:t.updateSearchQuery,callback:function(e){t.updateSearchQuery=e},expression:"updateSearchQuery"}})],1),n("v-col",{staticClass:"text-md-right",attrs:{cols:"12",md:"6"}},[n("v-btn",{attrs:{text:"",color:"green",to:t.docUrlNoIndex+"/new"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-file-plus-outline")]),t._v(" "+t._s(t.$t("message.25"))+" ")],1)],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[t.docsToBeDeleted.length>0?n("v-btn",{attrs:{dark:"",tile:"",depressed:"",color:"red darken-3"},on:{click:t.deleteDocs}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-close-thick")]),t._v(" "+t._s(t.$t("message.4"))+" ")],1):t._e()],1)],1),n("v-simple-table",{staticClass:"mt-4",attrs:{"fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[n("v-checkbox",{staticClass:"mt-0 pt-0",attrs:{"hide-details":"",color:"red darken-3"},on:{change:t.markAllDocsForDeletion},model:{value:t.deleteAllDocsFlag,callback:function(e){t.deleteAllDocsFlag=e},expression:"deleteAllDocsFlag"}})],1),n("th",[t._v("№")]),n("th",[t._v(t._s(t.serviceList[t.$route.params.indexService].collections[t.$route.params.indexCollection].doc_name.title))]),n("th",[t._v(t._s(t.$t("message.29")))]),n("th",[t._v(t._s(t.$t("message.30")))])])]),n("tbody",t._l(t.documents,(function(e,i){return n("tr",{key:e.title},[n("td",{staticClass:"pr-0",attrs:{width:"76"}},[n("v-checkbox",{staticClass:"mt-0 pt-0",attrs:{"hide-details":"",value:i,color:"red darken-3"},on:{change:t.checkStatusListSelectedDocsDeleted},model:{value:t.docsToBeDeleted,callback:function(e){t.docsToBeDeleted=e},expression:"docsToBeDeleted"}})],1),n("td",{staticClass:"pr-0",attrs:{width:"76"}},[t._v(t._s(i+1))]),n("td",[n("router-link",{attrs:{to:t.createDocumentUrl(i)}},[t._v(t._s(e.title))])],1),n("td",{attrs:{width:"160"},domProps:{innerHTML:t._s(t.formatDate(e.created_at))}}),n("td",{attrs:{width:"160"},domProps:{innerHTML:t._s(t.formatDate(e.updated_at))}})])})),0)]},proxy:!0}],null,!1,2833701898)})],1),n("v-card-actions",[n("v-spacer"),t.blockPagination?t._e():n("v-pagination",{attrs:{length:t.pagesNumber,"total-visible":5},on:{input:function(e){return t.ajaxGetDocumentList()}},model:{value:t.updateCurrentPageNumber,callback:function(e){t.updateCurrentPageNumber=e},expression:"updateCurrentPageNumber"}}),n("v-spacer")],1)],1)],1):t._e()},r=[],a=n("5530"),o=(n("99af"),n("1276"),n("ac1f"),n("2f62")),s=n("d3bd"),u=n.n(s),c=n("d444"),l=n.n(c),h={name:"DocumentList",data:function(){return{deleteAllDocsFlag:!1,docsToBeDeleted:[]}},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(o["d"])(["serviceList"])),Object(o["d"])("documentList",["documents","currentPageNumber","pagesNumber","searchQuery","blockPagination"])),{},{updateCurrentPageNumber:{get:function(){return this.currentPageNumber},set:function(t){this.setCurrentPageNumber(t)}},updateSearchQuery:{get:function(){return this.searchQuery},set:function(t){this.setSearchQuery(t)}},collectionTitle:function(){var t=this.$route.params.indexService,e=this.$route.params.indexCollection;return this.serviceList[t].collections[e].title},breadcrumbs:function(){var t=this.$route.params.indexService,e=this.serviceList[t].service.title;return"".concat(e," > ").concat(this.collectionTitle)},docUrlNoIndex:function(){var t=this.$i18n.locale,e=this.$route.params.indexService,n=this.$route.params.indexCollection,i=this.serviceList[e],r=u()(i.service.title,{locale:t}),a=u()(this.collectionTitle,{locale:t});return"/".concat(r,"/").concat(e,"/").concat(a,"/").concat(n,"/document")}}),methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(o["c"])("documentList",["setCurrentPageNumber","setSearchQuery"])),Object(o["b"])("documentList",["ajaxGetDocumentList","resetPageNumberDefault"])),{},{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push({name:"home"})},documentSearch:function(){null!==this.updateSearchQuery&&(this.resetPageNumberDefault(),this.ajaxGetDocumentList())},createDocumentUrl:function(t){return"".concat(this.docUrlNoIndex,"/").concat(t)},markAllDocsForDeletion:function(){this.docsToBeDeleted=this.deleteAllDocsFlag?l()(0,this.documents.length-1):[]},checkStatusListSelectedDocsDeleted:function(){this.deleteAllDocsFlag=this.docsToBeDeleted.length===this.documents.length},deleteDocs:function(){window.console.log(this.docsToBeDeleted)},formatDate:function(t){var e=t.split("T");return'<span class="cyan--text text--darken-2">'.concat(e[0],'</span> <span class="orange--text text--darken-2">').concat(e[1],"</span>")}}),created:function(){this.resetPageNumberDefault(),this.ajaxGetDocumentList()}},p=h,f=(n("ab7d"),n("2877")),d=n("6544"),g=n.n(d),m=n("8336"),v=n("b0af"),b=n("99d9"),y=n("ac7c"),x=n("62ad"),w=n("a523"),S=n("132d"),$=n("2909"),j=(n("a9e3"),n("d3b7"),n("25f0"),n("d81d"),n("17b3"),n("9d26")),O=n("dc22"),C=n("a9ad"),k=n("de2c"),D=n("7560"),_=n("58df"),I=Object(_["a"])(C["a"],Object(k["a"])({onVisible:["init"]}),D["a"]).extend({name:"v-pagination",directives:{Resize:O["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(a["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2===0?1:0,i=Math.floor(e/2),r=this.length-i+1+n;if(this.value>i&&this.value<r){var a=this.value-i+2,o=this.value+i-2-n;return[1,"..."].concat(Object($["a"])(this.range(a,o)),["...",this.length])}if(this.value===i){var s=this.value+i-1-n;return[].concat(Object($["a"])(this.range(1,s)),["...",this.length])}if(this.value===r){var u=this.value-i+1;return[1,"..."].concat(Object($["a"])(this.range(u,this.length)))}return[].concat(Object($["a"])(this.range(1,i)),["..."],Object($["a"])(this.range(r,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var n=[];t=t>0?t:1;for(var i=t;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,i,r){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{disabled:n,type:"button","aria-label":r},on:n?{}:{click:i}},[t(j["a"],[e])])])},genItem:function(t,e){var n=this,i=e===this.value&&(this.color||"primary"),r=e===this.value,a=r?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(a,e)},on:{click:function(){return n.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(n,i){return t("li",{key:i},[isNaN(Number(n))?t("span",{class:"v-pagination__more"},[n.toString()]):e.genItem(t,n)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),A=n("0fd9"),N=(n("8b37"),n("80d2")),V=Object(_["a"])(D["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(a["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(N["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),L=n("2fa4"),P=n("8654"),T=n("71d9"),E=Object(f["a"])(p,i,r,!1,null,null,null);e["default"]=E.exports;g()(E,{VBtn:m["a"],VCard:v["a"],VCardActions:b["a"],VCardSubtitle:b["b"],VCardText:b["c"],VCardTitle:b["d"],VCheckbox:y["a"],VCol:x["a"],VContainer:w["a"],VIcon:S["a"],VPagination:I,VRow:A["a"],VSimpleTable:V,VSpacer:L["a"],VTextField:P["a"],VToolbar:T["a"]})},"8b37":function(t,e,n){},ab7d:function(t,e,n){"use strict";n("1219")},ac7c:function(t,e,n){"use strict";var i=n("5530"),r=(n("d3b7"),n("25f0"),n("6ca7"),n("ec29"),n("9d26")),a=n("c37a"),o=n("fe09");e["a"]=o["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(r["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(i["a"])(Object(i["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},d444:function(t,e,n){"use strict";
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */const i=n("3022"),r=n("fd8e"),a=t=>null!==t&&"object"===typeof t&&!Array.isArray(t),o=t=>e=>!0===t?Number(e):String(e),s=t=>"number"===typeof t||"string"===typeof t&&""!==t,u=t=>Number.isInteger(+t),c=t=>{let e=""+t,n=-1;if("-"===e[0]&&(e=e.slice(1)),"0"===e)return!1;while("0"===e[++n]);return n>0},l=(t,e,n)=>"string"===typeof t||"string"===typeof e||!0===n.stringify,h=(t,e,n)=>{if(e>0){let n="-"===t[0]?"-":"";n&&(t=t.slice(1)),t=n+t.padStart(n?e-1:e,"0")}return!1===n?String(t):t},p=(t,e)=>{let n="-"===t[0]?"-":"";n&&(t=t.slice(1),e--);while(t.length<e)t="0"+t;return n?"-"+t:t},f=(t,e)=>{t.negatives.sort((t,e)=>t<e?-1:t>e?1:0),t.positives.sort((t,e)=>t<e?-1:t>e?1:0);let n,i=e.capture?"":"?:",r="",a="";return t.positives.length&&(r=t.positives.join("|")),t.negatives.length&&(a=`-(${i}${t.negatives.join("|")})`),n=r&&a?`${r}|${a}`:r||a,e.wrap?`(${i}${n})`:n},d=(t,e,n,i)=>{if(n)return r(t,e,{wrap:!1,...i});let a=String.fromCharCode(t);if(t===e)return a;let o=String.fromCharCode(e);return`[${a}-${o}]`},g=(t,e,n)=>{if(Array.isArray(t)){let e=!0===n.wrap,i=n.capture?"":"?:";return e?`(${i}${t.join("|")})`:t.join("|")}return r(t,e,n)},m=(...t)=>new RangeError("Invalid range arguments: "+i.inspect(...t)),v=(t,e,n)=>{if(!0===n.strictRanges)throw m([t,e]);return[]},b=(t,e)=>{if(!0===e.strictRanges)throw new TypeError(`Expected step "${t}" to be a number`);return[]},y=(t,e,n=1,i={})=>{let r=Number(t),a=Number(e);if(!Number.isInteger(r)||!Number.isInteger(a)){if(!0===i.strictRanges)throw m([t,e]);return[]}0===r&&(r=0),0===a&&(a=0);let s=r>a,u=String(t),v=String(e),b=String(n);n=Math.max(Math.abs(n),1);let y=c(u)||c(v)||c(b),x=y?Math.max(u.length,v.length,b.length):0,w=!1===y&&!1===l(t,e,i),S=i.transform||o(w);if(i.toRegex&&1===n)return d(p(t,x),p(e,x),!0,i);let $={negatives:[],positives:[]},j=t=>$[t<0?"negatives":"positives"].push(Math.abs(t)),O=[],C=0;while(s?r>=a:r<=a)!0===i.toRegex&&n>1?j(r):O.push(h(S(r,C),x,w)),r=s?r-n:r+n,C++;return!0===i.toRegex?n>1?f($,i):g(O,null,{wrap:!1,...i}):O},x=(t,e,n=1,i={})=>{if(!u(t)&&t.length>1||!u(e)&&e.length>1)return v(t,e,i);let r=i.transform||(t=>String.fromCharCode(t)),a=(""+t).charCodeAt(0),o=(""+e).charCodeAt(0),s=a>o,c=Math.min(a,o),l=Math.max(a,o);if(i.toRegex&&1===n)return d(c,l,!1,i);let h=[],p=0;while(s?a>=o:a<=o)h.push(r(a,p)),a=s?a-n:a+n,p++;return!0===i.toRegex?g(h,null,{wrap:!1,options:i}):h},w=(t,e,n,i={})=>{if(null==e&&s(t))return[t];if(!s(t)||!s(e))return v(t,e,i);if("function"===typeof n)return w(t,e,1,{transform:n});if(a(n))return w(t,e,0,n);let r={...i};return!0===r.capture&&(r.wrap=!0),n=n||r.step||1,u(n)?u(t)&&u(e)?y(t,e,n,r):x(t,e,Math.max(Math.abs(n),1),r):null==n||a(n)?w(t,e,1,n):b(n,r)};t.exports=w},d60a:function(t,e){t.exports=function(t){return t&&"object"===typeof t&&"function"===typeof t.copy&&"function"===typeof t.fill&&"function"===typeof t.readUInt8}},eb9e:function(t,e,n){"use strict";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */t.exports=function(t){return"number"===typeof t?t-t===0:"string"===typeof t&&""!==t.trim()&&(Number.isFinite?Number.isFinite(+t):isFinite(+t))}},ec29:function(t,e,n){},fd8e:function(t,e,n){"use strict";
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */const i=n("eb9e"),r=(t,e,n)=>{if(!1===i(t))throw new TypeError("toRegexRange: expected the first argument to be a number");if(void 0===e||t===e)return String(t);if(!1===i(e))throw new TypeError("toRegexRange: expected the second argument to be a number.");let o={relaxZeros:!0,...n};"boolean"===typeof o.strictZeros&&(o.relaxZeros=!1===o.strictZeros);let s=String(o.relaxZeros),c=String(o.shorthand),l=String(o.capture),h=String(o.wrap),p=t+":"+e+"="+s+c+l+h;if(r.cache.hasOwnProperty(p))return r.cache[p].result;let f=Math.min(t,e),d=Math.max(t,e);if(1===Math.abs(f-d)){let n=t+"|"+e;return o.capture?`(${n})`:!1===o.wrap?n:`(?:${n})`}let g=v(t)||v(e),m={min:t,max:e,a:f,b:d},b=[],y=[];if(g&&(m.isPadded=g,m.maxLen=String(m.max).length),f<0){let t=d<0?Math.abs(d):1;y=u(t,Math.abs(f),m,o),f=m.a=0}return d>=0&&(b=u(f,d,m,o)),m.negatives=y,m.positives=b,m.result=a(y,b,o),!0===o.capture?m.result=`(${m.result})`:!1!==o.wrap&&b.length+y.length>1&&(m.result=`(?:${m.result})`),r.cache[p]=m,m.result};function a(t,e,n){let i=c(t,e,"-",!1,n)||[],r=c(e,t,"",!1,n)||[],a=c(t,e,"-?",!0,n)||[],o=i.concat(a).concat(r);return o.join("|")}function o(t,e){let n=1,i=1,r=f(t,n),a=new Set([e]);while(t<=r&&r<=e)a.add(r),n+=1,r=f(t,n);r=d(e+1,i)-1;while(t<r&&r<=e)a.add(r),i+=1,r=d(e+1,i)-1;return a=[...a],a.sort(h),a}function s(t,e,n){if(t===e)return{pattern:t,count:[],digits:0};let i=l(t,e),r=i.length,a="",o=0;for(let s=0;s<r;s++){let[t,e]=i[s];t===e?a+=t:"0"!==t||"9"!==e?a+=m(t,e,n):o++}return o&&(a+=!0===n.shorthand?"\\d":"[0-9]"),{pattern:a,count:[o],digits:r}}function u(t,e,n,i){let r,a=o(t,e),u=[],c=t;for(let o=0;o<a.length;o++){let t=a[o],e=s(String(c),String(t),i),l="";n.isPadded||!r||r.pattern!==e.pattern?(n.isPadded&&(l=b(t,n,i)),e.string=l+e.pattern+g(e.count),u.push(e),c=t+1,r=e):(r.count.length>1&&r.count.pop(),r.count.push(e.count[0]),r.string=r.pattern+g(r.count),c=t+1)}return u}function c(t,e,n,i,r){let a=[];for(let o of t){let{string:t}=o;i||p(e,"string",t)||a.push(n+t),i&&p(e,"string",t)&&a.push(n+t)}return a}function l(t,e){let n=[];for(let i=0;i<t.length;i++)n.push([t[i],e[i]]);return n}function h(t,e){return t>e?1:e>t?-1:0}function p(t,e,n){return t.some(t=>t[e]===n)}function f(t,e){return Number(String(t).slice(0,-e)+"9".repeat(e))}function d(t,e){return t-t%Math.pow(10,e)}function g(t){let[e=0,n=""]=t;return n||e>1?`{${e+(n?","+n:"")}}`:""}function m(t,e,n){return`[${t}${e-t===1?"":"-"}${e}]`}function v(t){return/^-?(0+)\d/.test(t)}function b(t,e,n){if(!e.isPadded)return t;let i=Math.abs(e.maxLen-String(t).length),r=!1!==n.relaxZeros;switch(i){case 0:return"";case 1:return r?"0?":"0";case 2:return r?"0{0,2}":"00";default:return r?`0{0,${i}}`:`0{${i}}`}}r.cache={},r.clearCache=()=>r.cache={},t.exports=r},fe09:function(t,e,n){"use strict";n.d(e,"b",(function(){return s}));n("d3b7"),n("25f0"),n("4de4");var i=n("c37a"),r=n("5311"),a=n("8547"),o=n("58df");function s(t){t.preventDefault()}e["a"]=Object(o["a"])(i["a"],r["a"],a["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=i["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:s},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:s},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var i=n.length;n=n.filter((function(n){return!t.valueComparator(n,e)})),n.length===i&&n.push(e)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(n,e)?null:e:!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-85a819ce.a635b73a.js.map