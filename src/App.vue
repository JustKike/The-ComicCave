<template>
  <div id="app centrado">
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
    <Footer></Footer>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Cabecera from "@/components/Cabecera.vue";
import Login from "@/components/Login.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "App",
  components: {
    Cabecera,
    Login,
    Footer
  },
};
</script>

<style scoped>
/* CSS */
* {
  padding: 0px;
  margin: 0px;
}

  .centrado {
  text-align: center;
  background-image: url(assets/fondo1.jpg);
   background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  text-align: center;
  padding: auto;
  background-color: rgba(255, 20, 145, 0.336);
}
</style>
