(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Contact"],{"25f0":function(t,e,o){"use strict";var n=o("e330"),r=o("5e77").PROPER,a=o("6eeb"),c=o("825a"),s=o("3a9b"),i=o("577e"),u=o("d039"),l=o("ad6d"),m="toString",b=RegExp.prototype,p=b[m],f=n(l),d=u((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),v=r&&p.name!=m;(d||v)&&a(RegExp.prototype,m,(function(){var t=c(this),e=i(t.source),o=t.flags,n=i(void 0===o&&s(b,t)&&!("flags"in b)?f(t):o);return"/"+e+"/"+n}),{unsafe:!0})},ad6d:function(t,e,o){"use strict";var n=o("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b8fa:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contact"},[o("Form")],1)},r=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mt-5"},[o("h1",[t._v("Ponte en contacto con nosotros")]),o("form",[o("b-col",{attrs:{md:"6"}},[o("b-row",[o("medium",[t._v("Nombre")]),o("b-form-input",{attrs:{name:"nombre",type:"text",state:t.comprobar,placeholder:"Escribe tu nombre"},model:{value:t.texto,callback:function(e){t.texto=e},expression:"texto"}}),o("small",[t._v("Al menos 3 caracteres")])],1),o("p"),o("b-row",[o("medium",[t._v("Correo")]),o("b-form-input",{attrs:{type:"email",placeholder:"Escribe tu correo"}})],1),o("p"),o("b-row",[o("medium",[t._v("Comentario")]),o("textarea",{staticClass:"form-control",attrs:{placeholder:"Escribe tu comentario"}})],1),o("p"),o("b-row",[o("b-check",[t._v("Acepto términos y condiciones")])],1)],1),o("b-col",{attrs:{md:"1"}},[o("p"),o("b-row",[o("button",{staticClass:"btn btn-primary mb-3",attrs:{type:"submit"}},[t._v("Enviar datos")])])],1)],1)])},c=[],s=(o("d3b7"),o("25f0"),{name:"Form",data:function(){return{texto:""}},computed:{comprobar:function(){return this.texto.length>2},enable:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return this.texto.length=disable}))}}),i=s,u=o("0c7c"),l=Object(u["a"])(i,a,c,!1,null,null,null),m=l.exports,b={name:"contact",components:{Form:m}},p=b,f=Object(u["a"])(p,n,r,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=Contact.dfa0a7b4.js.map