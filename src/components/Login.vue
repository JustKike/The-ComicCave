<template>
  <div>
    <!-- Agregamos un contenedor -->
    <div class="mb-2">
      <!-- Agregamos boton iniciar sesion para mostrar barra lateral -->
      <b-button
        pill
        variant="primary"
        v-b-toggle
        href="#example-sidebar"
        @click.prevent>
        Inicio | Registro
        </b-button>
    </div>
    <!-- Agregamos barra lateral -->
    <b-sidebar 
      id="example-sidebar"
      title="Sidebar"
      aria-label="Sidebar with custom footer"
      no-header bg-variant="dark">
      <!-- Agregamos un footer -->
      <template #footer="{ hide }">
        <div
          class="d-flex bg-primary  text-light justify-content-between align-items-center px-3 py-2"
        >
          <strong class="mr-auto">The ComicCave</strong>
          <b-button class="float-right" size="sm" @click="hide">Close</b-button>
        </div>
      </template>
      <!-- Termina el footer -->
      <!-- Agregamos contenedor -->
      <div class="px-3 py-2">
        <!-- Agregagmos una contenedor tipo carta -->
        <b-card class="mt-3" header="Inicia Sesion">
          <!-- Creamos el formulario de inicio de sesion -->
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <!-- Agrupamos los complementos -->
            <b-form-group
              id="input-group-1"
              label="Correo:"
              label-for="input-1"
              description="Nunca compartiremos su informacion con nadie más.">
              <!-- Agregamos input para correo -->
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Introduce tu correo"
                required>
              </b-form-input>
            </b-form-group>
            <!-- Agrupamos complementos -->
            <b-form-group>
              <!-- Creamos etiqueta -->
              <label for="text-password">Contraseña</label>
              <!-- Input para introducir contraseña -->
              <b-form-input
                type="password"
                id="text-password"
                aria-describedby="password-help-block"
                v-model="form.password"
                required
                placeholder="Introduce Contraseña"
                v-b-popover.hover.v-danger.top="{ content: msg }"
                title="CUIDADO!">
              </b-form-input>
            </b-form-group>
            <!-- Agregamos una separacion -->
            <br/>
            <!-- contenedor para boton enviar y cancelar -->
            <div class="d-flex justify-content-center">
              <b-button type="submit" variant="primary">Enviar</b-button>|
              <b-button type="reset" variant="danger">Cancelar</b-button>
            </div>
          </b-form>
          <!-- Termina el formulario -->
        </b-card>
      </div>
      <!-- Agregamos un contenedor para modal Crear cuenta -->
      <div class="px-3 py-2">
        <join></join>
      </div>
    </b-sidebar>
    <!-- Final de la barra lateral -->
  </div>
</template>

<script>
  // importamos el modal Join
  import Join from "./Join.vue";

  export default {
    components: { Join },
    name: "Login",
    data() {
      return {
        msg: "La contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.",
        form: {
          email: "",
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
        // Reset our form values
        this.form.email = "";
        this.form.password = "";
        // Trick to reset/clear native browser form validation state
        this.show = false;
        this.$nextTick(() => {
          this.show = true;
        });
      },
    },
  };
</script>
<style scoped>
.oscuro {
  background-color: black;
}
.shadow{
  text-shadow: 2px 2px 4px #030000;
}
</style>
