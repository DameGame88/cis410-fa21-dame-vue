(function(e){function t(t){for(var c,o,l=t[0],i=t[1],s=t[2],b=0,j=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&j.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);u&&u(t);while(j.length)j.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1071:function(e,t,n){"use strict";n("3f03")},"215a":function(e,t,n){},"3f03":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={class:"container-fluid"},a={class:"row justify-content-center"},o={class:"col-md-10 col-lg-7"};function l(e,t,n,l,i,s){var u=Object(c["z"])("my-header"),b=Object(c["z"])("router-view");return Object(c["s"])(),Object(c["f"])(c["a"],null,[Object(c["j"])(u),Object(c["g"])("div",r,[Object(c["g"])("div",a,[Object(c["g"])("div",o,[Object(c["j"])(b)])])])],64)}var i=function(e){return Object(c["v"])("data-v-5f128ada"),e=e(),Object(c["t"])(),e},s={class:"navbar navbar-expand-lg navbar-light bg-light"},u={class:"container-fluid"},b=Object(c["i"])("EJuice Reviews"),j=i((function(){return Object(c["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["g"])("span",{class:"navbar-toggler-icon"})],-1)})),p={class:"collapse navbar-collapse",id:"navbarNav"},O={class:"navbar-nav ms-auto"},g={class:"nav-item"},d=Object(c["i"])("EJuice"),f={key:0,class:"nav-item"},m=Object(c["i"])("My Account"),v={key:1,class:"nav-item"},h=i((function(){return Object(c["g"])("button",{class:"btn btn-warning"},"Login",-1)})),y={key:2,class:"nav-item"},w=i((function(){return Object(c["g"])("button",{class:"btn btn-outline-warning text-dark"}," Signup ",-1)})),k={key:3,class:"nav-item"};function _(e,t,n,r,a,o){var l=Object(c["z"])("router-link");return Object(c["s"])(),Object(c["f"])("nav",s,[Object(c["g"])("div",u,[Object(c["j"])(l,{class:"navbar-brand",to:"/"},{default:Object(c["F"])((function(){return[b]})),_:1}),j,Object(c["g"])("div",p,[Object(c["g"])("ul",O,[Object(c["g"])("li",g,[Object(c["j"])(l,{class:"nav-link active","aria-current":"page",to:"/ejuice"},{default:Object(c["F"])((function(){return[d]})),_:1})]),o.auth?(Object(c["s"])(),Object(c["f"])("li",f,[Object(c["j"])(l,{class:"nav-link active","aria-current":"page",to:"/account"},{default:Object(c["F"])((function(){return[m]})),_:1})])):Object(c["e"])("",!0),o.auth?Object(c["e"])("",!0):(Object(c["s"])(),Object(c["f"])("li",v,[Object(c["j"])(l,{class:"nav-link active","aria-current":"page",to:"/login"},{default:Object(c["F"])((function(){return[h]})),_:1})])),o.auth?Object(c["e"])("",!0):(Object(c["s"])(),Object(c["f"])("li",y,[Object(c["j"])(l,{class:"nav-link active","aria-current":"page",to:"/signup"},{default:Object(c["F"])((function(){return[w]})),_:1})])),o.auth?(Object(c["s"])(),Object(c["f"])("li",k,[Object(c["g"])("button",{class:"btn btn-warning",onClick:t[0]||(t[0]=function(){return o.onLogout&&o.onLogout.apply(o,arguments)})},"Logout")])):Object(c["e"])("",!0)])])])])}var E={computed:{auth:function(){return this.$store.state.token}},methods:{onLogout:function(){this.$store.dispatch("logout")}}},S=(n("f981"),n("6b0d")),x=n.n(S);const B=x()(E,[["render",_],["__scopeId","data-v-5f128ada"]]);var F=B,J={name:"App",components:{"my-header":F},created:function(){this.$store.dispatch("getEJuice")}};n("6909");const R=x()(J,[["render",l]]);var P=R,U=n("bc3a"),L=n.n(U),$=n("6c02"),z=Object(c["h"])('<h1>Home</h1><div class="my-container"><img src="https://cdn.shopify.com/s/files/1/0105/9314/0836/files/Bombay_logo_21_final_new_540x.jpg?v=1630430224"><img src="https://cdn.shopify.com/s/files/1/0105/9314/0836/files/New_store_photo_3_540x.jpg?v=1637019063"><img src="https://cdn.shopify.com/s/files/1/0105/9314/0836/files/New_Store_Photo_1_540x.jpg?v=1637018879"><img src="https://cdn.shopify.com/s/files/1/0105/9314/0836/files/Bombay_logo_21_final_new_540x.jpg?v=1630430224"><img src="https://cdn.shopify.com/s/files/1/0105/9314/0836/files/Bombay_logo_21_final_new_540x.jpg?v=1630430224"><img src="https://cdn.shopify.com/s/files/1/0105/9314/0836/files/New_store_photo_2_540x.jpg?v=1637018981"></div>',2),N=[z];function A(e,t,n,r,a,o){return Object(c["s"])(),Object(c["f"])("div",null,N)}var D={};const M=x()(D,[["render",A]]);var q=M,G=Object(c["g"])("h1",null,"Login",-1),V={key:0,class:"alert alert-success"},C={class:"mb-3"},I=Object(c["g"])("label",{for:"email-input",class:"form-label"},"Password",-1),K={class:"mb-3"},T=Object(c["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),H=Object(c["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Z={key:0,class:"form-text text-danger"},Q={key:1,class:"form-text text-danger"};function W(e,t,n,r,a,o){return Object(c["s"])(),Object(c["f"])("div",null,[G,this.$route.query.signupsuccess?(Object(c["s"])(),Object(c["f"])("div",V," Thanks for signing up, please log in now. ")):Object(c["e"])("",!0),Object(c["g"])("form",{onSubmit:t[2]||(t[2]=Object(c["H"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[Object(c["g"])("div",C,[I,Object(c["G"])(Object(c["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.email=e})},null,512),[[c["D"],a.email]])]),Object(c["g"])("div",K,[T,Object(c["G"])(Object(c["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[c["D"],a.password]])]),H,a.credentialsError?(Object(c["s"])(),Object(c["f"])("p",Z," Invalid Credentials ")):Object(c["e"])("",!0),a.loginError?(Object(c["s"])(),Object(c["f"])("p",Q," Could not log you in, please try again later ")):Object(c["e"])("",!0)],32)])}n("ac1f"),n("5319");var X={data:function(){return{email:"",password:"",loginError:!1,credentialsError:!1}},methods:{onSubmit:function(){var e=this,t={email:this.email,password:this.password};L.a.post("/customer/login",t).then((function(t){e.$store.commit("storeTokenInApp",t.data.token),e.$store.commit("storeUserInApp",t.data.user),e.$router.replace("/account")})).catch((function(t){console.log("error in /customer/login",t),401==t.response.status?e.credentialsError=!0:e.loginError=!0}))}}};const Y=x()(X,[["render",W]]);var ee=Y,te={class:"card"},ne={class:"card-body"},ce={class:"text-primary"},re=Object(c["g"])("br",null,null,-1),ae=Object(c["i"])(" Flavor: "),oe=Object(c["g"])("br",null,null,-1),le=Object(c["i"])(" Nicotine Level: "),ie=Object(c["g"])("br",null,null,-1),se=Object(c["i"])(" Style: "),ue=Object(c["g"])("br",null,null,-1),be=Object(c["i"])(" Price: "),je=Object(c["g"])("br",null,null,-1),pe=Object(c["g"])("br",null,null,-1),Oe=Object(c["g"])("button",{class:"btn btn-success"},"Add a Review",-1),ge=Object(c["g"])("button",{class:"btn btn-outline-success"}," Sign In to Add a Review ",-1),de=Object(c["g"])("br",null,null,-1),fe=Object(c["g"])("br",null,null,-1);function me(e,t,n,r,a,o){var l=Object(c["z"])("router-link"),i=Object(c["z"])("router-view");return Object(c["s"])(),Object(c["f"])("div",null,[Object(c["g"])("div",te,[Object(c["g"])("div",ne,[Object(c["g"])("h2",ce,Object(c["B"])(o.juice.LabelName),1),re,Object(c["g"])("p",null,[ae,oe,Object(c["g"])("strong",null,Object(c["B"])(o.juice.Flavor),1)]),Object(c["g"])("p",null,[le,ie,Object(c["g"])("strong",null,Object(c["B"])(o.juice.NicotineLevel),1)]),Object(c["g"])("p",null,[se,ue,Object(c["g"])("strong",null,Object(c["B"])(o.juice.StyleName),1)]),Object(c["g"])("p",null,[be,je,Object(c["g"])("strong",null,Object(c["B"])(o.formattedBudget),1)])])]),pe,o.auth?(Object(c["s"])(),Object(c["d"])(l,{key:0,to:"/ejuice/".concat(this.$route.params.pk,"/review")},{default:Object(c["F"])((function(){return[Oe]})),_:1},8,["to"])):(Object(c["s"])(),Object(c["d"])(l,{key:1,to:"/login"},{default:Object(c["F"])((function(){return[ge]})),_:1})),de,fe,Object(c["j"])(i)])}n("7db0"),n("d3b7");var ve={computed:{juice:function(){var e=this,t=this.$store.state.EJuice,n=t.find((function(t){return t.EJuicePK==e.$route.params.pk}));return n},formattedBudget:function(){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(this.juice.Price)},auth:function(){return this.$store.state.token}}};const he=x()(ve,[["render",me]]);var ye=he,we=Object(c["g"])("h1",null,"EJuice",-1),ke=Object(c["g"])("hr",null,null,-1),_e={class:"table"},Ee=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th",null,"Label Name"),Object(c["g"])("th",null,"Flavor"),Object(c["g"])("th",null,"Price"),Object(c["g"])("th")])],-1),Se=Object(c["g"])("button",{class:"btn btn-primary"},"Details",-1);function xe(e,t,n,r,a,o){var l=Object(c["z"])("router-link");return Object(c["s"])(),Object(c["f"])("div",null,[we,ke,Object(c["g"])("table",_e,[Ee,Object(c["g"])("tbody",null,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(o.theEJuice,(function(e){return Object(c["s"])(),Object(c["f"])("tr",{key:e.EJuicePK},[Object(c["g"])("th",null,Object(c["B"])(e.LabelName),1),Object(c["g"])("th",null,Object(c["B"])(e.Flavor),1),Object(c["g"])("th",null,Object(c["B"])(e.Price),1),Object(c["g"])("th",null,[Object(c["j"])(l,{to:"/EJuice/".concat(e.EJuicePK)},{default:Object(c["F"])((function(){return[Se]})),_:2},1032,["to"])])])})),128))])])])}var Be={computed:{theEJuice:function(){return this.$store.state.EJuice}}};const Fe=x()(Be,[["render",xe]]);var Je=Fe,Re=Object(c["g"])("h1",null,"Not Found",-1),Pe=Object(c["g"])("h4",null,"Sorry, this page can't be found",-1),Ue=[Re,Pe];function Le(e,t,n,r,a,o){return Object(c["s"])(),Object(c["f"])("div",null,Ue)}var $e={};const ze=x()($e,[["render",Le]]);var Ne=ze,Ae={class:"row justify-content-center"},De={class:"col-lg-10"},Me={class:"card"},qe={class:"card-body"},Ge=Object(c["g"])("h4",null,"Create a Review",-1),Ve={class:"mb-3"},Ce=Object(c["g"])("label",{for:"rating-input",class:"form-label"},"Rating",-1),Ie={class:"mb-3"},Ke=Object(c["g"])("label",{for:"summary-input",class:"form-label"},"Review",-1),Te=Object(c["g"])("button",{type:"submit",class:"btn btn-primary"}," Submit Review",-1),He={key:0,class:"form-text text-danger"};function Ze(e,t,n,r,a,o){return Object(c["s"])(),Object(c["f"])("div",null,[Object(c["g"])("div",Ae,[Object(c["g"])("div",De,[Object(c["g"])("div",Me,[Object(c["g"])("div",qe,[Ge,Object(c["g"])("form",{id:"review-form",onSubmit:t[3]||(t[3]=Object(c["H"])((function(){return o.submitReview&&o.submitReview.apply(o,arguments)}),["prevent"]))},[Object(c["g"])("div",Ve,[Ce,Object(c["G"])(Object(c["g"])("input",{type:"number",class:"form-control",id:"rating-input",required:"",min:"1",max:"10","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.Rating=e})},null,512),[[c["D"],a.Rating]])]),Object(c["g"])("div",Ie,[Ke,Object(c["G"])(Object(c["g"])("input",{type:"text",row:"3",class:"form-control",id:"summary-input",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.Summary=e})},null,512),[[c["D"],a.Summary]])]),Te,Object(c["g"])("button",{onClick:t[2]||(t[2]=function(){return o.cancelReview&&o.cancelReview.apply(o,arguments)}),type:"clear",class:"btn btn-outline-danger"}," Cancel "),a.errorMessage?(Object(c["s"])(),Object(c["f"])("p",He,Object(c["B"])(a.errorMessage),1)):Object(c["e"])("",!0)],32)])])])])])}var Qe={data:function(){return{Rating:null,Summary:"",errorMessage:null}},methods:{submitReview:function(){var e=this,t={Rating:this.Rating,Summary:this.Summary,EJuiceFK:this.$route.params.pk};L.a.post("/reviews",t,{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(){e.$router.replace("/account")})).catch((function(){e.errorMessage="Unable to create a review, please try again later"}))},cancelReview:function(){this.$router.go(-1)}}};n("1071");const We=x()(Qe,[["render",Ze]]);var Xe=We,Ye=Object(c["g"])("h1",null,"Sign Up",-1),et={class:"mb-3"},tt=Object(c["g"])("label",{for:"fname-input",class:"form-label"},"First name",-1),nt={class:"mb-3"},ct=Object(c["g"])("label",{for:"lname-input",class:"form-label"},"Last name",-1),rt={class:"mb-3"},at=Object(c["g"])("label",{for:"age-input",class:"form-label"},"Age",-1),ot={class:"mb-3"},lt=Object(c["g"])("label",{for:"zip-input",class:"form-label"},"Zipcode",-1),it={class:"mb-3"},st=Object(c["g"])("label",{for:"email-input",class:"form-label"},"Email",-1),ut={key:0,class:"text-danger"},bt={class:"mb-3"},jt=Object(c["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),pt=Object(c["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Ot={id:"error-signup",class:"text-danger"};function gt(e,t,n,r,a,o){return Object(c["s"])(),Object(c["f"])("div",null,[Ye,Object(c["g"])("form",{onSubmit:t[6]||(t[6]=Object(c["H"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[Object(c["g"])("div",et,[tt,Object(c["G"])(Object(c["g"])("input",{type:"text",class:"form-control",id:"fname-input",required:"",placeholder:"First name","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.nameFirst=e})},null,512),[[c["D"],a.nameFirst]])]),Object(c["g"])("div",nt,[ct,Object(c["G"])(Object(c["g"])("input",{type:"text",class:"form-control",id:"lname-input",required:"",placeholder:"Last name","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.nameLast=e})},null,512),[[c["D"],a.nameLast]])]),Object(c["g"])("div",rt,[at,Object(c["G"])(Object(c["g"])("input",{type:"text",class:"form-control",id:"age-input",required:"",placeholder:"Enter age","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.age=e})},null,512),[[c["D"],a.age]])]),Object(c["g"])("div",ot,[lt,Object(c["G"])(Object(c["g"])("input",{type:"text",class:"form-control",id:"zip-input",required:"",placeholder:"Enter zip","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.zip=e})},null,512),[[c["D"],a.zip]])]),Object(c["g"])("div",it,[st,Object(c["G"])(Object(c["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.email=e})},null,512),[[c["D"],a.email]]),a.dupEmail?(Object(c["s"])(),Object(c["f"])("small",ut," Please choose a different email")):Object(c["e"])("",!0)]),Object(c["g"])("div",bt,[jt,Object(c["G"])(Object(c["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.password=e})},null,512),[[c["D"],a.password]])]),pt,Object(c["g"])("p",Ot,Object(c["B"])(a.errorMessage),1)],32)])}var dt={data:function(){return{nameFirst:"",nameLast:"",age:"",zip:"",email:"",password:"",errorMessage:"",dupEmail:!1}},methods:{onSubmit:function(){var e=this,t={nameFirst:this.nameFirst,nameLast:this.nameLast,age:this.age,zip:this.zip,email:this.email,password:this.password};console.log(t),L.a.post("/customer",t).then((function(t){console.log("the response",t),e.$router.replace("/login?signupsuccess=true")})).catch((function(t){409===t.response.status?e.dupEmail=!0:e.errorMessage="Cannot sign you up, please try again later"}))}}};const ft=x()(dt,[["render",gt]]);var mt=ft,vt=Object(c["g"])("h1",null,"Account",-1),ht=Object(c["g"])("hr",null,null,-1),yt={key:0,class:"text-danger"},wt={key:1,class:"table"},kt=Object(c["g"])("thead",null,[Object(c["g"])("th",null,"EJuice"),Object(c["g"])("th",null,"Summary"),Object(c["g"])("th",null,"Rating")],-1);function _t(e,t,n,r,a,o){var l=Object(c["z"])("router-link");return Object(c["s"])(),Object(c["f"])("div",null,[vt,ht,Object(c["g"])("h3",null,Object(c["B"])(o.firstName)+"'s Reviews",1),a.accountError?(Object(c["s"])(),Object(c["f"])("p",yt," Cannot get your account information, please try again later ")):Object(c["e"])("",!0),a.reviewsByUser?(Object(c["s"])(),Object(c["f"])("table",wt,[kt,Object(c["g"])("tbody",null,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(a.reviewsByUser,(function(e){return Object(c["s"])(),Object(c["f"])("tr",{key:e.ReviewPK},[Object(c["g"])("th",null,[Object(c["j"])(l,{to:"/EJuice/".concat(e.EJuiceFK)},{default:Object(c["F"])((function(){return[Object(c["i"])(Object(c["B"])(e.LabelName),1)]})),_:2},1032,["to"])]),Object(c["g"])("th",null,Object(c["B"])(e.Summary),1),Object(c["g"])("th",null,Object(c["B"])(e.Rating),1)])})),128))])])):Object(c["e"])("",!0)])}var Et={data:function(){return{reviewsByUser:null,accountError:!1}},computed:{firstName:function(){return console.log("here is the store so far",this.$store.state.token),this.$store.state.user.NameFirst}},created:function(){var e=this;L.a.get("/reviews/me",{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(t){console.log("here is the response",t),e.reviewsByUser=t.data})).catch((function(){e.accountError=!0}))}};const St=x()(Et,[["render",_t]]);var xt=St,Bt=n("5502"),Ft=Object(Bt["a"])({state:{token:null,user:null,EJuice:[]},mutations:{storeTokenInApp:function(e,t){e.token=t},storeUserInApp:function(e,t){e.user=t},storeEJuice:function(e,t){e.EJuice=t},clearAuthData:function(e){e.token=null,e.user=null}},actions:{getEJuice:function(e){var t=e.commit;L.a.get("/EJuice").then((function(e){console.log("response in /Ejuice",e),t("storeEJuice",e.data)}))},logout:function(e){var t=e.commit,n=e.state;L.a.post("/customer/logout",null,{headers:{Authorization:"Bearer ".concat(n.token)}}).then((function(){t("clearAuthData"),Rt.replace("/")})).catch((function(){console.log("error in logging out")}))}}}),Jt=Object($["a"])({history:Object($["b"])(),routes:[{path:"/",component:q},{path:"/account",component:xt,beforeEnter:function(e,t,n){Ft.state.token?n():n("/login")}},{path:"/login",component:ee},{path:"/ejuice",component:Je},{path:"/ejuice/:pk",component:ye,children:[{path:"review",component:Xe}]},{path:"/signup",component:mt},{path:"/:invalidroute(.*)",component:Ne}]}),Rt=Jt;L.a.defaults.baseURL="https://cis410-fa21-Dame-api.azurewebsites.net";var Pt=Object(c["c"])(P);Pt.use(Rt),Pt.use(Ft),Pt.mount("#app")},6909:function(e,t,n){"use strict";n("215a")},"9df7":function(e,t,n){},f981:function(e,t,n){"use strict";n("9df7")}});
//# sourceMappingURL=app.cd18778d.js.map