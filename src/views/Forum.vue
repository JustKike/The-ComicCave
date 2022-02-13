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
        class="mx-auto d-block btn-lg"
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
      <!-- Creamos un modal -->
      <b-modal id="modal-1" ref="modal" size="lg" title="AGREGA UN TEMA!">
        <!-- Iniciamos un formulario -->
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <!-- Etiqueta de autor -->
          <b-form-group
            label="Autor:"
            label-for="autor-input"
            invalid-feedback="Nombre de Autor Requerido"
            :state="autorState"
            :label-text-variant="labelTextVariant"
          >
            <!-- input para el titulo -->
            <b-form-input
              id="titulo-input"
              v-model="Autor"
              :state="autorState"
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
            :state="tituloState"
            :label-text-variant="labelTextVariant"
          >
            <!-- input para el titulo -->
            <b-form-input
              id="titulo-input"
              v-model="Titulo"
              :state="tituloState"
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
            :state="categoriaState"
          >
            <!-- input para la categoria -->
            <b-form-select
              v-model="seleccion"
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
            <DxHtmlEditor :placeholder="msg" height="300px">
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
        </form>
        <!-- Footer para el modal -->
        <template #modal-footer>
          <div
            class="w-100 card-body d-flex justify-content-between align-items-center"
          >
            <!-- Titulo del footer -->
            <strong>The ComicCave</strong>
            <!-- Agregamos boton publicar -->
            <b-button variant="success" size="sm" @click="hideModal">
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
// importaciones para la BD
import db from "../main";
import { collection, getDocs } from "firebase/firestore";
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
  },
  name: "Forum",
  data() {
    return {
      msg: "escribe aquí tu pregunta / aporte / discusión:",
      seleccion: null,
      labelTextVariant: "dark",
      opciones: [
        { value: "A", text: "Option A" },
        { value: "B", text: "Option B" },
        { value: "C", text: "General" },
      ],
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
  mounted() {},
  created() {
    this.getEvents();
  },
  methods: {
    async getEvents() {
      try {
        const querySnapshot = await getDocs(collection(db, "temas"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      } catch (error) {
        console.log(error);
      }
    },
    showModal() {
      this.$root.$emit("bv::show::modal", "modal-1", "#btnShow");
    },
    hideModal() {
      this.$refs["modal"].hide();
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
</style>
