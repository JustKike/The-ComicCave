<template>
  <div id="app">

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

          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
          

        </b-collapse>
      </b-container>
    </b-navbar>

    <b-container>
      <router-view />
    </b-container>

  </div>
</template>
