(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SuperH"],{"1b7d":function(t,a,e){},"22d7":function(t,a,e){"use strict";e("1b7d")},2845:function(t,a,e){},"2be0":function(t,a,e){"use strict";e("2845")},6566:function(t,a,e){},"714b":function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",{attrs:{"no-body":""}},[e("b-tabs",{attrs:{card:""}},[e("b-tab",{attrs:{title:"Ficha"}},[e("b-container",{attrs:{fluid:""}},[e("Ficha")],1)],1),e("b-tab",{attrs:{title:"Comentarios"}},[e("b-card-title",[e("code",[t._v("Agrega un comentario:")])]),e("b-card-text",{staticClass:"texto"},[e("Comments")],1)],1)],1)],1)},i=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"mt-3",staticStyle:{position:"relative",height:"200px","overflow-y":"auto"},attrs:{id:"scrollspy-nested"}},[0===t.submittedComment.length?e("div",[t._v("Sin comentarios"),e("p")]):e("b-list-group",{staticClass:"mb-0 pl-3"},t._l(t.submittedComment,(function(a,o){return e("b-list-group-item",{key:a.id,attrs:{id:"textarea"}},[e("strong",[t._v(t._s(o)+":")]),e("br"),t._v(" "+t._s(a))])})),1)],1),e("br"),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}],attrs:{variant:"outline-warning"}},[t._v("Agregar comentario")]),e("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:"Agregar Comentario"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk}},[e("form",{ref:"form",on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("b-form-group",{attrs:{label:"Mi Comentario:","label-for":"coment-input","invalid-feedback":"Ingresa texto, por favor.",state:t.comentState}},[e("b-form-textarea",{attrs:{id:"textarea",placeholder:"Escribe algo...",rows:"3","max-rows":"6",state:t.comentState,required:""},model:{value:t.comentario,callback:function(a){t.comentario=a},expression:"comentario"}})],1)],1)])],1)},n=[],s={name:"Comments",data:function(){return{comentario:"",comentState:null,submittedComment:[]}},methods:{checkFormValidity:function(){var t=this.$refs.form.checkValidity();return this.comentState=t,t},resetModal:function(){this.comentario="",this.comentState=null},handleOk:function(t){t.preventDefault(),this.handleSubmit()},handleSubmit:function(){var t=this;this.checkFormValidity()&&(this.submittedComment.push(this.comentario),this.$nextTick((function(){t.$bvModal.hide("modal-prevent-closing")})))}}},c=s,l=e("0c7c"),d=Object(l["a"])(c,r,n,!1,null,null,null),m=d.exports,u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{position:"relative",height:"309px","overflow-y":"auto"},attrs:{id:"scrollspy-nested"}},[e("b-table",{attrs:{stacked:"",items:t.items}})],1)},b=[],h={name:"Ficha",data:function(){return{items:[{"Título_original":"Sinopsis de EL JUEZ DREDD: LOS ARCHIVOS COMPLETOS Nº 1 (INTEGRAL)","Año":"2019","No_de_páginas":"336",Editorial:"KRAKEN",Idioma:"CASTELLANO","Encuadernación":"Tapa blanda","Año_de_edición":"2019",Traductor:"CARLOS LÓPEZ ORTIZ",Fecha_de_lanzamiento:"24/01/2019"}]}}},f=h,p=Object(l["a"])(f,u,b,!1,null,null,null),v=p.exports,g={components:{Comments:m,Ficha:v},name:"Modal"},C=g,w=(e("22d7"),Object(l["a"])(C,o,i,!1,null,null,null));a["a"]=w.exports},"7a27":function(t,a,e){"use strict";e("6566")},fe7f:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cienciaF"},[e("b-container",{staticClass:"p-4 bg-dark m-2",attrs:{fluid:""}},[e("b-row",[e("b-card-group",{staticClass:"centered"},[e("b-col",[e("b-card",{staticClass:"shadow-card",staticStyle:{width:"20rem"},attrs:{"bg-variant":"dark","text-variant":"white",header:"BATMAN: El regreso del señor de la noche","header-tag":"header","footer-tag":"footer"}},[e("b-img",{staticClass:"image",attrs:{thumbnail:"",fluid:"",alt:"Responsive image",src:"../img/SuperHeroe/AdventuresIntoDarkness.jpg"}}),e("b-card-text",{staticClass:"texto"},[e("br"),e("strong",[t._v("Sinopsis:")]),t._v(" Situada 10 años después de que un envejecido Batman se haya retirado y la ciudad de Gotham se haya hundido más en la decadencia y la anarquía. Ahora, cuando su ciudad más lo necesita, el caballero oscuro regresa en un resplandor de gloria. Junto a Carrie Kelly, una adolescente que se convertirá en el nuevo Robin, Batman sale a la calle para acabar con la amenaza de los mutantes, una salvaje banda que ha invadido la ciudad. ")]),e("b-button-group",{staticClass:"button d-flex justify-content-center"},[e("b-button",{staticClass:"pb-2 m-1",attrs:{variant:"success",lg:"4"},on:{click:function(a){t.comicShow=!t.comicShow}}},[t._v("Ver Comic")]),e("b-modal",{attrs:{size:"xl",scrollable:"",title:"BATMAN: El regreso del señor de la noche","header-bg-variant":t.headerBgVariant,"header-text-variant":t.headerTextVariant,"body-bg-variant":t.bodyBgVariant,"footer-bg-variant":t.footerBgVariant,"footer-text-variant":t.footerTextVariant},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100 card-body d-flex justify-content-between align-items-center "},[e("strong",[t._v("The ComicCave")]),e("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:function(a){t.comicShow=!1}}},[t._v(" Cerrar ")])],1)]},proxy:!0}]),model:{value:t.comicShow,callback:function(a){t.comicShow=a},expression:"comicShow"}},[e("ModalComic")],1),e("b-button",{staticClass:"pb-2 m-1",attrs:{variant:"primary"},on:{click:function(a){t.modalShow=!t.modalShow}}},[t._v(" Reseñas ")])],1),e("b-modal",{attrs:{size:"lg"},model:{value:t.modalShow,callback:function(a){t.modalShow=a},expression:"modalShow"}},[e("Modal")],1)],1)],1),e("b-col",[e("b-card",{staticClass:"shadow-card",staticStyle:{width:"18rem"},attrs:{"bg-variant":"dark","text-variant":"white",header:"Titulo del Comic","header-tag":"header","footer-tag":"footer"}},[e("b-img",{staticClass:"image",attrs:{thumbnail:"",fluid:"",alt:"Responsive image",src:"https://picsum.photos/250/250/?image=58"}}),e("b-card-text",{staticClass:"texto"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]),e("b-button",{staticClass:"button",attrs:{href:"#",variant:"primary"}},[t._v("Go somewhere")])],1)],1),e("b-col",[e("b-card",{staticClass:"shadow-card",staticStyle:{width:"18rem"},attrs:{"bg-variant":"dark","text-variant":"white",header:"Titulo del Comic","header-tag":"header","footer-tag":"footer"}},[e("b-img",{staticClass:"image",attrs:{thumbnail:"",fluid:"",alt:"Responsive image",src:"https://picsum.photos/250/250/?image=59"}}),e("b-card-text",{staticClass:"texto"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]),e("b-button",{staticClass:"button",attrs:{href:"#",variant:"primary"}},[t._v("Go somewhere")])],1)],1)],1)],1)],1)],1)},i=[],r=e("714b"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{staticClass:"bg-dark",attrs:{fluid:""}},[e("Comic",{attrs:{msg:"the-dark-night-return.pdf"}})],1)},s=[],c=e("9851"),l={components:{Comic:c["a"]},name:"ModalComic"},d=l,m=(e("2be0"),e("0c7c")),u=Object(m["a"])(d,n,s,!1,null,null,null),b=u.exports,h={components:{Modal:r["a"],ModalComic:b},data:function(){return{modalShow:!1,comicShow:!1,headerBgVariant:"dark",headerTextVariant:"light",bodyBgVariant:"dark",footerBgVariant:"warning",footerTextVariant:"dark"}}},f=h,p=(e("7a27"),Object(m["a"])(f,o,i,!1,null,"68bfd16e",null));a["default"]=p.exports}}]);
//# sourceMappingURL=SuperH.903f5f39.js.map