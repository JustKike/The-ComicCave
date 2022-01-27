<template>
  <div>
    <div class="mb-2">
      <b-button
        pill
        variant="primary"
        v-b-toggle
        href="#example-sidebar"
        @click.prevent
        >Singn in | join</b-button
      >
    </div>

    <b-sidebar 
      id="example-sidebar"
      title="Sidebar"
      aria-label="Sidebar with custom footer"
      no-header bg-variant="dark"
    >
      <template #footer="{ hide }">
        <div
          class="d-flex bg-primary  text-light justify-content-between align-items-center px-3 py-2"
        >
          <strong class="mr-auto">The ComicCave</strong>
          <b-button class="float-right" size="sm" @click="hide">Close</b-button>
        </div>
      </template>
      <div class="px-3 py-2">
        <b-card class="mt-3" header="Inicia Sesion">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <label for="text-password">Password</label>
              <b-form-input
                type="password"
                id="text-password"
                aria-describedby="password-help-block"
                v-model="form.password"
                required
                placeholder="Enter password"
                v-b-popover.hover.v-danger.top="{ content: msg }"
                title="CUIDADO!"
              ></b-form-input>
            </b-form-group>
            <br />

            <div class="d-flex justify-content-center">
              <b-button type="submit" variant="primary">Submit</b-button> |
              <b-button type="reset" variant="danger">Reset</b-button>
            </div>
          </b-form>
        </b-card>
      </div>

      <div class="px-3 py-2">
        <join></join>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import Join from "./Join.vue";
import Cabecera from '@/components/Cabecera.vue';
export default {
  components: { Join },
  name: "Login",
  data() {
    return {
      msg: "Password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.",
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style scoped>
.oscuro {
  background-color: black;
}
.shadow{
  text-shadow: 2px 2px 4px #030000;
}
</style>
