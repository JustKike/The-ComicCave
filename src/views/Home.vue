<template>
  <div class="home centrado">
    <div class="container">
    <Cliplogo></Cliplogo>
    <HelloWorld msg="Bienvenido a The ComicCave" />
    <Search></Search>
    <Card msg="# 1 Ciencia ficción"  dir="space01.jpg" ></Card>
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
}
</style>
