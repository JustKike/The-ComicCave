<template>
  <div id="app">
    <!-- Agregamos el componente cabecera -->
    <Cabecera></Cabecera>
    <!-- Agregamos Barra de navegacion responsiba-->
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#"></b-navbar-brand>
        <!-- Enlaces responsivos -->
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <!-- Agregamos elementos -->
            <b-nav-item :to="{ name: 'Home' }" exact>
              <!-- Agregamos un icono a home -->
              <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true">
              </b-icon> Inicio</b-nav-item>
            <b-nav-item :to="{ name: 'Releases' }" exact>Lanzamientos</b-nav-item>
            <b-nav-item :to="{ name: 'Forum' }">Foro</b-nav-item>
            <b-nav-item :to="{ name: 'Contact' }">Contacto</b-nav-item>
            <b-nav-item :to="{ name: 'About' }">Acerca de</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
      <!-- Agregamos un boton de login a la Derecha -->
      <b-navbar-nav class="ml-auto"><Login></Login></b-navbar-nav>
    </b-navbar>
    <!-- Para llamar las rutas desde router -->
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
// Importamos componentes
import Cabecera from "@/components/Cabecera.vue";
import Login from "@/components/Login.vue";

// llamamos al los componentes
export default {
  name: "App",
  components: {
    Cabecera,
    Login,
  },
};
</script>
