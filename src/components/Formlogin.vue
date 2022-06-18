<template>
  <div>
    <div v-if="error" class="error">{{ error.message }}</div>
    <!-- Iniciamos el formulario -->
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      <!-- Agrupamos los elementos del formulario -->
      <b-form-group
        id="input-group-1"
        label="Correo:"
        label-for="input-2"
        description="Nunca compartiremos tus datos con nadie más.."
      >
        <!-- Agregamos input para Correo -->
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          placeholder="Introduce tu correo"
          required
        ></b-form-input>
      </b-form-group>
      <!-- Agregamos etiqueta contraseña -->
      <b-form-group>
        <label for="text-password1">Contraseña</label>
        <!-- Agregamos input para cotraseña -->
        <b-form-input
          type="password"
          id="text-password1"
          aria-describedby="password-help-block"
          v-model="form.password"
          required
          placeholder="Introduce la contraseña"
          v-b-popover.hover.v-danger.top="{ content: msg }"
        >
          <!-- Ventana emergente -->
        </b-form-input>
      </b-form-group>
      <br />
      <!-- Agregamos contenedor para botones -->
      <div class="d-flex justify-content-center">
        <b-button type="submit" variant="primary">Enviar</b-button> |
        <b-button type="reset" variant="danger">Cancelar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "Formlogin",
  data() {
    return {
      msg: "Password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.",
      form: {
        email: "",
        password: "",
      },
      error: "",
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      // Nos salta una alerta con los datos del formulario
      // alert(JSON.stringify(this.form));
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(
          auth,
          this.form.email,
          this.form.password
        ).then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          alert(user.email + " logeado con exito!");
        });
        // Restablece nuestros valores de formulario
        this.form.email = "";
        this.form.password = "";
        // Redireccion a home
        this.$router.replace({ name: "Home" });
      } catch (err) {
        console.log(err);
      }
    },
    onReset(event) {
      event.preventDefault();
      // Restablece nuestros valores de formulario
      this.form.email = "";
      this.form.password = "";
      // Truco para restablecer/borrar el estado de validación del formulario del navegador nativo
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  font: size 18px;
}
</style>
