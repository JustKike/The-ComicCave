<template>
  <div id="app">
    <Cabecera></Cabecera>

    <b-navbar toggleable="md" type="dark" variant="danger">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">The ComicCave</b-navbar-brand>

        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'Home' }" exact>Home</b-nav-item>
            <b-nav-item :to="{ name: 'About' }">About</b-nav-item>
            <b-nav-item :to="{ name: 'Grid' }">Grid</b-nav-item>
            <b-nav-item :to="{ name: 'Cards' }">Cards</b-nav-item>
            <b-nav-item :to="{ name: 'Form' }">Form</b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-container>
    </b-navbar>

    <b-container>
      <router-view />
    </b-container>

  </div>
</template>

<script>
// @ is an alias to /src
import Cabecera from '@/components/Cabecera.vue'

export default {
  name: 'App',
  components: {
    Cabecera
  }
}
</script>
