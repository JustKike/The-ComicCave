<template>
  <div id="app">
    <Cabecera></Cabecera>

    <b-navbar toggleable="lg" type="dark" variant="danger">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#"></b-navbar-brand>

        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'Home' }" exact>
              <b-icon
                icon="house-fill"
                scale="1.25"
                shift-v="1.25"
                aria-hidden="true"
              >
              </b-icon>
              Inicio</b-nav-item
            >
            <b-nav-item :to="{ name: 'Releases' }" exact
              >Lanzamientos</b-nav-item
            >
            <b-nav-item :to="{ name: 'Contact' }">Contacto</b-nav-item>
            <b-nav-item :to="{ name: 'About' }">Acerca de</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
      <b-navbar-nav class="ml-auto"><Login></Login></b-navbar-nav>
    </b-navbar>

    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Cabecera from "@/components/Cabecera.vue";
import Login from "@/components/Login.vue";

export default {
  name: "App",
  components: {
    Cabecera,
    Login,
  },
};
</script>
