(function(e){function t(t){for(var s,a,r=t[0],c=t[1],u=t[2],l=0,d=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);v&&v(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,a=1;a<n.length;a++){var r=n[a];0!==i[r]&&(s=!1)}s&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var s={},a={app:0},i={app:0},o=[];function r(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-54b2b4a8":"f736d5f2","chunk-dbb8d5b0":"525d8181","chunk-207d5f71":"2b71d75a","chunk-85a819ce":"065f7fe1","chunk-e1850f6a":"7b7d164b"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-dbb8d5b0":1,"chunk-207d5f71":1,"chunk-85a819ce":1,"chunk-e1850f6a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var s="css/"+({}[e]||e)+"."+{"chunk-54b2b4a8":"31d6cfe0","chunk-dbb8d5b0":"2a94770c","chunk-207d5f71":"9deb4d24","chunk-85a819ce":"bbbc45e3","chunk-e1850f6a":"10e9be07"}[e]+".css",i=c.p+s,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var u=o[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===i))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===s||l===i)return t()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=t,v.onerror=function(t){var s=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete a[e],v.parentNode.removeChild(v),n(o)},v.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(v)})).then((function(){a[e]=0})));var s=i[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(t,n){s=i[e]=[t,n]}));t.push(s[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(v);var n=i[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",d.name="ChunkLoadError",d.type=s,d.request=a,n[1](d)}i[e]=void 0}};var v=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(n,s,function(t){return e[t]}.bind(null,s));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/admin/contrib/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var v=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[e.isAuthenticated?[n("NavigationBar"),n("AppBar"),n("PopUpMsgs"),n("Overlays")]:e._e(),n("v-main",[n("router-view")],1)],2)},i=[],o=n("5530"),r=n("2f62"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{staticClass:"pa-1",attrs:{app:"",width:e.updatePanelWidthServiceList},model:{value:e.updateOpenPanelServiceList,callback:function(t){e.updateOpenPanelServiceList=t},expression:"updateOpenPanelServiceList"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[e._v(e._s(e.brand))]),n("v-list-item-subtitle",[e._v(e._s(e.slogan))])],1)],1),n("v-list-item",{staticClass:"panel-width-service-list pl-1"},[n("v-list-item-content",[n("v-slider",{staticClass:"panel-width-service-list__slider",attrs:{dense:"","hide-details":"","prepend-icon":"mdi-arrow-split-vertical",min:"256",max:"600"},model:{value:e.updatePanelWidthServiceList,callback:function(t){e.updatePanelWidthServiceList=t},expression:"updatePanelWidthServiceList"}})],1)],1),n("v-expansion-panels",{staticClass:"service-list"},e._l(e.serviceList,(function(t,s){return n("v-expansion-panel",{key:t.service.title},[n("v-expansion-panel-header",{staticClass:"text-subtitle-1 font-weight-medium pl-0"},[n("div",{staticClass:"pl-1 service-list__icon"},[n("v-icon",{staticClass:"pos-relative pos-top-n2",domProps:{textContent:e._s("mdi-"+t.service.icon)}})],1),n("span",{},[e._v(e._s(t.service.title))])]),n("v-expansion-panel-content",{staticClass:"service-list__content"},[n("v-list",{attrs:{shaped:"",dense:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedService[s],callback:function(t){e.$set(e.selectedService,s,t)},expression:"selectedService[indexService]"}},e._l(t.collections,(function(a,i){return n("v-list-item",{key:a.model_key,staticClass:"px-1",attrs:{to:e.createUrlDocumentList(t.service.title,a.title,s,i)},on:{click:function(t){e.resetPageNumberDefault(),e.getDocumentList({indexService:s,indexCollection:i}),e.resetPreActivatedService(s)}}},[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",[e._v("mdi-circle-medium")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-subtitle-1 font-weight-regular",domProps:{textContent:e._s(a.title)}})],1)],1)})),1)],1)],1)],1)})),1)],1)},u=[],l=(n("d81d"),n("99af"),n("d3bd")),d=n.n(l),v={name:"NavigationBar",computed:Object(o["a"])(Object(o["a"])({},Object(r["d"])(["brand","slogan","openPanelServiceList","panelWidthServiceList","selectedService","serviceList"])),{},{updateOpenPanelServiceList:{get:function(){return this.openPanelServiceList},set:function(e){this.setOpenPanelServiceList(e)}},updatePanelWidthServiceList:{get:function(){return this.panelWidthServiceList},set:function(e){this.setPanelWidthServiceList(e)}}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(r["c"])(["setOpenPanelServiceList","setPanelWidthServiceList","setSelectedService"])),Object(r["c"])("documentList",["setSearchQuery"])),Object(r["c"])("popUpMsgs",["setShowMsg"])),Object(r["b"])("documentList",["ajaxGetDocumentList","resetPageNumberDefault"])),Object(r["b"])("popUpMsgs",["runShowMsg"])),Object(r["b"])("overlays",["runShowOverlayPageLockout"])),{},{resetPreActivatedService:function(e){this.setSelectedService(this.selectedService.map((function(t,n){return n!==e&&(t=void 0),t})))},createUrlDocumentList:function(e,t,n,s){var a=this.$i18n.locale,i=d()(e,{locale:a}),o=d()(t,{locale:a});return"/".concat(i,"/").concat(n,"/").concat(o,"/").concat(s,"/document-list")},getDocumentList:function(e){var t=this;this.setShowMsg(!1),this.setSearchQuery(null),this.runShowOverlayPageLockout(!0),this.resetPageNumberDefault(),this.ajaxGetDocumentList(e).catch((function(e){window.console.log(e),t.runShowMsg({text:e,status:"error"})})).then((function(){return t.runShowOverlayPageLockout(!1)}))}})},m=v,p=n("2877"),h=n("6544"),f=n.n(h),g=n("cd55"),b=n("49e2"),S=n("c865"),L=n("0393"),P=n("132d"),O=n("8860"),k=n("da13"),_=n("5d23"),y=n("1baa"),x=n("34c3"),w=n("f774"),j=n("ba0d"),M=Object(p["a"])(m,c,u,!1,null,null,null),C=M.exports;f()(M,{VExpansionPanel:g["a"],VExpansionPanelContent:b["a"],VExpansionPanelHeader:S["a"],VExpansionPanels:L["a"],VIcon:P["a"],VList:O["a"],VListItem:k["a"],VListItemContent:_["a"],VListItemGroup:y["a"],VListItemIcon:x["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VNavigationDrawer:w["a"],VSlider:j["a"]});var V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"",dense:"",fixed:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){return e.setOpenPanelServiceList(!e.openPanelServiceList)}}}),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:"",href:e.homeUrl}},"v-btn",a,!1),s),[n("v-icon",[e._v("mdi-reload")])],1)]}}])},[n("span",[e._v(e._s(e.$t("message.0")))])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:function(t){e.$vuetify.theme.dark=!e.$vuetify.theme.dark}}},"v-btn",a,!1),s),[n("v-icon",[e._v("mdi-brightness-4")])],1)]}}])},[n("span",[e._v(e._s(e.$t("message.1")))])]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:e.logout}},"v-btn",a,!1),s),[n("v-icon",[e._v("mdi-logout")])],1)]}}])},[n("span",[e._v(e._s(e.$t("message.2")))])])],1)},A=[],D={name:"AppBar",data:function(){return{homeUrl:"/admin",panelServiceList:null}},computed:Object(o["a"])({},Object(r["d"])(["openPanelServiceList"])),methods:Object(o["a"])(Object(o["a"])({},Object(r["c"])(["setUsername","setIsAuthenticated","setOpenPanelServiceList"])),{},{logout:function(){var e=this;this.axios.post("/admin/logout",{}).then((function(t){e.setUsername(".."),e.setIsAuthenticated(!1)})).catch((function(e){console.log(e)}))}})},I=D,E=n("40dc"),U=n("5bc1"),$=n("8336"),B=n("2fa4"),N=n("3a2f"),T=Object(p["a"])(I,V,A,!1,null,null,null),W=T.exports;f()(T,{VAppBar:E["a"],VAppBarNavIcon:U["a"],VBtn:$["a"],VIcon:P["a"],VSpacer:B["a"],VTooltip:N["a"]});var q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-snackbar",{attrs:{app:"",top:"",text:"",outlined:"",timeout:"-1",color:e.msgStatus},scopedSlots:e._u([{key:"action",fn:function(t){var s=t.attrs;return[n("v-btn",e._b({attrs:{icon:"",color:e.msgStatus},on:{click:function(t){e.compShowMsg=!1}}},"v-btn",s,!1),[n("v-icon",[e._v("mdi-close")])],1)]}}]),model:{value:e.compShowMsg,callback:function(t){e.compShowMsg=t},expression:"compShowMsg"}},[n("span",{domProps:{innerHTML:e._s(e.textMsg)}})])},R=[],Q={name:"PopUpMsgs",computed:Object(o["a"])(Object(o["a"])({},Object(r["d"])("popUpMsgs",["showMsg","textMsg","msgStatus"])),{},{compShowMsg:{get:function(){return this.showMsg},set:function(e){this.setShowMsg(e)}}}),methods:Object(o["a"])({},Object(r["c"])("popUpMsgs",["setShowMsg"]))},G=Q,H=n("2db4"),F=Object(p["a"])(G,q,R,!1,null,null,null),z=F.exports;f()(F,{VBtn:$["a"],VIcon:P["a"],VSnackbar:H["a"]});var J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-overlay",{attrs:{value:e.overlayPageLockout}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)},K=[],X={name:"Overlays",computed:Object(o["a"])(Object(o["a"])({},Object(r["d"])("overlays",["overlayPageLockout"])),{},{compShowMsg:{get:function(){return this.overlayPageLockout},set:function(e){this.setOverlayPageLockout(e)}}}),methods:Object(o["a"])({},Object(r["c"])("overlays",["setOverlayPageLockout"]))},Y=X,Z=n("a797"),ee=n("490a"),te=Object(p["a"])(Y,J,K,!1,null,null,null),ne=te.exports;f()(te,{VOverlay:Z["a"],VProgressCircular:ee["a"]});var se={name:"App",components:{NavigationBar:C,AppBar:W,PopUpMsgs:z,Overlays:ne},computed:Object(o["a"])({},Object(r["d"])(["isStart","username","isAuthenticated","serviceList"])),watch:{isAuthenticated:function(e){this.isStart?this.setIsStart(!1):e?(this.$session.start(),this.$session.set("username",this.username),this.$router.push({name:"home"}),0===this.serviceList.length&&this.getServiceList()):(this.setSelectedService([]),this.setServiceList([]),this.$session.destroy(),this.$router.push("/sign-in"))}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(r["c"])(["setBrand","setSlogan","setIsStart","setUsername","setIsAuthenticated","setSelectedService","setServiceList"])),Object(r["b"])("popUpMsgs",["runShowMsg"])),{},{getServiceList:function(){var e=this;this.axios.get("/admin/service-list").then((function(t){var n=t.data;if(n.is_authenticated){var s=n.service_list.length;if(e.setBrand(n.brand),e.setSlogan(n.slogan),s>0){for(var a=[],i=0;i<s;i++)a.push(void 0);e.setSelectedService(a),e.setServiceList(n.service_list)}else console.log("No data available"),e.runShowMsg({text:"No data available",status:"warning"})}else e.setIsAuthenticated(!1)})).catch((function(e){console.log(e)}))}}),created:function(){this.$session.exists()?(this.setUsername(this.$session.get("username")),this.setIsAuthenticated(!0),this.getServiceList()):(this.setIsStart(!1),this.setUsername(".."),this.setSelectedService([]),this.setServiceList([]))}},ae=se,ie=(n("034f"),n("7496")),oe=n("f6c4"),re=Object(p["a"])(ae,a,i,!1,null,null,null),ce=re.exports;f()(re,{VApp:ie["a"],VMain:oe["a"]});var ue=n("a925"),le=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),de=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-row",{staticClass:"text-center"},[s("v-col",{staticClass:"mt-16 mb-5",attrs:{cols:"12"}},[s("v-img",{attrs:{src:n("9b19"),contain:"",height:"140"}})],1),s("v-col",{attrs:{cols:"12"}},[s("h1",{staticClass:"text-h4 font-weight-bold mb-3",domProps:{textContent:e._s(e.$t("message.11")+", "+e.username+".")}}),s("p",{staticClass:"text-h5 font-weight-regular orange--text",domProps:{textContent:e._s(e.$t("message.12"))}})])],1)],1)},ve=[],me={name:"Home",computed:Object(o["a"])({},Object(r["d"])(["username"]))},pe=me,he=n("62ad"),fe=n("a523"),ge=n("adda"),be=n("0fd9"),Se=Object(p["a"])(pe,de,ve,!1,null,null,null),Le=Se.exports;f()(Se,{VCol:he["a"],VContainer:fe["a"],VImg:ge["a"],VRow:be["a"]}),s["a"].use(le["a"]);var Pe=[{path:"/",name:"home",component:Le,meta:{authRequired:!0}},{path:"/sign-in",name:"signin",component:function(){return Promise.all([n.e("chunk-dbb8d5b0"),n.e("chunk-207d5f71")]).then(n.bind(null,"4a33"))}},{path:"/:service/:indexService/:collection/:indexCollection/document-list",name:"documentList",component:function(){return Promise.all([n.e("chunk-dbb8d5b0"),n.e("chunk-85a819ce")]).then(n.bind(null,"898f"))},meta:{authRequired:!0}},{path:"/:service/:indexService/:collection/:indexCollection/document/:indexDoc",name:"documenForm",component:function(){return Promise.all([n.e("chunk-dbb8d5b0"),n.e("chunk-e1850f6a")]).then(n.bind(null,"ab20"))},meta:{authRequired:!0}},{path:"*",name:"notFound",component:function(){return n.e("chunk-54b2b4a8").then(n.bind(null,"9703"))},meta:{authRequired:!0}}],Oe=new le["a"]({mode:"history",base:"/admin/",routes:Pe});Oe.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.authRequired}))?s["a"].prototype.$session.exists()?n():n({path:"/sign-in"}):n()}));var ke=Oe,_e={setBrand:function(e,t){e.brand=t},setSlogan:function(e,t){e.slogan=t},setIsStart:function(e,t){e.isStart=t},setIsAuthenticated:function(e,t){e.isAuthenticated=t},setUsername:function(e,t){e.username=t},setOpenPanelServiceList:function(e,t){e.openPanelServiceList=t},setPanelWidthServiceList:function(e,t){e.panelWidthServiceList=t},setSelectedService:function(e,t){e.selectedService=t},setServiceList:function(e,t){e.serviceList=t},setShowErrMsg:function(e,t){e.showErrMsg=t},setTextErrMsg:function(e,t){e.textErrMsg=t}},ye={},xe=(n("b64b"),{namespaced:!0,state:{documents:[],currentPageNumber:1,pageCount:0,searchQuery:null,blockPagination:!1,blockLoadDocs:!1},getters:{},mutations:{setDocuments:function(e,t){e.documents=t},setCurrentPageNumber:function(e,t){e.currentPageNumber=t},setPageCount:function(e,t){e.pageCount=t},setSearchQuery:function(e,t){e.searchQuery=t},setBlockPagination:function(e,t){e.blockPagination=t},setBlockLoadDocs:function(e,t){e.blockLoadDocs=t}},actions:{ajaxGetDocumentList:function(e){var t=e.state,n=e.commit,a=e.dispatch,i=e.rootState,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(e,r){var c;!t.blockLoadDocs&&i.serviceList.length>0&&(n("setBlockLoadDocs",!0),c=Object.keys(o).length>0?i.serviceList[o.indexService].collections[o.indexCollection]:i.serviceList[ke.currentRoute.params.indexService].collections[ke.currentRoute.params.indexCollection],s["a"].axios.get("/admin/document-list",{params:{model_key:c.model_key,field_name:c.doc_name.field,page_num:t.currentPageNumber,search_query:t.searchQuery||""}}).then((function(e){var t=e.data;t.is_authenticated?0===t.msg_err.length?(n("setPageCount",t.page_count),n("setDocuments",t.documents)):(console.log(t.msg_err),a("popUpMsgs/runShowMsg",{text:t.msg_err,status:"error"})):n("setIsAuthenticated",!1,{root:!0})})).catch((function(e){r(e)})).then((function(){n("setBlockLoadDocs",!1),e()})))}))},resetPageNumberDefault:function(e){var t=e.commit;t("setBlockPagination",!0),t("setCurrentPageNumber",1),t("setBlockPagination",!1)}}}),we={namespaced:!0,state:{showMsg:!1,textMsg:"",msgStatus:"info"},getters:{},mutations:{setShowMsg:function(e,t){e.showMsg=t},setTextMsg:function(e,t){e.textMsg=t},setMsgStatus:function(e,t){e.msgStatus=t}},actions:{runShowMsg:function(e,t){var n=e.commit;n("setTextMsg",t.text),n("setShowMsg",!0),n("setMsgStatus",t.status)}}},je={namespaced:!0,state:{overlayPageLockout:!1},getters:{},mutations:{setOverlayPageLockout:function(e,t){e.overlayPageLockout=t}},actions:{runShowOverlayPageLockout:function(e,t){var n=e.commit;t?n("setOverlayPageLockout",t):setTimeout((function(){return n("setOverlayPageLockout",t)}),400)}}};s["a"].use(r["a"]);var Me=new r["a"].Store({state:{brand:"",slogan:"",isStart:!0,isAuthenticated:!1,username:"..",openPanelServiceList:null,panelWidthServiceList:360,selectedService:[],serviceList:[]},mutations:_e,actions:ye,modules:{documentList:xe,popUpMsgs:we,overlays:je}}),Ce={message:{0:"Reload panel",1:"Light or Dark theme",2:"Logout",3:"Search",4:"Is delete selected documents ?",5:"Username",6:"Password",7:"Username is required.",8:"Password is required.",9:"Sign in",10:"Clear",11:"Welcome",12:"Good luck on your business !",13:"Delete document",14:"Save and create a new document",15:"Save and continue editing the document",16:"Save document",17:"Time",18:"Close",19:"Save",20:"Remove irrelevant items",21:"Delete",22:"Add new list item",23:"Title",24:"Value",25:"Create a new document",26:"New document",27:"Access denied",28:"Size",29:"Created",30:"Updated",31:"Delete file",32:"Delete image"}},Ve={message:{0:"Перезагрузить панель",1:"Светлая или темная тема",2:"Выйти",3:"Поиск",4:"Удалить выбранные документы ?",5:"Имя пользователя",6:"Пароль",7:"Требуется имя пользователя.",8:"Требуется пароль.",9:"Войти",10:"Очистить",11:"Добро пожаловать",12:"Успеха Вам, в ваших делах !",13:"Удалить документ",14:"Сохранить и создать новый документ",15:"Сохранить и продолжить редактировать документ",16:"Сохранить документ",17:"Время",18:"Закрыть",19:"Сохранить",20:"Удалите ненужные элементы",21:"Удалить",22:"Добавить новый элемент списка",23:"Название",24:"Значение",25:"Создать новый документ",26:"Новый документ",27:"В доступе отказано",28:"Размер",29:"Создан",30:"Обновлен",31:"Удалить файл",32:"Удалить изображение"}},Ae={en:Ce,ru:Ve},De=n("f309");s["a"].use(De["a"]);var Ie={icons:{iconfont:"mdi"}},Ee=new De["a"](Ie),Ue=(n("744d"),n("bc3a")),$e=n.n(Ue),Be=n("2106"),Ne=n.n(Be),Te=n("0628"),We=n.n(Te);s["a"].config.productionTip=!1,s["a"].config.devtools=!1,s["a"].config.debug=!1,s["a"].config.silent=!0,s["a"].use(ue["a"]),s["a"].use(Ne.a,$e.a),s["a"].use(We.a,{persist:!0});var qe=new ue["a"]({locale:"en",fallbackLocale:"en",messages:Ae});new s["a"]({router:ke,store:Me,i18n:qe,vuetify:Ee,render:function(e){return e(ce)}}).$mount("#app")},"744d":function(e,t,n){},"85ec":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.ffa5eefe.svg"}});
//# sourceMappingURL=app.536f2b81.js.map