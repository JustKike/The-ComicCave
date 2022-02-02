<template>
  <div class="hello centrado">
    <h1>{{ msg }}</h1>
    <p>El lugar donde encontraras los mejores Comics en buena calidad</p>
    <sidebar></sidebar>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centrado {
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
h1 {
  font-family: "lust-display-didone", serif;
  text-align: center;
  font-weight: bold;
  font-size: 60px;
  width: 100%;
  letter-spacing: 0.5rem;
  color: rgb(105, 10, 3);
  text-shadow: 2px 5px 8px #030000;
}
p {
  font-family: Century Schoolbook, Century Schoolbook L, Georgia, serif;
  font-size: 30px;
  text-align: center;
  margin: 2rem 3rem 0;
  color: rgb(10, 10, 10);
  font-weight: 100;
  text-shadow: 2px 5px 8px #030000;
}
</style>
