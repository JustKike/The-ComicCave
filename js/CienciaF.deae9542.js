(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CienciaF"],{"1b7d":function(e,a,t){},"22d7":function(e,a,t){"use strict";t("1b7d")},"28a1":function(e,a,t){"use strict";t("c25c")},"3bbd":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"cienciaF"},[t("b-container",{staticClass:"p-4 bg-dark m-2",attrs:{fluid:""}},[t("b-row",[t("b-card-group",{staticClass:"centered"},[t("b-col",[t("b-card",{staticClass:"shadow-card",staticStyle:{width:"20rem"},attrs:{"bg-variant":"dark","text-variant":"white",header:"EL JUEZ DREDD: LOS ARCHIVOS COMPLETOS Nº 1","header-tag":"header","footer-tag":"footer"}},[t("b-img",{staticClass:"image",attrs:{thumbnail:"",fluid:"",alt:"Responsive image",src:"../img/Cienciafix/judge_dredd_no1.jpg"}}),t("b-card-text",{staticClass:"texto"},[t("br"),t("strong",[e._v("Sinopsis:")]),e._v(" Durante casi 30 años, un hombre ha dominado la escena del cómic británico. Es juez, jurado y verdugo, un hombre de la ley del futuro sin piedad que reparte justicia con puño de hierro en las calles de Megacity uno. Él es el juez Dredd. Ahora puedes redescubrir las raíces de este personaje legendario en esta serie de novelas gráficas que recogen todas las aventuras de Dredd en orden cronológico, completas y sin cortes. ")]),t("b-button",{staticClass:"button",attrs:{variant:"primary"},on:{click:function(a){e.modalShow=!e.modalShow}}},[e._v(" Reseñas ")]),t("b-modal",{attrs:{size:"lg"},model:{value:e.modalShow,callback:function(a){e.modalShow=a},expression:"modalShow"}},[t("Modal")],1)],1)],1),t("b-col",[t("b-card",{staticClass:"shadow-card",staticStyle:{width:"18rem"},attrs:{"bg-variant":"dark","text-variant":"white",header:"Star Wars: Los Últimos Jedi","header-tag":"header","footer-tag":"footer"}},[t("b-img",{staticClass:"image",attrs:{thumbnail:"",fluid:"",alt:"Responsive image",src:"../img/Cienciafix/star-wars-los-ultimos-jedi.jpg"}}),t("b-card-text",{staticClass:"texto"},[t("strong",[e._v("Sinopsis:")]),e._v(" La Primera Orden impera. Luego de diezmar a la pacífica República, el líder supremo Snoke ahora envía a sus despiadadas legiones a asumir el control militar de la galaxia. Solo la general Leia Organa y su grupo de combatientes de la Resistencia se oponen a la creciente tiranía, convencidos de que el maestro jedi Luke Skywalker regresará y restaurará la chispa de esperanza en la lucha. Pero la Resistencia ha sido expuesta. Mientras la Primera Orden se dirige hacia la base rebelde, los valientes héroes organizan un desesperado escape….")]),t("b-button",{staticClass:"button",attrs:{variant:"primary"},on:{click:function(a){e.modalShow=!e.modalShow}}},[e._v(" Reseñas ")])],1)],1),t("b-col",[t("b-card",{staticClass:"shadow-card",staticStyle:{width:"18rem"},attrs:{"bg-variant":"dark","text-variant":"white",header:"VALERIAN:y la ciudad de los mil planetas","header-tag":"header","footer-tag":"footer"}},[t("b-img",{staticClass:"image",attrs:{thumbnail:"",fluid:"",alt:"Responsive image",src:"../img/Cienciafix/valerian.jpg"}}),t("b-card-text",{staticClass:"texto"},[t("br"),t("strong",[e._v("Sinopsis:")]),e._v(" En El imperio de los mil planetas, la misión de Valerian y Laureline es establecer contacto con sistema planetario Syrte que carece de los medios para el viaje interestelar. Allí descubren que se trata de un sistema atrasado, controlado por los Entendidos, que son los sacerdotes de una religión que domina el acceso a la tecnología.")]),t("b-button",{staticClass:"button",attrs:{variant:"primary"},on:{click:function(a){e.modalShow=!e.modalShow}}},[e._v(" Reseñas ")])],1)],1)],1)],1)],1)],1)},o=[],r=t("714b"),s={components:{Modal:r["a"]},data:function(){return{modalShow:!1}}},n=s,l=(t("28a1"),t("0c7c")),c=Object(l["a"])(n,i,o,!1,null,"0606cc90",null);a["default"]=c.exports},"62a9":function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"mt-3",staticStyle:{position:"relative",height:"200px","overflow-y":"auto"},attrs:{id:"scrollspy-nested"}},[0===e.submittedComment.length?t("div",[e._v("Sin comentarios"),t("p")]):t("b-list-group",{staticClass:"mb-0 pl-3"},e._l(e.submittedComment,(function(a,i){return t("b-list-group-item",{key:a.id,attrs:{id:"textarea"}},[t("strong",[e._v(e._s(i)+":")]),t("br"),e._v(" "+e._s(a))])})),1)],1),t("br"),t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}],attrs:{variant:"outline-warning"}},[e._v("Agregar comentario")]),t("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:"Agregar Comentario"},on:{show:e.resetModal,hidden:e.resetModal,ok:e.handleOk}},[t("form",{ref:"form",on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("b-form-group",{attrs:{label:"Mi Comentario:","label-for":"coment-input","invalid-feedback":"Ingresa texto, por favor.",state:e.comentState}},[t("b-form-textarea",{attrs:{id:"textarea",placeholder:"Escribe algo...",rows:"3","max-rows":"6",state:e.comentState,required:""},model:{value:e.comentario,callback:function(a){e.comentario=a},expression:"comentario"}})],1)],1)])],1)},o=[],r={name:"Comments",data:function(){return{comentario:"",comentState:null,submittedComment:[]}},methods:{checkFormValidity:function(){var e=this.$refs.form.checkValidity();return this.comentState=e,e},resetModal:function(){this.comentario="",this.comentState=null},handleOk:function(e){e.preventDefault(),this.handleSubmit()},handleSubmit:function(){var e=this;this.checkFormValidity()&&(this.submittedComment.push(this.comentario),this.$nextTick((function(){e.$bvModal.hide("modal-prevent-closing")})))}}},s=r,n=t("0c7c"),l=Object(n["a"])(s,i,o,!1,null,null,null);a["a"]=l.exports},"714b":function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card",{attrs:{"no-body":""}},[t("b-tabs",{attrs:{card:""}},[t("b-tab",{attrs:{title:"Ficha"}},[t("b-container",{attrs:{fluid:""}},[t("Ficha")],1)],1),t("b-tab",{attrs:{title:"Comentarios"}},[t("b-card-title",[t("code",[e._v("Agrega un comentario:")])]),t("b-card-text",{staticClass:"texto"},[t("Comments")],1)],1)],1)],1)},o=[],r=t("62a9"),s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticStyle:{position:"relative",height:"309px","overflow-y":"auto"},attrs:{id:"scrollspy-nested"}},[t("b-table",{attrs:{stacked:"",items:e.items}})],1)},n=[],l={name:"Ficha",data:function(){return{items:[{"Título_original":"Sinopsis de EL JUEZ DREDD: LOS ARCHIVOS COMPLETOS Nº 1 (INTEGRAL)","Año":"2019","No_de_páginas":"336",Editorial:"KRAKEN",Idioma:"CASTELLANO","Encuadernación":"Tapa blanda","Año_de_edición":"2019",Traductor:"CARLOS LÓPEZ ORTIZ",Fecha_de_lanzamiento:"24/01/2019"}]}}},c=l,d=t("0c7c"),u=Object(d["a"])(c,s,n,!1,null,null,null),m=u.exports,b={components:{Comments:r["a"],Ficha:m},name:"Modal"},h=b,p=(t("22d7"),Object(d["a"])(h,i,o,!1,null,null,null));a["a"]=p.exports},c25c:function(e,a,t){}}]);
//# sourceMappingURL=CienciaF.deae9542.js.map