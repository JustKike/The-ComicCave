<template>
  <!-- contenedor -->
  <div class="contact">
    <!-- componente formulario -->
    <Form></Form>
  </div>
</template>

<script>
// importamos el componente formulario
import Form from "@/components/Form.vue";
// Agregamos el componente al template
export default {
  name: "contact",
  components: {
    Form,
  },
};
</script>
