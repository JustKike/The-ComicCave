<template>
<div>
  <!-- Cabeza del foro -->
  <header data-parallax="true" class="contenedor"
  style="background-color: white; 
  background-repeat: no-repeat; transform: translate3d(0px, 0px, 0px);background-size: 100% 100%;">
  <p>En esta sección puedes dejar tus dudas, compartir tu conocimiento o generar discusiones</p>
  </header>
    <!-- boton para agregar un tema -->
    <div class="w-full flex mb-2 mt-2">
      <b-button variant="success" class="mx-auto d-block btn-lg" @click="showModal" ref="btnShow">
      <b-icon icon="pencil-fill" scale="1.05" shift-v="0.8" aria-hidden="true"></b-icon>
       Agregar Tema</b-button>
    <!-- Creamos un modal -->
    <b-modal id="modal-1"
    ref="modal"
    title="AGREGA UN TEMA!"
    >
      <!-- Iniciamos un formulario -->
      <form ref="form" @submit.stop.prevent="handleSubmit">
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
            :state="tituloState" placeholder="Escribe un titulo aqui"
            required class="mb-3"
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
            <b-form-select v-model="selected" :options="options" class="form-select mb-3" style="width: 100%;">>
              <!-- This slot appears above the options from 'options' prop -->
              <template #first>
                <b-form-select-option :value="null" disabled>-- Selecciona una categoria --</b-form-select-option>
              </template>
            </b-form-select>
          </b-form-group>

          <!-- Etiqueta de texto -->
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Escribe aqui tu pregunta/aporte/discusión:"
            rows="5"
            max-rows="6"
          ></b-form-textarea>
        
      </form>
      <!-- Footer para el modal -->
                  <template #modal-footer> 
                    <div
                      class="w-100 card-body d-flex justify-content-between align-items-center "
                    >
                    <!-- Titulo del footer -->
                      <strong>The ComicCave</strong>
                      <!-- Agregamos boton publicar -->
                      <b-button
                        variant="success"
                        size="sm"
                        @click="hideModal"
                      >
                        <b-icon icon="chat-square-dots-fill" scale="0.7" shift-v="1" aria-hidden="true"></b-icon>
                         PUBLICAR
                      </b-button>
                      <!-- Agregamos boton cerrar -->
                      <b-button
                        variant="primary"
                        size="sm"
                        @click="hideModal"
                      >
                        CERRAR
                      </b-button>
                    </div>
                  </template>
    </b-modal>
  </div>


  </div>
</template>

<script>
export default {
  name: 'Forum',
  data() {
    return {
      selected: null,
      labelTextVariant: "dark",
        options: [
          { value: 'A', text: 'Option A' },
          { value: 'B', text: 'Option B' },
          { value: 'C', text: 'Otros' }
        ]
    }
  },
  methods: {
    showModal() {
      this.$root.$emit('bv::show::modal', 'modal-1', '#btnShow')
    },
    hideModal() {
        this.$refs['modal'].hide()
      }
  }
}
</script>

<style scoped>
.contenedor{
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
</style>