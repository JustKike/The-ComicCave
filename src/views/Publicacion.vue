<template>
<!-- contenedor de la publicacion -->
  <div class="mb-3">
    <!-- boton para volver atras -->
    <router-link :to="'/Forum/'">
      <button class="btn btn-primary button mt-5">atras</button>
    </router-link>
    <div
      class="contenedor centrado m-5"
      style="
        background-color: white;
        background-repeat: no-repeat;
        transform: translate3d(0px, 0px, 0px);
        background-size: 100% 100%;
      "
    >
    <!-- Titulo de la publicacion -->
      <h1>{{ titulo }}</h1>
      <!-- Categoria -->
      <h2>{{ categoria }}</h2>
      <!-- autor de la publicacion -->
      <h3>{{ autor }} - {{ date }}</h3>
      <!-- texto de la publicacion -->
      <div class="container mb-5">
        <p>{{ parrafo }}</p>
      </div>
    </div>
    <!-- boton mostrar modal para comentarios -->
      <b-button
        @click="modalShow = !modalShow"
        variant="info"
        class="button" block
      >
        Comentarios
      </b-button>
    <!-- modal de comentarios -->
    <b-modal v-model="modalShow" size="lg">
      <Comments></Comments>
    </b-modal>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { doc, getDoc, query, where, onSnapshot } from "firebase/firestore/lite";
import Comments from "@/components/Comments.vue";

export default {
  name: "Edit",
  components: { Comments },
  data() {
    return {
      publicacion: [],
      id: "",
      titulo: "",
      categoria: "",
      date: "",
      autor: "",
      parrafo: "",
      modalShow: false,
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.404);
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
  margin-bottom: 5px;
  width: 100%;
}
.button {
  display: block;
  margin: 0 auto;
  align-items: center;;
}
</style>
