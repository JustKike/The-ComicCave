(function(e){function t(t){for(var r,n,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,n=1;n<a.length;n++){var i=a[n];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({About:"About",CienciaF:"CienciaF",Contact:"Contact",Forum:"Forum","Home~SuperH":"Home~SuperH",Home:"Home",SuperH:"SuperH",Releases:"Releases"}[e]||e)+"."+{About:"e328e7c6",CienciaF:"ecc67160",Contact:"dfa0a7b4",Forum:"02a2b083","Home~SuperH":"3411c568",Home:"14c04cde",SuperH:"903f5f39",Releases:"b8f30dbe"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={About:1,CienciaF:1,Forum:1,"Home~SuperH":1,Home:1,SuperH:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({About:"About",CienciaF:"CienciaF",Contact:"Contact",Forum:"Forum","Home~SuperH":"Home~SuperH",Home:"Home",SuperH:"SuperH",Releases:"Releases"}[e]||e)+"."+{About:"9ab578ee",CienciaF:"5ac0f655",Contact:"31d6cfe0",Forum:"392960aa","Home~SuperH":"95957f58",Home:"59adfc91",SuperH:"e862b384",Releases:"31d6cfe0"}[e]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){l=m[i],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[e],d.parentNode.removeChild(d),a(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){n[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,a){r=o[e]=[t,a]}));t.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var m=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",m.name="ChunkLoadError",m.type=r,m.request=n,a[1](m)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var d=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"01f4":function(e,t,a){},"27d1":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r,n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Cabecera"),a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"danger"}},[a("b-container",[a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-navbar-brand",{attrs:{href:"#"}}),a("b-collapse",{attrs:{"is-nav":"",id:"nav-collapse"}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:{name:"Home"},exact:""}},[a("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}}),e._v(" Inicio")],1),a("b-nav-item",{attrs:{to:{name:"Releases"},exact:""}},[e._v("Lanzamientos")]),a("b-nav-item",{attrs:{to:{name:"Forum"}}},[a("b-icon",{attrs:{icon:"chat-square-text-fill",scale:"0.9","shift-v":"1","aria-hidden":"true"}}),e._v(" Foro")],1),a("b-nav-item",{attrs:{to:{name:"Contact"}}},[e._v("Contacto")]),a("b-nav-item",{attrs:{to:{name:"About"}}},[e._v("Acerca de")])],1)],1)],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("Login")],1)],1),a("b-container",[a("router-view")],1),a("Footer")],1)},s=[],i=a("681c"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"mb-2"},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],attrs:{pill:"",variant:"primary",href:"#example-sidebar"},on:{click:function(e){e.preventDefault()}}},[e._v(" Inicio | Registro ")])],1),a("b-sidebar",{attrs:{id:"example-sidebar",title:"Sidebar","aria-label":"Sidebar with custom footer","no-header":"","bg-variant":"dark"},scopedSlots:e._u([{key:"footer",fn:function(t){var r=t.hide;return[a("div",{staticClass:"d-flex bg-primary  text-light justify-content-between align-items-center px-3 py-2"},[a("strong",{staticClass:"mr-auto"},[e._v("The ComicCave")]),a("b-button",{staticClass:"float-right",attrs:{size:"sm"},on:{click:r}},[e._v("Close")])],1)]}}])},[a("div",{staticClass:"px-3 py-2"},[a("b-card",{staticClass:"mt-3",attrs:{header:"Inicia Sesion"}},[e.show?a("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[a("b-form-group",{attrs:{id:"input-group-1",label:"Correo:","label-for":"input-1",description:"Nunca compartiremos su informacion con nadie más."}},[a("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Introduce tu correo",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("b-form-group",[a("label",{attrs:{for:"text-password"}},[e._v("Contraseña")]),a("b-form-input",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.v-danger.top",value:{content:e.msg},expression:"{ content: msg }",modifiers:{hover:!0,"v-danger":!0,top:!0}}],attrs:{type:"password",id:"text-password","aria-describedby":"password-help-block",required:"",placeholder:"Introduce Contraseña",title:"CUIDADO!"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("br"),a("div",{staticClass:"d-flex justify-content-center"},[a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Enviar")]),e._v("| "),a("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Cancelar")])],1)],1):e._e()],1)],1),a("div",{staticClass:"px-3 py-2"},[a("join")],1)])],1)},l=[],u=(a("e9c4"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-3",modifiers:{"collapse-3":!0}}],staticClass:"m-1"},[e._v("Registrate")]),a("b-collapse",{attrs:{id:"collapse-3"}},[a("b-card",{staticClass:"mt-3",attrs:{header:"Crea una cuenta"}},[a("Formlogin")],1)],1)],1)}),m=[],d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.show?a("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[a("b-form-group",{attrs:{id:"input-group-1",label:"Correo:","label-for":"input-2",description:"Nunca compartiremos tus datos con nadie más.."}},[a("b-form-input",{attrs:{id:"input-2",type:"email",placeholder:"Introduce tu correo",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("b-form-group",{attrs:{id:"input-group-2",label:"Nombre:","label-for":"input-3"}},[a("b-form-input",{attrs:{id:"input-3",placeholder:"Introduce un nombre",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("b-form-group",[a("label",{attrs:{for:"text-password1"}},[e._v("Contraseña")]),a("b-form-input",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.v-danger.top",value:{content:e.msg},expression:"{ content: msg }",modifiers:{hover:!0,"v-danger":!0,top:!0}}],attrs:{type:"password",id:"text-password1","aria-describedby":"password-help-block",required:"",placeholder:"Introduce la contraseña"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("br"),a("div",{staticClass:"d-flex justify-content-center"},[a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Enviar")]),e._v(" | "),a("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Cancelar")])],1)],1):e._e()],1)},f=[],p=(a("b0c0"),{name:"Formlogin",data:function(){return{msg:"Password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.",form:{email:"",name:"",password:""},show:!0}},methods:{onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(e){var t=this;e.preventDefault(),this.form.email="",this.form.name="",this.form.password="",this.show=!1,this.$nextTick((function(){t.show=!0}))}}}),b=p,v=a("0c7c"),h=Object(v["a"])(b,d,f,!1,null,null,null),g=h.exports,C={name:"Join",components:{Formlogin:g}},y=C,w=Object(v["a"])(y,u,m,!1,null,null,null),_=w.exports,x={components:{Join:_},name:"Login",data:function(){return{msg:"La contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.",form:{email:"",password:""},show:!0}},methods:{onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(e){var t=this;e.preventDefault(),this.form.email="",this.form.password="",this.show=!1,this.$nextTick((function(){t.show=!0}))}}},H=x,S=(a("eef9"),Object(v["a"])(H,c,l,!1,null,"227bcd66",null)),F=S.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer"},[a("mdb-footer",{staticClass:"font-small pt-4 mt-4",attrs:{color:"blue"}},[a("mdb-container",{staticClass:"text-left"},[a("mdb-row",[a("mdb-col",{attrs:{sm:"6"}},[a("h5",{staticClass:"title"},[e._v("The ComicCave")]),a("p",[e._v("Idea del ing. Jair Cervantes, nace como una idea para poder reunir a diferente gente en una sola página para poder interactuar con diferentes usuarios en el ámbito que gusten de buenas historias y descubrir algo nuevo dentro del mundo de los cómics.")])]),a("mdb-col",{attrs:{sm:"6"}},[a("h5",{staticClass:"title"},[e._v("Contáctanos")]),a("div",{staticClass:" text-right"},[a("font-awesome-icon",{staticClass:"m-2",attrs:{icon:"fa-brands fa-twitter"}}),a("font-awesome-icon",{staticClass:"m-2",attrs:{icon:"fab fa-instagram"}}),a("font-awesome-icon",{staticClass:"m-2",attrs:{icon:"fab fa-facebook"}}),a("font-awesome-icon",{staticClass:"m-2",attrs:{icon:"fab fa-linkedin"}}),a("font-awesome-icon",{staticClass:"m-2",attrs:{icon:"fab fa-youtube"}})],1),a("ul",[a("li",{staticClass:"list-unstyled"},[a("a",{attrs:{href:"#!"}},[e._v("the.comic.cave2022@gmail.com")])]),a("li",{staticClass:"list-unstyled"},[a("a",{attrs:{href:"#!"}},[e._v("jose.ubietadiaz@cesunbc.edu.mx")])]),a("li",{staticClass:"list-unstyled"},[a("a",{attrs:{href:"#!"}},[e._v("jair.cervantesjauregui@cesunbc.edu.mx")])]),a("li",{staticClass:"list-unstyled"},[a("a",{attrs:{href:"#!"}},[e._v("+52 664 1234567")])])])])],1)],1),a("div",{staticClass:"footer-copyright text-center py-3"},[a("mdb-container",{attrs:{fluid:""}},[e._v(" © 2022 Copyright: "),a("a",{attrs:{href:"#"}},[e._v("TheComicCave.com")])])],1)],1)],1)},k=[],O=a("ade3"),A=a("91c9"),E=(r={name:"FooterPage"},Object(O["a"])(r,"name","App"),Object(O["a"])(r,"components",{mdbFooter:A["mdbFooter"],mdbContainer:A["mdbContainer"],mdbRow:A["mdbRow"],mdbCol:A["mdbCol"]}),r),R=E,T=(a("760c"),Object(v["a"])(R,j,k,!1,null,null,null)),$=T.exports,N={name:"app",components:{Cabecera:i["a"],Login:F,Footer:$}},P=N,I=Object(v["a"])(P,o,s,!1,null,null,null),L=I.exports,q=a("a18c"),D=a("2f62");n["default"].use(D["a"]);var J=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}}),M=a("5f5b"),z=a("b1e0"),B=a("ecee"),U=a("c074"),K=a("ad3d"),V=a("f2d1"),G=(a("f9e3"),a("2dd8"),a("3f9d"));a("a347"),a("aeed");n["default"].component("font-awesome-icon",K["a"]),B["c"].add(U["a"],V["d"],V["b"],V["a"],V["c"],V["e"]),n["default"].component("font-awesome-icon",K["a"]),n["default"].config.productionTip=!1,n["default"].use(M["a"]),n["default"].use(z["a"]),n["default"].use(G["a"]),n["default"].config.productionTip=!1,new n["default"]({el:"#app",components:{App:L},template:"<App/>",router:q["a"],store:J,render:function(e){return e(L)}}).$mount("#app")},"681c":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"contenedor"},[r("img",{staticClass:"Imgfondo",attrs:{alt:"Vue logo",src:a("ed1e")}}),r("div",{staticClass:"centrado"},[r("h1",{staticClass:"shadow"},[e._v("The ComicCave")])])])}],o={name:"Cabecera"},s=o,i=(a("97ad"),a("0c7c")),c=Object(i["a"])(s,r,n,!1,null,"f0ffd3f8",null);t["a"]=c.exports},"760c":function(e,t,a){"use strict";a("27d1")},"97ad":function(e,t,a){"use strict";a("fc08")},a18c:function(e,t,a){"use strict";a("d3b7"),a("3ca3"),a("ddb0");var r=a("2b0e"),n=a("8c4f");r["default"].use(n["a"]);var o=[{path:"/",name:"Home",component:function(){return Promise.all([a.e("Home~SuperH"),a.e("Home")]).then(a.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return a.e("About").then(a.bind(null,"f820"))}},{path:"/releases",name:"Releases",component:function(){return a.e("Releases").then(a.bind(null,"a59c"))}},{path:"/contact",name:"Contact",component:function(){return a.e("Contact").then(a.bind(null,"b8fa"))}},{path:"/cienciaF",name:"CienciaF",component:function(){return a.e("CienciaF").then(a.bind(null,"3bbd"))}},{path:"/superHeroes",name:"SuperH",component:function(){return Promise.all([a.e("Home~SuperH"),a.e("SuperH")]).then(a.bind(null,"fe7f"))}},{path:"/forum",name:"Forum",component:function(){return a.e("Forum").then(a.bind(null,"5916"))}}],s=new n["a"]({mode:"history",base:"/",routes:o});t["a"]=s},a347:function(e,t,a){},ed1e:function(e,t,a){e.exports=a.p+"img/cabecera7.5e1d214d.jpg"},eef9:function(e,t,a){"use strict";a("01f4")},fc08:function(e,t,a){}});
//# sourceMappingURL=app.82e66c5a.js.map