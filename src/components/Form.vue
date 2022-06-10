<template>
  <div class="mt-5">
    <h1>Ponte en contacto con nosotros</h1>

    <form>
      <b-col md="6">
        <b-row>
          <medium>Nombre</medium>
          <b-form-input
            name="nombre"
            v-model="form.nombre"
            :state="comprobar"
            placeholder="Escribe tu nombre"
          ></b-form-input>
          <small>Al menos 3 caracteres</small>
        </b-row>
        <p></p>
        <b-row>
          <medium>Correo</medium>
          <b-form-input name="email" v-model="form.email"></b-form-input>
        </b-row>
        <p></p>

        <b-row>
          <medium>Comentario</medium>
          <textarea
            class="form-control"
            name="coment"
            v-model="form.coment"
            placeholder="Escribe tu comentario"
          ></textarea>
        </b-row>

        <p></p>

        <b-row>
          <b-check>Acepto términos y condiciones</b-check>
        </b-row>
      </b-col>

      <b-col md="1">
        <p></p>
        <b-row>
          <b-button variant="primary" class="mb-3" size="sm">Enviar</b-button>
        </b-row>
      </b-col>
    </form>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "Form",
  
  data() {
    return {
      form: {
        nombre: "",
        email: "",
        coment: "",
      },
    };
  },
  created() {
    try {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        this.form.email = user.email; //user.uid para el id de usuario
      });
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    comprobar() {
      return this.form.nombre.length > 2 ? true : false;
    },
    enable() {
      return (this.form.nombre.length = false ? enable : disable);
    },
  },
};
</script>
