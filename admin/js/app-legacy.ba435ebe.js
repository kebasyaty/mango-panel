(function(e){function t(t){for(var i,a,r=t[0],o=t[1],l=t[2],u=0,d=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);v&&v(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],i=!0,a=1;a<n.length;a++){var r=n[a];0!==s[r]&&(i=!1)}i&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={app:0},s={app:0},c=[];function r(e){return o.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-54b2b4a8":"94884510","chunk-dbb8d5b0":"469aa026","chunk-207d5f71":"e69c75c5","chunk-85a819ce":"99368ce3","chunk-e1850f6a":"695bdef1"}[e]+".js"}function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-dbb8d5b0":1,"chunk-207d5f71":1,"chunk-85a819ce":1,"chunk-e1850f6a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-54b2b4a8":"31d6cfe0","chunk-dbb8d5b0":"eb111a12","chunk-207d5f71":"9deb4d24","chunk-85a819ce":"0e954629","chunk-e1850f6a":"b7e762e7"}[e]+".css",s=o.p+i,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var l=c[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===s))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===i||u===s)return t()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=t,v.onerror=function(t){var i=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=i,delete a[e],v.parentNode.removeChild(v),n(c)},v.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(v)})).then((function(){a[e]=0})));var i=s[e];if(0!==i)if(i)t.push(i[2]);else{var c=new Promise((function(t,n){i=s[e]=[t,n]}));t.push(i[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=r(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(v);var n=s[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",d.name="ChunkLoadError",d.type=i,d.request=a,n[1](d)}s[e]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/admin/contrib/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var v=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[e.isAuthenticated?[n("NavigationBar"),n("AppBar")]:e._e(),n("v-main",[n("router-view")],1)],2)},s=[],c=n("5530"),r=n("2f62"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{staticClass:"pa-1",attrs:{app:"",width:e.updatePanelWidthServiceList},model:{value:e.updateOpenPanelServiceList,callback:function(t){e.updateOpenPanelServiceList=t},expression:"updateOpenPanelServiceList"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[e._v("Сompany Name")]),n("v-list-item-subtitle",[e._v("Brief description of the company.")])],1)],1),n("v-list-item",{staticClass:"panel-width-service-list pl-1"},[n("v-list-item-content",[n("v-slider",{staticClass:"panel-width-service-list__slider",attrs:{dense:"","hide-details":"","prepend-icon":"mdi-arrow-split-vertical",min:"256",max:"600"},model:{value:e.updatePanelWidthServiceList,callback:function(t){e.updatePanelWidthServiceList=t},expression:"updatePanelWidthServiceList"}})],1)],1),n("v-expansion-panels",{staticClass:"service-list"},e._l(e.serviceList,(function(t,i){return n("v-expansion-panel",{key:t.service.title},[n("v-expansion-panel-header",{staticClass:"text-subtitle-1 font-weight-medium pl-0"},[n("div",{staticClass:"pl-1 service-list__icon"},[n("v-icon",{staticClass:"pos-relative pos-top-n2",domProps:{textContent:e._s("mdi-"+t.service.icon)}})],1),n("span",{},[e._v(e._s(t.service.title))])]),n("v-expansion-panel-content",{staticClass:"service-list__content"},[n("v-list",{attrs:{shaped:"",dense:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedService[i],callback:function(t){e.$set(e.selectedService,i,t)},expression:"selectedService[indexService]"}},e._l(t.collections,(function(a,s){return n("v-list-item",{key:a.model_key,staticClass:"px-1",attrs:{to:e.createUrlDocumentList(t.service.title,a.title,i,s)},on:{click:function(t){e.resetPageNumberDefault(),e.ajaxGetDocumentList({indexService:i,indexCollection:s}),e.resetPreActivatedService(i)}}},[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",[e._v("mdi-circle-medium")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-subtitle-1 font-weight-regular",domProps:{textContent:e._s(a.title)}})],1)],1)})),1)],1)],1)],1)})),1)],1)},l=[],u=(n("99af"),n("d81d"),n("d3bd")),d=n.n(u),v={name:"NavigationBar",computed:Object(c["a"])(Object(c["a"])({},Object(r["d"])(["openPanelServiceList","panelWidthServiceList","selectedService","serviceList"])),{},{updateOpenPanelServiceList:{get:function(){return this.openPanelServiceList},set:function(e){this.setOpenPanelServiceList(e)}},updatePanelWidthServiceList:{get:function(){return this.panelWidthServiceList},set:function(e){this.setPanelWidthServiceList(e)}}}),methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(r["c"])(["setOpenPanelServiceList","setPanelWidthServiceList","setSelectedService"])),Object(r["b"])("documentList",["ajaxGetDocumentList","resetPageNumberDefault"])),{},{resetPreActivatedService:function(e){this.setSelectedService(this.selectedService.map((function(t,n){return n!==e&&(t=void 0),t})))},createUrlDocumentList:function(e,t,n,i){var a=this.$i18n.locale,s=d()(e,{locale:a}),c=d()(t,{locale:a});return"/".concat(s,"/").concat(n,"/").concat(c,"/").concat(i,"/document-list")}})},m=v,p=n("2877"),h=n("6544"),f=n.n(h),b=n("cd55"),g=n("49e2"),S=n("c865"),L=n("0393"),P=n("132d"),_=n("8860"),k=n("da13"),x=n("5d23"),y=n("1baa"),O=n("34c3"),w=n("f774"),C=n("ba0d"),j=Object(p["a"])(m,o,l,!1,null,null,null),A=j.exports;f()(j,{VExpansionPanel:b["a"],VExpansionPanelContent:g["a"],VExpansionPanelHeader:S["a"],VExpansionPanels:L["a"],VIcon:P["a"],VList:_["a"],VListItem:k["a"],VListItemContent:x["a"],VListItemGroup:y["a"],VListItemIcon:O["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VNavigationDrawer:w["a"],VSlider:C["a"]});var V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"",dense:"",fixed:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){return e.setOpenPanelServiceList(!e.openPanelServiceList)}}}),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:"",href:e.homeUrl}},"v-btn",a,!1),i),[n("v-icon",[e._v("mdi-reload")])],1)]}}])},[n("span",[e._v(e._s(e.$t("message.0")))])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:function(t){e.$vuetify.theme.dark=!e.$vuetify.theme.dark}}},"v-btn",a,!1),i),[n("v-icon",[e._v("mdi-brightness-4")])],1)]}}])},[n("span",[e._v(e._s(e.$t("message.1")))])]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:e.logout}},"v-btn",a,!1),i),[n("v-icon",[e._v("mdi-logout")])],1)]}}])},[n("span",[e._v(e._s(e.$t("message.2")))])])],1)},N=[],D={name:"AppBar",data:function(){return{homeUrl:"/admin",panelServiceList:null}},computed:Object(c["a"])({},Object(r["d"])(["openPanelServiceList"])),methods:Object(c["a"])(Object(c["a"])({},Object(r["c"])(["setUsername","setIsAuthenticated","setOpenPanelServiceList"])),{},{logout:function(){var e=this;this.axios.post("/admin/logout",{}).then((function(t){e.setUsername(".."),e.setIsAuthenticated(!1)})).catch((function(e){console.log(e)}))}})},I=D,$=n("40dc"),B=n("5bc1"),E=n("8336"),U=n("2fa4"),W=n("3a2f"),T=Object(p["a"])(I,V,N,!1,null,null,null),q=T.exports;f()(T,{VAppBar:$["a"],VAppBarNavIcon:B["a"],VBtn:E["a"],VIcon:P["a"],VSpacer:U["a"],VTooltip:W["a"]});var R={name:"App",components:{NavigationBar:A,AppBar:q},computed:Object(c["a"])({},Object(r["d"])(["isStart","username","isAuthenticated","serviceList"])),watch:{isAuthenticated:function(e){this.isStart?this.setIsStart(!1):e?(this.$session.start(),this.$session.set("username",this.username),this.$router.push({name:"home"}),0===this.serviceList.length&&this.getServiceList()):(this.setSelectedService([]),this.setServiceList([]),this.$session.destroy(),this.$router.push("/sign-in"))}},methods:Object(c["a"])(Object(c["a"])({},Object(r["c"])(["setIsStart","setUsername","setIsAuthenticated","setSelectedService","setServiceList"])),{},{getServiceList:function(){var e=this;this.axios.get("/admin/service-list").then((function(t){var n=t.data,i=n.service_list.length;if(i>0){for(var a=[],s=0;s<i;s++)a.push(void 0);e.setSelectedService(a),e.setServiceList(n.service_list)}else console.log("No data available")})).catch((function(e){console.log(e)}))}}),created:function(){this.$session.exists()?(this.setUsername(this.$session.get("username")),this.setIsAuthenticated(!0),this.getServiceList()):(this.setIsStart(!1),this.setUsername(".."),this.setSelectedService([]),this.setServiceList([]))}},G=R,M=(n("034f"),n("7496")),Q=n("f6c4"),F=Object(p["a"])(G,a,s,!1,null,null,null),H=F.exports;f()(F,{VApp:M["a"],VMain:Q["a"]});var J=n("a925"),K=(n("45fc"),n("d3b7"),n("8c4f")),z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("v-row",{staticClass:"text-center"},[i("v-col",{staticClass:"mt-16 mb-5",attrs:{cols:"12"}},[i("v-img",{attrs:{src:n("9b19"),contain:"",height:"140"}})],1),i("v-col",{attrs:{cols:"12"}},[i("h1",{staticClass:"text-h4 font-weight-bold mb-3",domProps:{textContent:e._s(e.$t("message.11")+", "+e.username+".")}}),i("p",{staticClass:"text-h5 font-weight-regular orange--text",domProps:{textContent:e._s(e.$t("message.12"))}})])],1)],1)},X=[],Y={name:"Home",computed:Object(c["a"])({},Object(r["d"])(["username"]))},Z=Y,ee=n("62ad"),te=n("a523"),ne=n("adda"),ie=n("0fd9"),ae=Object(p["a"])(Z,z,X,!1,null,null,null),se=ae.exports;f()(ae,{VCol:ee["a"],VContainer:te["a"],VImg:ne["a"],VRow:ie["a"]}),i["a"].use(K["a"]);var ce=[{path:"/",name:"home",component:se,meta:{authRequired:!0}},{path:"/sign-in",name:"signin",component:function(){return Promise.all([n.e("chunk-dbb8d5b0"),n.e("chunk-207d5f71")]).then(n.bind(null,"4a33"))}},{path:"/:service/:indexService/:collection/:indexCollection/document-list",name:"documentList",component:function(){return Promise.all([n.e("chunk-dbb8d5b0"),n.e("chunk-85a819ce")]).then(n.bind(null,"898f"))},meta:{authRequired:!0}},{path:"/:service/:indexService/:collection/:indexCollection/document/:indexDoc",name:"documenForm",component:function(){return Promise.all([n.e("chunk-dbb8d5b0"),n.e("chunk-e1850f6a")]).then(n.bind(null,"ab20"))},meta:{authRequired:!0}},{path:"*",name:"notFound",component:function(){return n.e("chunk-54b2b4a8").then(n.bind(null,"9703"))},meta:{authRequired:!0}}],re=new K["a"]({mode:"history",base:"/admin/",routes:ce});re.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.authRequired}))?i["a"].prototype.$session.exists()?n():n({path:"/sign-in"}):n()}));var oe=re,le={setIsStart:function(e,t){e.isStart=t},setIsAuthenticated:function(e,t){e.isAuthenticated=t},setUsername:function(e,t){e.username=t},setOpenPanelServiceList:function(e,t){e.openPanelServiceList=t},setPanelWidthServiceList:function(e,t){e.panelWidthServiceList=t},setSelectedService:function(e,t){e.selectedService=t},setServiceList:function(e,t){e.serviceList=t}},ue={},de=(n("b64b"),{namespaced:!0,state:{documents:[],currentPageNumber:1,pagesNumber:0,searchQuery:null,blockPagination:!1,blockLoadDocs:!1},getters:{},mutations:{setDocuments:function(e,t){e.documents=t},setCurrentPageNumber:function(e,t){e.currentPageNumber=t},setPagesNumber:function(e,t){e.pagesNumber=t},setSearchQuery:function(e,t){e.searchQuery=t},setBlockPagination:function(e,t){e.blockPagination=t},setBlockLoadDocs:function(e,t){e.blockLoadDocs=t}},actions:{ajaxGetDocumentList:function(e){var t,n=e.state,a=e.commit,s=e.rootState,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!n.blockLoadDocs&&s.serviceList.length>0&&(a("setBlockLoadDocs",!0),t=Object.keys(c).length>0?s.serviceList[c.indexService].collections[c.indexCollection]:s.serviceList[oe.currentRoute.params.indexService].collections[oe.currentRoute.params.indexCollection],i["a"].axios.get("/admin/document-list",{params:{model_key:t.model_key,field_name:t.doc_name.field,page_num:n.currentPageNumber,search_query:n.searchQuery||""}}).then((function(e){var t=e.data;t.documents.length>0?(a("setPagesNumber",t.pages_number),a("setDocuments",t.documents)):console.log("No data available")})).catch((function(e){console.log(e)})).then((function(){a("setBlockLoadDocs",!1)})))},resetPageNumberDefault:function(e){var t=e.commit;t("setBlockPagination",!0),t("setCurrentPageNumber",1),t("setBlockPagination",!1)}}});i["a"].use(r["a"]);var ve=new r["a"].Store({state:{isStart:!0,isAuthenticated:!1,username:"..",openPanelServiceList:null,panelWidthServiceList:360,selectedService:[],serviceList:[]},mutations:le,actions:ue,modules:{documentList:de}}),me={message:{0:"Reload panel",1:"Light or Dark theme",2:"Logout",3:"Search",4:"Is delete selected documents ?",5:"Username",6:"Password",7:"Username is required.",8:"Password is required.",9:"Sign in",10:"Clear",11:"Welcome",12:"Good luck on your business !",13:"Delete document",14:"Save and create a new document",15:"Save and continue editing the document",16:"Save document",17:"Time",18:"Close",19:"Save",20:"Remove irrelevant items",21:"Delete",22:"Add new list item",23:"Title",24:"Value",25:"Create a new document",26:"New document",27:"Access denied",28:"Access allowed"}},pe={message:{0:"Перезагрузить панель",1:"Светлая или темная тема",2:"Выйти",3:"Поиск",4:"Удалить выбранные документы ?",5:"Имя пользователя",6:"Пароль",7:"Требуется имя пользователя.",8:"Требуется пароль.",9:"Войти",10:"Очистить",11:"Добро пожаловать",12:"Успеха Вам, в ваших делах !",13:"Удалить документ",14:"Сохранить и создать новый документ",15:"Сохранить и продолжить редактировать документ",16:"Сохранить документ",17:"Время",18:"Закрыть",19:"Сохранить",20:"Удалите ненужные элементы",21:"Удалить",22:"Добавить новый элемент списка",23:"Название",24:"Значение",25:"Создать новый документ",26:"Новый документ",27:"В доступе отказано",28:"Доступ разрешен"}},he={en:me,ru:pe},fe=n("f309");i["a"].use(fe["a"]);var be={icons:{iconfont:"mdi"}},ge=new fe["a"](be),Se=(n("744d"),n("bc3a")),Le=n.n(Se),Pe=n("2106"),_e=n.n(Pe),ke=n("0628"),xe=n.n(ke);i["a"].config.productionTip=!1,i["a"].config.devtools=!1,i["a"].config.debug=!1,i["a"].config.silent=!0,i["a"].use(J["a"]),i["a"].use(_e.a,Le.a),i["a"].use(xe.a,{persist:!0});var ye=new J["a"]({locale:"en",fallbackLocale:"en",messages:he});new i["a"]({router:oe,store:ve,i18n:ye,vuetify:ge,render:function(e){return e(H)}}).$mount("#app")},"744d":function(e,t,n){},"85ec":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.ffa5eefe.svg"}});
//# sourceMappingURL=app-legacy.ba435ebe.js.map