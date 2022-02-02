<template>
  <div class="Card centrado m-3">
    <div class="container">
      <b-link :to="{ name: liga }">
        <b-card-img
          :src="srcText"
          fluid
          img-alt="Card Image"
          class="image" 
        ></b-card-img>
      </b-link>
      <div class="overlay">{{ msg }}</div>
    </div>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    msg: "string",
    dir: "string",
    liga: "",
  },
  computed: {
    srcText() {
      return "../img/" + this.dir;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centrado {
  text-align: center;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  text-align: center;
}

.container {
  position: relative;
  width: 100%;
  height: auto;
  max-width: 260px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 0;
}

.image {
  display: block;
  width: 100%;
  height: auto;
  box-shadow: 4px 4px 10px #030000;
  transition: 0.3s;
}

.overlay {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.61); /* Black see-through */
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  color: rgba(255, 255, 255, 0.212);
  font-weight:900;
  font-size: 25px;
  padding: 20px;
  text-align: center;
  text-decoration-color: overlay;
  -webkit-text-stroke: 0.5px rgb(255, 255, 255);
}
.container:hover .overlay {
  opacity: 100%;
}
</style>
