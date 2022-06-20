<template>
  <div class="mt-5">
    <h1>Ponte en contacto con nosotros</h1>

    <form action="https://formsubmit.co/jose.ubietadiaz@cesunbc.edu.mx" method="POST">
      <b-col md="6">
        <b-row>
           <label for="text-name">Nombre</label>
          <b-form-input name="nombre"
           id="text-name" aria-describedby="name-help-block"
            v-model="form.nombre"
            :state="comprobar"
            placeholder="Escribe tu nombre"
          ></b-form-input>
            <b-form-text id="name-help-block">Al menos 3 caracteres</b-form-text>
        </b-row>
        <p></p>
        <b-row>
          <label for="text-email">Correo</label>
          <b-form-input name="email" id="text-email"  v-model="form.email"></b-form-input>
        </b-row>
        <p></p>

        <b-row>
          <label for="text-comment">Comentario</label>
          <textarea
            class="form-control" name="comentario"
            id="text-comment"
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
          <b-button type="submit" variant="primary" class="mb-3" size="sm">Enviar</b-button>
        </b-row>
      </b-col>
      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_next" value="http://localhost:8080/the-comiccave">
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
        if (user != null){
          this.form.email = user.email; //user.uid para el id de usuario
        }
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
