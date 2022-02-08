<template>
  <!-- Insertamos contenedor -->
    <b-container fluid class="bg-dark">
      <Comic msg="the-dark-night-return.pdf"></Comic>
    </b-container>
</template>

<script>
//importamos el comic
import Comic from "@/components/Comic.vue";

export default {
  components: {
    Comic,
  },
  name: "ModalComic",
};
</script>

<style>
.texto {
  text-align: justify;
}
</style>
