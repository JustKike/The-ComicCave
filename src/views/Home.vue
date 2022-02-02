<template>
  <div class="home centrado">
    <div class="container centrado">
    <HelloWorld msg="BIENVENIDO A THE COMICCAVE" />
    <Search></Search>
    <div class="centrado">
    <b-card-group class="centrado m-2">
    <Card msg="# 1 Ciencia ficción"  dir="space01.jpg" liga="CienciaF"></Card>
    <Card msg="# 2 Horror"  dir="AdventuresIntoDarkness.jpg" ></Card>
    <Card msg="# 3 Guerra"  dir="GI-Joe.jpg" ></Card> 
    <Card msg="# 4 Superhéroes"  dir="SuperHeroes.jpg" ></Card>
    </b-card-group>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Cabecera from "@/components/Cabecera.vue";
import Cliplogo from "@/components/Cliplogo.vue";
import Search from "@/components/Search.vue";
import Card from "@/components/Card.vue";


export default {
  name: "Home",
  components: {
    HelloWorld,
    Cabecera,
    Cliplogo,
    Search,
    Card
  },
};
</script>

<style scoped>

.centrado {
  text-align: center;
  align-items: center;
}
</style>
