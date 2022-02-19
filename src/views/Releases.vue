<template>
  <!-- contenedor -->
  <div class="releases">
    <!-- titulo -->
    <h1>Lanzamientos más recientes</h1>
    <p></p>
    <!-- categoria Marvel -->
    <h2>Marvel</h2>
    <!-- Agrupamos tarjetas -->
    <b-card-group>
      <!-- agregamos una columna -->
      <b-col>
        <!-- cargamos componente tarjeta -->
        <Card msg="King Thor" dir="KingThor.jpg" liga="Marvel"></Card>
      </b-col>
      <!-- agregamos otra columna -->
      <b-col>
        <!-- agregamos componente tarjeta -->
        <Card
          msg="Carnage: Family Freud"
          dir="Carnage.jpg"
          liga="Marvel"
        ></Card>
      </b-col>
      <!-- agregamos una columna -->
      <b-col>
        <!-- agregamos componente tarjeta -->
        <Card msg="Eternals" dir="Eternals.jpg" liga="Marvel"></Card>
      </b-col>
    </b-card-group>
    <!-- Termina primer categoria -->
    <p></p>
    <!-- Categoria DC -->
    <h2>DC</h2>
    <!-- Agrupamos tarjetas -->
    <b-card-group>
      <!-- agregamos una columna -->
      <b-col>
        <!-- agregamos componente tarjeta -->
        <Card msg="Batman: Three Jokers" dir="ThreeJokers.jpg" liga="DC"></Card>
      </b-col>
      <!-- agregamos una columna -->
      <b-col>
        <!-- agregamos componente tarjeta -->
        <Card
          msg="Green Lantern: Earth One"
          dir="GreenLantern.jpg"
          liga="DC"
        ></Card>
      </b-col>
      <!-- agregamos una columna -->
      <b-col>
        <!-- agregamos componente tarjeta -->
        <Card
          msg="Wonder Woman: Dead Earth"
          dir="WonderWoman.jpg"
          liga="DC"
        ></Card>
      </b-col>
    </b-card-group>
    <!-- Termina Segunda Categoria -->
    <p></p>
    <!-- Categoria General -->
    <h2>Otros</h2>
    <!-- Agrupamos tarjetas -->
    <b-card-group>
      <!-- agregamos una columna -->
      <b-col>
        <!-- agregamos componente tarjeta -->
        <Card msg="Invincible" dir="Invincible.jpg" liga="Otros"></Card>
      </b-col>
      <!-- agregamos una columna -->
      <b-col>
        <!-- agregamos componente tarjeta -->
        <Card msg="Sonic: The Hedgehog" dir="Sonic.jpg" liga="Otros"></Card>
      </b-col>
      <!-- agregamos una columna -->
      <b-col>
        <!-- agregamos componente tarjeta -->
        <Card
          msg="The Witcher: El lamento de la bruja"
          dir="TheWitcher.jpeg"
          liga="Otros"
        ></Card>
      </b-col>
    </b-card-group>
  </div>
</template>
<script>
// importamos las tarjetas
import Card from "../components/Card.vue";
// agregamos el componente tarjeta
export default {
  name: "Releases",
  components: {
    Card,
  },
};
</script>
