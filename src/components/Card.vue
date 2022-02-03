<template>
<!-- Insertamos contenedor -->
  <div class="Card centrado m-3">
    <!-- Contenedor para la imagen -->
    <div class="container">
      <!-- Agregamos un link a la imagen -->
      <b-link :to="{ name: liga }">
        <!-- Insertamos imagen -->
        <b-card-img
          :src="srcText"
          fluid
          img-alt="Card Image"
          class="image">
          </b-card-img>
      </b-link>
      <!-- Agregamos un msj -->
      <div class="overlay">{{ msg }}</div>
    </div>
    <!-- Acceso a las rutas en router -->
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Card",
  //recibimos variables
  props: {
    msg: "string",
    dir: "string",
    liga: "",
  },
  //concatenamos el nombre la imagen con el url
  computed: {
    srcText() {
      return "../img/" + this.dir;
    },
  },
};
</script>

<!-- Estilos aplicados solo a esta seccion -->
<style scoped>
  .centrado {
    text-align: center;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    text-align: center;
  }

  .container {
    position: relative;
    width: 100%;
    height: auto;
    max-width: 260px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 0;
  }

  .image {
    display: block;
    width: 100%;
    height: auto;
    box-shadow: 4px 4px 10px #030000;
    transition: 0.3s;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.61); /* Black see-through */
    width: 100%;
    transition: 0.5s ease;
    opacity: 0;
    color: rgba(255, 255, 255, 0.212);
    font-weight:900;
    font-size: 25px;
    padding: 20px;
    text-align: center;
    text-decoration-color: overlay;
    -webkit-text-stroke: 0.5px rgb(255, 255, 255);
  }
  .container:hover .overlay {
    opacity: 100%;
  }
</style>
