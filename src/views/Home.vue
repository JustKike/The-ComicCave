<template>
  <div class="home centrado">
    <img alt="Vue logo" src="../assets/logo.png" img-center>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Cabecera from '@/components/Cabecera.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Cabecera
  }
}
</script>

<style scoped>
.centrado{
  text-align: center;
  background-image: url(../assets/fondo1.jpg);
  width:100%;
  height:100%;
}
</style>
