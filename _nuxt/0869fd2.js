(window.webpackJsonp=window.webpackJsonp||[]).push([[13,8,9,10,11],{395:function(t,e,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("7132a15d",content,!0,{sourceMap:!1})},396:function(t,e,n){var o=n(20)(!1);o.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=o},400:function(t,e,n){"use strict";n(12),n(9),n(11),n(4),n(13),n(10),n(14);var o=n(2),r=(n(395),n(25));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=r.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},401:function(t,e,n){"use strict";n(397);var o=n(0);e.a=Object(o.h)("spacer","div","v-spacer")},403:function(t,e,n){"use strict";n.r(e);var o=n(404),r=n.n(o);for(var l in o)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},404:function(t,e){},419:function(t,e,n){"use strict";n.r(e);var o=n(439),r=n(426),l=n(251),c=n(438),d=n(384),h=n(199),f=n(99),v=n(98),m=n(0),w=n(7),y=Object(w.a)(h.a,Object(f.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:v.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(m.g)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(m.g)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),_=y.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=y.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),x=n(386),k={data:function(){return{show:!1,skills:[{icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",title:"Laravel",proficiency:"90%"},{icon:"https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png",title:"Nuxt Js",proficiency:"70%"},{icon:"https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",title:"Node Js",proficiency:"50%"},{icon:"https://w7.pngwing.com/pngs/751/3/png-transparent-logo-php-html-others-text-trademark-logo-thumbnail.png",title:"PHP",proficiency:"70%"},{icon:"https://pngimg.com/uploads/mysql/mysql_PNG29.png",title:"MySQL",proficiency:"80%"},{icon:"https://ih1.redbubble.net/image.2107976074.2036/st,small,845x845-pad,1000x1000,f8f8f8.jpg",title:"AWS services",proficiency:"50%"},{icon:"https://w7.pngwing.com/pngs/362/1/png-transparent-microsoft-visual-studio-code-alt-macos-bigsur-icon-thumbnail.png",title:"VSCode",proficiency:""},{icon:"https://www.nicepng.com/png/detail/776-7760129_update-native-postman-on-ubuntu-postman-tool.png",title:"Postman",proficiency:""}]}}},T=n(64),component=Object(T.a)(k,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"portfolio"}},[e(l.a,{attrs:{src:"https://pranavkamble.in/img/portfolio/bg-3.jpg"}},[e(c.a,{staticClass:"pa-5",attrs:{"no-gutters":""}},[e(x.a,{attrs:{color:"deep-purple accent-4",right:"","align-with-title":""}},[e(d.a,[t._v("All")]),t._v(" "),e(d.a,[t._v("Admin Panel")]),t._v(" "),e(d.a,[t._v("Websites")]),t._v(" "),e(d.a,[t._v("Apps")]),t._v(" "),t._l(4,(function(n){return e(_,{key:n},[e(r.a,{attrs:{fluid:""}},[e(c.a,t._l(6,(function(i){return e(o.a,{key:i,attrs:{cols:"12",md:"4"}},[e(l.a,{attrs:{"max-width":"256","max-heigth":"256",src:"https://pranavkamble.in/img/projects/T-1.PNG","lazy-src":"https://pranavkamble.in/img/projects/T-1.PNG"}})],1)})),1)],1)],1)}))],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},420:function(t,e,n){"use strict";n.r(e);var o=n(251),r={data:function(){return{}}},l=n(64),component=Object(l.a)(r,(function(){return(0,this._self._c)(o.a,{attrs:{height:"100vh",src:"https://pranavkamble.in/img/portfolio/bgcar.jpg"}})}),[],!1,null,null,null);e.default=component.exports},421:function(t,e,n){"use strict";n.r(e);var o=n(185),r=n(389),l=n(387),c=n(439),d=n(400),h=n(126),f=n(184),v=n(251),m=n(438),w=n(401),y=(n(9),n(50),{data:function(){return{show:!1,experience:[{icon:"/images/indigital.png",title:"Associate Software Engineer",description:"Working at Indigital Technologies as Associate Software Engineer. Indigital Technologies is a research based digital healthcare technology company with 3 provisional patents on our name having offices in India, USA and UAE."},{icon:"/images/home.png",title:" Software Developer Intern",description:"Hands on experience on LMS & E-Leraning website which is developed in HTML, CSS, JAVASCRIPT, PHP. Worked as a part of team of 3 members and added some security features in existing website."},{icon:"/images/freelance.jpg",title:"Freelancer",description:"Freelance for various companies like E-commerce Tender Alerts Web Application for BSSP technology, Nashik. Also static profile websites for Global Arey trending Comppany."}]}}}),_=n(64),component=Object(_.a)(y,(function(){var t=this,e=t._self._c;return e("div",[e(v.a,{attrs:{src:"https://pranavkamble.in/img/portfolio/bg-1.jpg"}},[e(m.a,{staticClass:"pa-5",attrs:{"no-gutters":""}},t._l(t.experience,(function(n,i){return e(c.a,{key:i,attrs:{cols:"6",md:"4"}},[e(r.a,{staticClass:"mx-auto pa-2 mt-5",attrs:{rounded:"","max-width":"344"}},[e(v.a,{attrs:{src:n.icon,height:"200px"}}),t._v(" "),e(l.d,[t._v("\r\n                        "+t._s(n.title)+"\r\n                    ")]),t._v(" "),e(l.a,[e(o.a,{attrs:{color:"orange lighten-2",text:""},on:{click:function(e){t.show=!t.show}}},[t._v("\r\n                            Explore\r\n                        ")]),t._v(" "),e(w.a),t._v(" "),e(o.a,{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[e(f.a,[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),t._v(" "),e(h.a,[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[e(d.a),t._v(" "),e(l.c,[t._v("\r\n                                "+t._s(n.description)+"\r\n                            ")])],1)])],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},422:function(t,e,n){"use strict";n.r(e);var o=n(389),r=n(387),l=n(439),c=n(426),d=n(251),h=n(183),f=n(438),v={data:function(){return{show:!1,skills:[{icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",title:"Laravel",proficiency:"90%"},{icon:"https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png",title:"Nuxt Js",proficiency:"70%"},{icon:"https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",title:"Node Js",proficiency:"50%"},{icon:"https://w7.pngwing.com/pngs/751/3/png-transparent-logo-php-html-others-text-trademark-logo-thumbnail.png",title:"PHP",proficiency:"70%"},{icon:"https://pngimg.com/uploads/mysql/mysql_PNG29.png",title:"MySQL",proficiency:"80%"},{icon:"https://ih1.redbubble.net/image.2107976074.2036/st,small,845x845-pad,1000x1000,f8f8f8.jpg",title:"AWS services",proficiency:"50%"},{icon:"https://w7.pngwing.com/pngs/362/1/png-transparent-microsoft-visual-studio-code-alt-macos-bigsur-icon-thumbnail.png",title:"VSCode",proficiency:""},{icon:"https://www.nicepng.com/png/detail/776-7760129_update-native-postman-on-ubuntu-postman-tool.png",title:"Postman",proficiency:""}]}}},m=n(64),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e(d.a,{attrs:{src:"https://pranavkamble.in/img/portfolio/bg-3.jpg"}},[e(c.a,{staticClass:"lighten-5"},[e(f.a,{attrs:{"no-gutters":""}},[t._l(t.skills,(function(n,i){return[e(l.a,{key:i,staticClass:"pa-3"},[e(o.a,{staticClass:"pa-2 lighten-2 fill-height d-flex flex-column justify-center align-center",attrs:{height:"230","max-width":"344",outlined:"",tile:""}},[e("div",{staticClass:"skill-item"},[e(d.a,{attrs:{width:"100",src:n.icon}}),t._v(" "),e(r.c,[e("h2",[e("span",{staticClass:"counter"},[t._v(t._s(n.proficiency))])])])],1)])],1),t._v(" "),3===i?e(h.a,{key:"width-".concat(i),attrs:{width:"100%"}}):t._e()]}))],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},423:function(t,e,n){"use strict";n.r(e);var o=n(185),r=n(389),l=n(387),c=n(439),d=n(400),h=n(126),f=n(184),v=n(251),m=n(438),w=n(401),y={data:function(){return{show:!1,items:[{icon:"mdi-apps",title:"DEPLOY LARAVEL 8 APPLICATION ON SHARED HOSTING",to:"/blog/larave8"}]}}},_=n(64),component=Object(_.a)(y,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"blogs"}},[e(v.a,{attrs:{src:"https://pranavkamble.in/img/portfolio/bg-stats.jpg"}},[e(m.a,{staticClass:"pa-5",attrs:{"no-gutters":""}},t._l(t.items,(function(n,i){return e(c.a,{key:i,attrs:{router:"",exact:"",cols:"8",md:"4",sm:"4"}},[e(r.a,{staticClass:"mx-auto pa-2 mt-5 justify-center",attrs:{"max-width":"330"}},[e(v.a,{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"200px"}}),t._v(" "),e(l.d,[t._v("\r\n                        "+t._s(n.title)+"\r\n                    ")]),t._v(" "),e(l.b,[t._v("\r\n                        1,000 miles of wonder\r\n                    ")]),t._v(" "),e(l.a,[e(o.a,{attrs:{color:"orange lighten-2",text:""}},[t._v("\r\n                            Explore\r\n                        ")]),t._v(" "),e(w.a),t._v(" "),e(o.a,{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[e(f.a,[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),t._v(" "),e(h.a,[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[e(d.a),t._v(" "),e(l.c,[t._v("\r\n                                The major part is to deploy Laravel application there are so manny options but i choose Cpanel hosting because Capnel hosting is lower in cost and affordable for small scale business.\r\n                                In this blog, I'm trying to explain how we can deploy our production ready laravel 8 application on Cpanel shared hosting with GitHub.\r\n                            ")])],1)])],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},424:function(t,e,n){"use strict";n.r(e);var o=n(185),r=n(389),l=n(387),c=n(440),d=n(441),h=(n(9),n(50),{data:function(){return{show:!1,items:[{color:"purple darken-1",icon:"mdi-star",title:"Tender Alerts India",link:"tenderalertsindia.com",type:"Dynamic",client:"B S S P TECHNOLOGY AND CORPORATE SERVICES PRIVATE LIMITED",technology:"React Js, PHP Laravel",description:"Tender Alerts India Team, With B S S P TECHNOLOGY AND CORPORATE SERVICES PRIVATE LIMITED, are Providing the Services in different fields in different Firm’s name From Last 10 Years, The Whole Team Had An Experienced of more than 10 years in Tender Consulting, and related services. We Have A List of More than 1200 Happy clients with Satisfactory And continues Support. We have An Slogan with “Our Perfection is Our Reputation”, And We had proved that already with proper support to our clients."},{color:"green lighten-1",icon:"mdi-book-variant",title:"Global Arey Trading Comopany",link:"globalarey.in",type:"Static profile",client:"Global Arey Trading Comopany PVT LTD",technology:"HTML, CSS, JavaScript",description:"Established in 2018 Global arey trading company we are wholesaler, trader, exporter best quality product of indian origin. We procure all products from land of farmers which are processed with superior technology in keeping with food industry standards. our products are extensively demanded and cheered delicious decent and healthy and long shelf life, we present with various packaging options according to requirements.We supply both organic and non organic products, we have our own Alphonso Mango farm and also we procure best quality Mangoes from bestsellers in our town.Our Fresh Product we procure from land of farmers who cultivate superior quality of product assurance. We believe in quality and punctuality of delivery."},{color:"red lighten-2",icon:"mdi-airballoon",title:"Universal Fluid Technologies",link:"universalfluid.com",type:"Static profile",client:"Universal Fluid Technologies PVT LTD",technology:"HTML, CSS, JavaScript",description:"UFT is established since 2016 and since beginning its core business was in the semiconductor and Photovoltaic industry but later by increased team, we entered Industrial segment also viz Oil & Gas, Chemicals, Automotive, Alternate Fuel etc. We have been doing installation and trading of Industrial and Ultra High Purity products like valves, fittings, tubes, manifolds, regulators and customise assemblies to our customers in limited regions of India till 2020. Later we took distributorship of TK-Fujikin, a Japanese Korean joint venture company and established team in major cities of India to provide timely services and quality product in right applications all over India."},{color:"indigo",icon:"mdi-buffer",title:"Prnav Kamble",link:"pranavkamble.in",type:"Static profile",client:"Personal Profile Website",technology:"Nuxt Js, Vuetify",description:"This is my personal profile website"}]}}}),f=n(64),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"projects"}},[e(c.a,{staticClass:"pa-5",attrs:{"align-top":"",dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.items,(function(n,i){return e(d.a,{key:i,attrs:{color:n.color,icon:n.icon,"fill-dot":""}},[e(r.a,{attrs:{color:n.color,dark:""}},[e(l.d,{staticClass:"text-h6"},[t._v("\r\n                   "+t._s(n.title)+"\r\n                ")]),t._v(" "),e(l.c,{staticClass:"white text--primary"},[e("p",[t._v(t._s(n.description))]),t._v(" "),e(o.a,{staticClass:"mx-0",attrs:{color:n.color,outlined:""}},[t._v("\r\n                        Button\r\n                    ")])],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports},425:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{show:!1,items:[{icon:"mdi-apps",title:"About",to:"/"},{icon:"mdi-domain",title:"Experience",to:"/experience"},{icon:"mdi-chart-bubble",title:"Portfolio",to:"/portfolio"},{icon:"mdi-chart-bubble",title:"Skills",to:"/skills"},{icon:"mdi-chart-bubble",title:"Blogs",to:"/blogs"},{icon:"mdi-chart-bubble",title:"Projects",to:"/projects"},{icon:"mdi-chart-bubble",title:"Contact",to:"/contact"},{icon:"mdi-chart-bubble",title:"Hire Me",to:"/hireme"}]}}},r=n(64),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{attrs:{id:"map"}},[t("div",{staticClass:"map-responsive"},[t("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769.4081526354655!2d73.08211231472022!3d19.230676998093987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7be1caeeb7c25%3A0xd3007bf520b0060e!2sShri%20Ganesh%20Sankul!5e0!3m2!1sen!2sin!4v1636368411431!5m2!1sen!2sin",width:"100%",height:"450",allowfullscreen:"",loading:"lazy"}})])])}],!1,null,null,null);e.default=component.exports},426:function(t,e,n){"use strict";n(11),n(4),n(12),n(77),n(36),n(397),n(399),n(79),n(86);var o=n(1);var r,l=n(106);e.a=(r="container",o.a.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,o=e.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,o=e.props,data=e.data,r=e.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),r)}})},436:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return l}));var o=n(400),r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("Landing",{attrs:{id:"about"}}),t._v(" "),e(o.a),t._v(" "),e("Experience",{attrs:{id:"experience"}}),t._v(" "),e(o.a),t._v(" "),e("Skills",{attrs:{id:"skills"}}),t._v(" "),e(o.a),t._v(" "),e("Portfolio",{attrs:{id:"portfolio"}}),t._v(" "),e(o.a),t._v(" "),e("Blogs",{attrs:{id:"blogs"}}),t._v(" "),e(o.a),t._v(" "),e("Projects",{attrs:{id:"projects"}}),t._v(" "),e(o.a),t._v(" "),e("Maps",{attrs:{id:"maps"}})],1)},l=[]},437:function(t,e,n){"use strict";n.r(e);var o=n(436),r=n(403);for(var l in r)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(l);var c=n(64),component=Object(c.a)(r.default,o.a,o.b,!1,null,null,null);e.default=component.exports,installComponents(component,{Landing:n(420).default,Experience:n(421).default,Skills:n(422).default,Portfolio:n(419).default,Blogs:n(423).default,Projects:n(424).default,Maps:n(425).default})}}]);