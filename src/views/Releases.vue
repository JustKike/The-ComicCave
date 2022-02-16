<template>
  <div class="releases">
    <h1>Lanzamientos más recientes</h1>
<p></p>
<h2>Marvel</h2>
  <b-card-group>
        <b-col>
        <Card msg="King Thor"  dir="KingThor.jpg" liga="Marvel"></Card>  
        </b-col>
        <b-col>
        <Card msg="Carnage: Family Freud" dir="Carnage.jpg" liga="Marvel"></Card>
        </b-col>
        <b-col>
          <Card msg="Eternals" dir="Eternals.jpg" liga="Marvel"></Card>
        </b-col>
  </b-card-group>

<p></p>
<h2>DC</h2>
<b-card-group>
  <b-col>
    <Card msg="Batman: Three Jokers" dir="ThreeJokers.jpg" liga="DC"></Card>
  </b-col>
  <b-col>
        <Card msg="Green Lantern: Earth One" dir="GreenLantern.jpg" liga="DC"></Card>
  </b-col>
  <b-col>
        <Card msg="Wonder Woman: Dead Earth" dir="WonderWoman.jpg" liga="DC"></Card>
  </b-col>
</b-card-group>

<p></p>
<h2>Otros</h2>
<b-card-group>
  <b-col>
    <Card msg="Invincible" dir="Invincible.jpg" liga="Otros"></Card>
  </b-col>
  <b-col>
    <Card msg="Sonic: The Hedgehog" dir="Sonic.jpg" liga="Otros"></Card>
  </b-col>
  <b-col>
    <Card msg="The Witcher: El lamento de la bruja" dir="TheWitcher.jpeg" liga="Otros"></Card>
  </b-col>
</b-card-group>

  </div>
</template>
<script>
import Card from '../components/Card.vue';
// import Footer from "@/components/Footer.vue";

export default {
  name: "Releases",
  components: {
    Card
  },
};
</script>

