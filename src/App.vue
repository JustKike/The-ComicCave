<template>
  <div id="app">
    <!-- Agregamos el componente cabecera -->
    <Cabecera></Cabecera>
    <!-- Agregamos Barra de navegacion responsiba-->
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#" ></b-navbar-brand>
        <!-- Enlaces responsivos -->
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <!-- Agregamos elementos -->
            <b-nav-item :to="{ name: 'Home' }" exact>
              <!-- Agregamos un icono a home -->
              <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true">
              </b-icon> Inicio</b-nav-item>
            <b-nav-item :to="{ name: 'Releases' }" exact>Lanzamientos</b-nav-item>
            <b-nav-item :to="{ name: 'Forum' }">
              <b-icon icon="chat-square-text-fill" scale="0.9" shift-v="1" aria-hidden="true"></b-icon>
               Foro</b-nav-item>
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
    <!-- componente de titulo manda un msj dentro de una variable si hay sesion iniciada -->
    <Bienvenido :state="comprobar" msg="BIENVENIDO A THE COMICCAVE" v-if="show" />
    <!-- pie de pagina -->
    <Footer></Footer>
  </div>
</template>

<script>
// Importamos componentes
import Cabecera from "@/components/Cabecera.vue";
import Login from "@/components/Login.vue";
import Footer from "@/components/Footer.vue";
import Bienvenido from "@/components/Bienvenido.vue";
import { getAuth } from "firebase/auth";

// llamamos al los componentes
export default {
  name: 'app',
  components: {
    Cabecera,
    Login,
    Bienvenido,
    Footer
  },
  data() {
    return {
      show: true,
    }
  },
  computed: {
      comprobar(){
        try {
          const requiresAuth = true;
          const auth = getAuth();
          const isAuthenticated = auth.currentUser;
          if (requiresAuth && !isAuthenticated) {
              return this.show = true;
          } else {
              return this.show = false;
          }
        } catch (err) {
          console.log(err);
        }
      }
    },
};

</script>
