<template>
  <div class="contenedor centrado m-5"
      style="
        background-color: white;
        background-repeat: no-repeat;
        transform: translate3d(0px, 0px, 0px);
        background-size: 100% 100%;
      ">
    <h1>{{ titulo }}</h1>
    <h2>{{ categoria }}</h2>
    <h3>{{ autor }} - {{ date }}</h3>
    <div class="container">
    <p>{{ parrafo }}</p>
    </div>

    <router-link :to="'/Forum/'">
      <button class="btn btn-primary button">atras</button>
    </router-link>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { db } from "@/firebase";
import { collection, updateDoc } from "firebase/firestore/lite";
import { doc, getDoc, query, where, onSnapshot } from "firebase/firestore/lite";
import router from "../router/index";
export default {
  name: "Edit",
  data() {
    return {
      publicacion: [],
      id: "",
      titulo: "",
      categoria: "",
      date: "",
      autor: "",
      parrafo: "",
    };
  },
  methods: {
    async obtenerDatos() {
      try {
        const id = window.location.pathname.split("/")[2];
        this.id = id;
        console.log("dato:", this.id);

        const publicacion = [];
        const docRef = doc(db, "temas", id);
        const getData = async () => {
          const docSnap = await getDoc(docRef);
          publicacion.push(docSnap.data());
          this.publicacion = publicacion;
          console.log("datos:", publicacion);
          this.agregar(publicacion);
        };

        getData();
      } catch (error) {
        console.log(error);
      }
    },
    async agregar(publicacion) {
      publicacion.forEach((tema) => {
        this.titulo = tema.titulo;
        this.autor = tema.autor;
        this.date = tema.date;
        this.categoria = tema.seleccion;
        this.parrafo = tema.texto;
      });
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

<style scoped>
.centrado {
  position: relative;
  display: block;
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
h1 {
  font-family: "lust-display-didone", serif;
  text-align: center;
  font-weight: bold;
  font-size: 60px;
  width: 100%;
  letter-spacing: 0.5rem;
  color: rgb(105, 10, 3);
  text-shadow: 2px 5px 8px #030000;
}
p {
  position: relative;
  font-family: Century Schoolbook, Century Schoolbook L, Georgia, serif;
  font-size: 30px;
  text-align: justify;
  margin: auto;
  color: rgb(10, 10, 10);
  font-weight: 100;
  text-shadow: 2px 5px 8px #030000;
  margin-bottom: 10px;
  width: 100%;
}
.button {
  position: relative;
  display: block;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 10px;
}
</style>
