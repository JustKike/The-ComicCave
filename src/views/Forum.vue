<template>
  <div>
    <!-- Cabeza del foro -->
    <header
      data-parallax="true"
      class="contenedor"
      style="
        background-color: white;
        background-repeat: no-repeat;
        transform: translate3d(0px, 0px, 0px);
        background-size: 100% 100%;
      "
    >
      <p>
        En esta sección puedes dejar tus dudas, compartir tu conocimiento o
        generar discusiones
      </p>
    </header>
    <!-- boton para agregar un tema -->
    <div class="w-full flex mb-2 mt-2">
      <b-button
        variant="success"
        class="mx-auto d-block btn-lg btn-sombra"
        @click="showModal"
        ref="btnShow"
      >
        <b-icon
          icon="pencil-fill"
          scale="1.05"
          shift-v="0.8"
          aria-hidden="true"
        ></b-icon>
        Agregar Tema</b-button
      >
      <!-- Listamos los temas -->
      <hr />
      <Tema class="mt-5" />

      <!-- Creamos un modal -->
      <b-modal id="modal-1" ref="modal" size="lg" title="AGREGA UN TEMA!">
        <!-- Iniciamos un formulario handleSubmit onSubmit-->
        <b-row class="form">
          <b-form @submit.prevent>
            <!-- Etiqueta de autor -->
            <b-form-group
              label="Autor:"
              label-for="autor-input"
              invalid-feedback="Nombre de Autor Requerido"
              :label-text-variant="labelTextVariant"
            >
              <!-- input para el titulo -->
              <b-form-input
                id="autor-input"
                v-model="form.autor"
                placeholder="Escribe tu nombre aquí"
                required
                class="mb-3"
              ></b-form-input>
            </b-form-group>
            <!-- Etiqueta de titulo -->
            <b-form-group
              label="Título de tu pregunta/aporte/discusión:"
              label-for="titulo-input"
              invalid-feedback="Titulo is required"
              :label-text-variant="labelTextVariant"
            >
              <!-- input para el titulo -->
              <b-form-input
                id="titulo-input"
                v-model="form.titulo"
                placeholder="Escribe un titulo aqui"
                required
                class="mb-3"
              ></b-form-input>
            </b-form-group>

            <!-- Etiqueta de categoria -->
            <b-form-group
              label="Categoria:"
              label-for="categoria-input"
              invalid-feedback="categoria is required"
            >
              <!-- input para la categoria -->
              <b-form-select
                v-model="form.seleccion"
                :options="opciones"
                class="form-select mb-3"
                style="width: 100%"
              >
                <!-- This slot appears above the options from 'options' prop -->
                <template #first>
                  <b-form-select-option :value="null" disabled
                    >-- Selecciona una categoria --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>

            <!-- Creamos toolbar de la herramienta devextreme -->
            <div>
              <DxHtmlEditor
                v-model="form.texto"
                :placeholder="msg"
                height="300px"
              >
                <DxMediaResizing :enabled="true" />
                <DxToolbar :multiline="isMultiline">
                  <DxItem name="undo" />
                  <DxItem name="redo" />
                  <DxItem name="separator" />
                  <DxItem :accepted-values="sizeValues" name="size" />
                  <DxItem :accepted-values="fontValues" name="font" />
                  <DxItem name="separator" />
                  <DxItem name="bold" />
                  <DxItem name="italic" />
                  <DxItem name="strike" />
                  <DxItem name="underline" />
                  <DxItem name="separator" />
                  <DxItem name="alignLeft" />
                  <DxItem name="alignCenter" />
                  <DxItem name="alignRight" />
                  <DxItem name="alignJustify" />
                  <DxItem name="separator" />
                  <DxItem name="orderedList" />
                  <DxItem name="bulletList" />
                  <DxItem name="separator" />
                  <DxItem :accepted-values="headerValues" name="header" />
                  <DxItem name="separator" />
                  <DxItem name="color" />
                  <DxItem name="background" />
                  <DxItem name="separator" />
                  <DxItem name="link" />
                  <DxItem name="image" />
                  <DxItem name="separator" />
                  <DxItem name="clear" />
                  <DxItem name="codeBlock" />
                  <DxItem name="blockquote" />
                  <DxItem name="separator" />
                  <DxItem name="insertTable" />
                  <DxItem name="deleteTable" />
                  <DxItem name="insertRowAbove" />
                  <DxItem name="insertRowBelow" />
                  <DxItem name="deleteRow" />
                  <DxItem name="insertColumnLeft" />
                  <DxItem name="insertColumnRight" />
                  <DxItem name="deleteColumn" />
                </DxToolbar>
              </DxHtmlEditor>
              <div class="options">
                <div class="caption">Options</div>
                <div class="option">
                  <DxCheckBox v-model="isMultiline" text="Multiline toolbar" />
                </div>
              </div>
            </div>
            <!-- aqui termina el textbox con toolbar -->
          </b-form>
        </b-row>
        <!-- Footer para el modal -->
        <template #modal-footer>
          <div
            class="w-100 card-body d-flex justify-content-between align-items-center"
          >
            <!-- Titulo del footer -->
            <strong>The ComicCave</strong>
            <!-- Agregamos boton publicar -->
            <b-button
              type="submit"
              variant="danger"
              size="sm"
              :disabled="disableIfOneFieldIsEmpty"
              @click="onSubmit()"
            >
              <b-icon
                icon="chat-square-dots-fill"
                scale="0.7"
                shift-v="1"
                aria-hidden="true"
              ></b-icon>
              PUBLICAR
            </b-button>
            <!-- Agregamos boton cerrar -->
            <b-button variant="primary" size="sm" @click="hideModal">
              CERRAR
            </b-button>
          </div>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
// Importamos componente tema = lista de cards
import Tema from "@/components/Tema.vue";
// importaciones para la BD
import { db } from "../firebase";
import { reactive } from "vue";
import { collection, addDoc } from "firebase/firestore/lite";
// importaciones para la toolbar
import {
  DxHtmlEditor,
  DxToolbar,
  DxMediaResizing,
  DxItem,
} from "devextreme-vue/html-editor";
import { DxCheckBox } from "devextreme-vue/check-box";

export default {
  components: {
    DxHtmlEditor,
    DxMediaResizing,
    DxToolbar,
    DxItem,
    DxCheckBox,
    Tema,
  },
  name: "Forum",
  data() {
    return {
      form: {
        autor: "",
        titulo: "",
        seleccion: null,
        texto: "",
      },
      msg: "escribe aquí tu pregunta / aporte / discusión:",
      labelTextVariant: "dark",
      //inicia toolbar
      sizeValues: ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt"],
      fontValues: [
        "Arial",
        "Courier New",
        "Georgia",
        "Impact",
        "Lucida Console",
        "Tahoma",
        "Times New Roman",
        "Verdana",
        "book Antiqua",
      ],
      headerValues: [false, 1, 2, 3, 4, 5],
      isMultiline: true,
      //termina toolbar
    };
  },
  computed: {
    // opciones para el selector
    opciones() {
      const options = ["DC", "MARVEL", "General"];
      return options;
    },
    // boton deshabalitado si no se llena por completo el formulario
    disableIfOneFieldIsEmpty() {
      return Object.values(this.form).some(
        (value) => value == null || (Array.isArray(value) && value.length === 0)
      );
    },
  },
  methods: {
    // mostrar ventana modal
    showModal() {
      this.$root.$emit("bv::show::modal", "modal-1", "#btnShow");
    },
    //Ocultar ventana modal
    hideModal() {
      this.$refs["modal"].hide();
    },
    // ventana de notificacion para cargar datos a BD
    showMsgOk() {
      const h = this.$createElement;
      // Titulo para la ventana emergente
      const titleVNode = h("div", { domProps: { innerHTML: "Notificación" } });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-center"] }, [
          h("b-icon", {
            props: {
              icon: "cloud-check-fill",
              scale: "3",
            },
          }),
          h("br"),
          h("br"),
          h("strong", "Datos Guardados Correctamente!"),
          h("br"),
        ]),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        centered: true,
        msgBoxOkVariant: "success",
      });
    },
    // cargar datos a la BD
    async onSubmit() {
      try {
        const docRef = await addDoc(collection(db, "temas"), {
          autor: this.form.autor,
          titulo: this.form.titulo,
          seleccion: this.form.seleccion,
          texto: this.form.texto,
          date: Date.now(),
        });
        // imprimimos por consola el array de los datos
        console.log(this.form);
        // ocultamos el modal del formulario
        this.hideModal();
        // llamamos a la ventana emergente
        this.showMsgOk();
        // limpiamos los imputs del formulario
        (this.form.autor = ""),
          (this.form.titulo = ""),
          (this.form.seleccion = ""),
          (this.form.texto = "");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.contenedor {
  border-radius: 10px;
  padding: 5px;
  margin-top: 5px;
}
.centrado {
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
h1 {
  font-family: "lust-display-didone", serif;
  text-align: center;
  font-weight: bold;
  font-size: 60px;
  width: 100%;
  letter-spacing: 0.5rem;
  color: rgb(105, 10, 3);
  text-shadow: 2px 5px 8px #030000;
}
p {
  font-family: Century Schoolbook, Century Schoolbook L, Georgia, serif;
  font-size: 30px;
  text-align: center;
  margin: 2rem 3rem 0;
  color: rgb(10, 10, 10);
  font-weight: 100;
  text-shadow: 2px 5px 8px #030000;
}

/* CSS para toolbar */
.dx-htmleditor-content img {
  vertical-align: middle;
  padding-right: 10px;
}

.dx-htmleditor-content table {
  width: 50%;
}

.options {
  padding: 15px;
  background-color: rgba(191, 191, 191, 0.15);
  margin-top: 20px;
}

.caption {
  font-size: 10px;
  font-weight: 500;
}

.option {
  margin-top: 8px;
}
.btn-sombra {
  box-shadow: 0 4px 0 #02583f;
}
</style>
