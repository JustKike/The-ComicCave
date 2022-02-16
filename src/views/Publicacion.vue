<template>
    <div>
        <h1>Esto es una Publicacion</h1>
        <h1></h1>

        <h1></h1>

        <h1></h1>

        <h1></h1>

        <p></p>
        
        <router-link :to="'/Forum/'">
            <button class="btn btn-primary">atras</button>
        </router-link>
    </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { db } from "@/firebase";
import { doc, collection, getDocs, updateDoc, onSnapshot } from "firebase/firestore/lite";
import router from "../router/index";
export default {
  name: "Edit",
  data() {
    return {
      publicacion: [],
    };
  },
methods: {
async obtenerDatos() {
      try {
        const route = useRoute();
        const userId = computed(() => route.params.id);
        // const querySnapshot = await onSnapshot(doc(db, "temas", userId.value));
        const docRef = collection(db, "temas", "tYkjWV2S6Cw6PiuaJvGb");
        const querySnapshot = await getDocs(docRef);
        const publicacion = [];
        let usuario = docSnap.data();
        publicacion.push(usuario);
        publicacion.forEach((doc) => {
          let tema = doc.data();
          tema.id = doc.id;
          publicacion.push(tema);
          this.publicacion = publicacion;
        });
        console.log(publicacion);
      } catch (error) {
        console.log(error);
      }
    },
// async deleteUser(id){
//   await deleteDoc(doc(db, "temas", id ));
//   router.go('/')
// },
},
mounted() {
this.obtenerDatos();
},
};
</script>