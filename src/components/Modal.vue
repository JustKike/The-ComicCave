<template>
  <!-- Agreamos un contendor para el modal -->
  <b-card no-body>
    <!-- Agregamos pestañas -->
    <b-tabs card>
      <!-- Agregamos la pestaña ficha -->
      <b-tab title="Ficha">
        <!-- Agreagmos contenedor -->
        <b-container fluid>
            <!-- Agregamos componente ficha -->
            <Ficha></Ficha>
        </b-container>
      </b-tab>
      <!-- Agreagmos la pestaña Comentarios -->
      <b-tab title="Comentarios">
        <!-- Agregamos un titulo -->
        <b-card-title><code>Agrega un comentario:</code></b-card-title>
        <!-- Agregamos una seccion para comentarios -->
        <b-card-text class="texto">
          <Comments></Comments>
        </b-card-text>
      </b-tab>

    </b-tabs>
  </b-card>
</template>

<script>
import Comments from "@/components/Comments.vue";
import Ficha from "@/components/Ficha.vue";

  export default {
      components:{
          Comments,
          Ficha
      },
      name: 'Modal',
  }
</script>

<style>
.texto {
  text-align: justify;
}
</style>


