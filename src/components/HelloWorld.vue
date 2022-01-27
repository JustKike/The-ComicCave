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
</style>
