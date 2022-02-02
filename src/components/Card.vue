<template>
  <div class="Card centrado mt-5 mb-5">
    <div class="container">
      <b-link :to="{ name: liga }">
        <b-img
          :src="srcText"
          fluid
          alt="Responsive image"
          class="image"
          width="224"
          height="48"
        ></b-img>
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
* {
  box-sizing: border-box;
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
  max-width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
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
  width: 92%;
  transition: 0.5s ease;
  opacity: 0;
  color: rgba(255, 255, 255, 0.212);
  font-weight: bold;
  font-size: 27px;
  padding: 20px;
  text-align: center;
  text-decoration-color: overlay;
  -webkit-text-stroke: 0.5px rgb(255, 255, 255);
}
.container:hover .overlay {
  opacity: 100%;
}
</style>
