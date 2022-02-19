<template>
  <!-- contenedor -->
  <div>
    <!-- titulo -->
    <h1 class="mt-5">FUNDADORES DE COMICCAVE-HISTORIA</h1>
    <!-- Tarjeta Fundador 1-->
    <b-row class="mt-4" id="tarjetaJair">
      <!-- agregamos columna -->
      <b-col cols="12" md="4">
        <!-- titulo de la tarjeta -->
        <h4>Jair Cervantes</h4>
        <!-- creamos tarjeta -->
        <b-card class="flex">
          <!-- Insertamos imagen -->
          <b-img
            thumbnail
            fluid
            alt="Responsive image"
            class="mb -3"
            style="float: left; margin-right: 50px"
            src="../img/Kike.jpg"
            height="300"
            width="200"
          >
          </b-img>
          <!-- Agregamos descripcion -->
          <b-card-text>
            Jair Cervantes fue el miembro original del proyecto, es originario
            de Tijuana y la persona que aportó con la idea, tiene experiencia en
            el desarrollo web frontend que es lo que mejor se le da debido a su
            gran creatividad al momento de diseñar interfaces.
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <!-- Tarjeta fundador 2 -->
    <b-row class="mt-4" id="tarjetaJose">
      <!-- Agregamos una columna -->
      <b-col cols="12" md="4">
        <!-- Agregamos un titulo -->
        <h4>Jose Ubieta</h4>
        <!-- Creamos tarjeta -->
        <b-card class="flex">
          <!-- Insertamos una imagen -->
          <b-img
            thumbnail
            fluid
            alt="Responsive image"
            class="mb -3"
            style="float: left; margin-right: 50px"
            src="../img/joselo.jpeg"
            height="300"
            width="200"
          >
          </b-img>
          <!-- Agregamos una descripcion -->
          <b-card-text>
            José Ubieta es uno de los miembros fundadores, impulsado por la idea
            de Jair de hacer una página web donde varias personas pudieran
            disfrutar de sus cómics e interactuar.
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
// Algregamos algunos estilos a los elementos
<style scoped>
.mt-5 {
  position: relative;
}
#tarjetaJair {
  margin-bottom: 10px;
  height: 100%;
  width: 2500px;
  vertical-align: middle;
}
#tarjetaJose {
  margin-bottom: 20px;
  height: 100%;
  width: 2500px;
  vertical-align: middle;
}
h1 {
  font-family: "lust-display-didone", serif;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  width: 100%;
  letter-spacing: 0.5rem;
  color: rgb(105, 10, 3);
  text-shadow: 2px 5px 8px #030000;
}
p {
  font-family: Century Schoolbook, Century Schoolbook L, Georgia, serif;
  font-size: 20px;
  text-align: justify;
  margin: 0rem 3rem 0;
  color: rgb(10, 10, 10);
  font-weight: 100;
  text-shadow: 2px 5px 8px #030000;
  vertical-align: middle;
}
</style>
