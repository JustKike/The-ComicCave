<template>
  <div>
    <!-- Iniciamos el formulario -->
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <!-- Agrupamos los elementos del formulario -->
      <b-form-group
        id="input-group-1"
        label="Correo:"
        label-for="input-2"
        description="Nunca compartiremos tus datos con nadie más..">
        <!-- Agregamos input para Correo -->
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          placeholder="Introduce tu correo"
          required
        ></b-form-input>
      </b-form-group>
      <!-- Agregamos etiqueta nombre -->
      <b-form-group id="input-group-2" label="Nombre:" label-for="input-3">
        <!-- insertamos input para el nombre -->
        <b-form-input
          id="input-3"
          v-model="form.name"
          placeholder="Introduce un nombre"
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
           v-b-popover.hover.v-danger.top="{ content: msg }"> <!-- Ventana emergente -->
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
export default {
  name: "Formlogin",
  data() {
    return {
      msg: "Password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.",
      form: {
        email: "",
        name: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Restablece nuestros valores de formulario
      this.form.email = "";
      this.form.name = "";
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
