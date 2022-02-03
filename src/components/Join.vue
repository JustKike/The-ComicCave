<template>
  <div>
    <!-- Agregamos boton desplegable -->
    <b-button v-b-toggle.collapse-3 class="m-1">Registrate</b-button>
    <b-collapse id="collapse-3">
      <!-- Agregamos un contenedor colapsable -->
      <b-card class="mt-3" header="Crea una cuenta">
        <!-- Agregamos etiqueta formulario -->
        <Formlogin></Formlogin>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
// Importamos el componente formulario
import Formlogin from "@/components/Formlogin.vue";

export default {
  name: "Join",
  components: {
    Formlogin,
  },
};
</script>
