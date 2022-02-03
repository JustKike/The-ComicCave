<template>
<!-- Creamos un contenedor -->
  <div class="contenedor">
    <!-- Insertamos una imagen de cabecera -->
    <img class="Imgfondo" alt="Vue logo" src="@/assets/cabecera7.jpg" />
    <!-- Agregamos el titulo del encabezado -->
    <div class="centrado"><h1 class="shadow">The ComicCave</h1></div>
  </div>
</template>

<script>
// Exportamos el componente
export default {
  name: "Cabecera",
};
</script>
// Agregamos algunos estilos al componente
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
