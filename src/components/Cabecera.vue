<template>
  <div class="contenedor">
    <img class="Imgfondo" alt="Vue logo" src="@/assets/cabecera7.jpg" />
    <div class="centrado"><h1 class="shadow">The ComicCave</h1></div>
  </div>
</template>

<script>
export default {
  name: "Cabecera",
};
</script>

<style scoped>
.Imgfondo {
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
.contenedor {
  position: relative;
  display: block;
  text-align: center;
}
.centrado {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}
h1{
  font-family: Georgia, "Times New Roman", Times, serif;
  
}
.shadow {
  color: rgb(255, 153, 0);
  text-shadow: 2px 5px 8px #030000;
  font-size:80px;
  font-weight: bold;
}
</style>
