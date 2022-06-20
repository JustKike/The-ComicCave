<template>
    <div class="px-3 py-2">
        <b-card class="mt-3" header="Datos de Usuario"
        header-bg-variant="primary"
        header-text-variant="white"
        border-variant="primary"
        align="center">
            <b-card-body
        style="position:relative; height:300px;"
      >
        <b-card-img v-bind="mainProps" :src="userProfileImg"  alt="Circle image" border-variant="dark"></b-card-img>
        <b-card-text><b-card-group>
          <b-table stacked :items="this.items">
          <template #cell(Nombre)="data">
            <span v-html="data.value"></span>
          </template>
          </b-table></b-card-group>
        </b-card-text>
      </b-card-body>
      </b-card>
    </div>
</template>

<script>
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "Profile",
    data() {
      return {
            url: '',
            Email: '', 
            mainProps: {
            blank: true,
            blankColor: '#777',
            width: 150,
            height: 200,
            center: true,
            fluidGrow: true,
            class: 'm1, rounded-circle' 
        },
        items: [
          {  //elementos de la tabla.
              Nombre: '<code>Nombre</code>', 
              Email: '@mail.com'
              }
        ]
      }
    },
    created() {
    try {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user != null){
          this.items.Email = user.email; //user.uid para el id de usuario
        }
      });
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    userProfileImg() {
      return require("@/assets/userProfile/img-profile.png");
    },
  }
}
</script>