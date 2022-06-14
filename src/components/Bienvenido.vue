<template>
<!-- Agregamos estructura al componente -->
  <div class="centrado">
    <b-jumbotron bg-variant="light" text-variant="white"  class="p-4">
      <!-- Agregamos un titulo -->
      <h1>{{ msg }}</h1>
      <!-- Agregamos un parrafo -->
      <p>Incia sesion o crea un usuario para disfrutar de los mejores Comics en buena calidad</p>
    </b-jumbotron>
  </div>
</template>

<script>
// Configuracion de mi componente
export default {
  name: "Bienvenido",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
  .centrado {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
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