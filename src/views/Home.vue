<template>
  <div class="home centrado">
    <div class="container centrado">
    <!-- componente de titulo manda un msj dentro de una variable -->
    <HelloWorld msg="BIENVENIDO A THE COMICCAVE" />
    <!-- Agregamos un boton de busqueda, no esta activo por el momento-->
    <Search></Search>
    <!-- Agregamos un contenedor para insertar las categorias -->
    <div class="centrado">
    <!-- Agregamos tarjetas agrupandolas para cada categoria-->
    <b-card-group class="centrado m-2">
    <Card msg="# 1 Ciencia ficción"  dir="space01.jpg" liga="CienciaF"></Card>
    <Card msg="# 2 Horror"  dir="AdventuresIntoDarkness.jpg" ></Card>
    <Card msg="# 3 Guerra"  dir="GI-Joe.jpg" ></Card> 
    <Card msg="# 4 Superhéroes"  dir="SuperHeroes.jpg" liga="SuperH" ></Card>
    </b-card-group>
    </div>
    </div>
  </div>
</template>

<script>
// Importamos componentes
import HelloWorld from "@/components/HelloWorld.vue";
import Cabecera from "@/components/Cabecera.vue";
import Search from "@/components/Search.vue";
import Card from "@/components/Card.vue";
import Comic from "@/components/Comic.vue";

// Agregamos los componentes para utilizarlos en el template
export default {
  name: "Home",
  components: {
    HelloWorld,
    Cabecera,
    Search,
    Card,
    Comic
  },
};
</script>

<style scoped>
/* Algunos estilos aplicados solo a esta vista */
.centrado {
  text-align: center;
  align-items: center;
}
</style>
