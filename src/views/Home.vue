<template>
  <div class="home centrado">
    <Cliplogo></Cliplogo>
    <HelloWorld msg="Bienvenido a The ComicCave" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Cabecera from "@/components/Cabecera.vue";
import Cliplogo from "@/components/Cliplogo.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Cabecera,
    Cliplogo
  },
};
</script>

<style scoped>
.centrado {
  text-align: center;
  background-image: url(../assets/fondo1.jpg);
  width: 100%;
  height: 100%;
}
</style>
