<template>
  <div>
    <!-- Contendor con scroll -->
    <div class="mt-3" id="scrollspy-nested" style="position:relative; height:200px; overflow-y:auto">
      <!-- Si no hay comentarios se inprime un msj -->
      <div v-if="submittedComment.length === 0">Sin comentarios</p></div>
      <!-- Inciamos la lista -->
      <b-list-group v-else class="mb-0 pl-3">
        <!-- Cargamos comentarios -->
        <b-list-group-item v-for="(comentario, index) in submittedComment"  id="textarea"
        v-bind:key="comentario.id"><strong>{{ index }}:</strong><br> {{ comentario }}</b-list-group-item>
      </b-list-group>
    </div>
    <br>
    <!-- Agregamos boton para comentarios -->
    <b-button variant="outline-warning" v-b-modal.modal-prevent-closing>Agregar comentario</b-button>
    <!-- Creamos el modal -->
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Agregar Comentario"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk">
      <!-- Insertarmos un formulario -->
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <!-- Agregamos contenedor para comentarios -->
        <b-form-group
          label="Mi Comentario:"
          label-for="coment-input"
          invalid-feedback="Ingresa texto, por favor."
          :state="comentState">
          <!-- Agregamos un input para los comentarios -->
          <b-form-textarea
            id="textarea"
            v-model="comentario"
            placeholder="Escribe algo..."
            rows="3"
            max-rows="6"
            :state="comentState"
            required
          ></b-form-textarea>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
  export default {
      name:'Comments',
    data() {
      return {
        comentario: '',
        comentState: null,
        submittedComment: []
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.comentState = valid
        return valid
      },
      resetModal() {
        this.comentario = ''
        this.comentState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedComment.push(this.comentario)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
  }
</script>
