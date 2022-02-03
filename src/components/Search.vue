<template>
  <div>
    <!-- Agrupamos los complementos de busqueda -->
    <b-input-group class="mt-3">
      <!-- imput para ingresar parametros de busquedas -->
    <b-form-input placeholder="Buscar por..."></b-form-input>
    <!-- agregamos un boton de busqueda -->
    <b-input-group-append>
      <b-button variant="primary">Buscar</b-button>
    </b-input-group-append>
  </b-input-group>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

