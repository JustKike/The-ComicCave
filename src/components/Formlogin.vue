<template>
  <div>
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

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
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
  </div>
</template>

<script>
export default {
  name: "Formlogin",
  data() {
    return {
      msg: "Password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.",
      form: {
        email: "",
        name: "",
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
      this.form.name = "";
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
