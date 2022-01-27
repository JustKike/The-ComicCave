<template>
  <div>
    <b-button v-b-toggle.collapse-3 class="m-1">Join</b-button>
    <b-collapse id="collapse-3">
      <b-card class="mt-3" header="Crea una cuenta">
        <Formlogin></Formlogin>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import Formlogin from "@/components/Formlogin.vue";

export default {
  name: "Join",
  components: {
    Formlogin,
  },
};
</script>
