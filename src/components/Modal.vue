<template>
  <b-card no-body>
    <b-tabs card>

      <b-tab title="Ficha">
        <b-container fluid>
            <Ficha></Ficha>
        </b-container>
      </b-tab>

      <b-tab title="Comentarios">
        <b-card-title><code>Agrega un comentario:</code></b-card-title>
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


