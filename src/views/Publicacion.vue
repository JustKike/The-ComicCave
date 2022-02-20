<template>
<!-- contenedor de la publicacion -->
  <div class="mb-3">
    <div
      class="contenedor centrado m-5"
      style="
        background-color: white;
        transform: translate3d(0px, 0px, 0px);
        background-size: 100% 100%;"
    >
    <!-- boton para volver atras -->
    <router-link :to="'/Forum/'" style="float: right;">
      <button class="btn btn-dark button">atras</button>
    </router-link>
    <!-- Titulo de la publicacion -->
      <h1>{{ titulo }}</h1>
      <!-- Categoria -->
      <h2>{{ categoria }}</h2>
      <!-- autor de la publicacion -->
      <h3>{{ autor }} - {{ date }}</h3>
      <!-- texto de la publicacion -->
      <div class="container mt-5">
        <p>{{ parrafo }}</p>
      </div>
      <!-- boton mostrar modal para comentarios -->
      <b-button block 
        @click="modalShow = !modalShow"
        variant="primary"
        class="button mt-3"
      >
        Comentarios
      </b-button>
    </div>
    
    <!-- modal de comentarios -->
    <b-modal v-model="modalShow" size="lg">
      <Comments></Comments>
    </b-modal>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore/lite";
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
  text-align: center;
  padding: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.404);
  padding: 30px;
}
h2{
  color: rgb(250, 3, 3);
  font-family: Book Antiqua;
  text-align: left;
}
h3 {
  color: rgb(8, 8, 8);
  font-family: Book Antiqua;
  text-align: left;
}
h1 {
  font-family: "lust-display-didone", serif;
  text-align: center;
  font-weight: bold;
  font-size: 60px;
  width: 100%;
  letter-spacing: 0.5rem;
  color: rgb(105, 10, 3);
  text-shadow: 2px 5px 8px #030000b9;
}
p {
  position: relative;
  font-family: Century Schoolbook, Century Schoolbook L, Georgia, serif;
  font-size: 30px;
  text-align: justify;
  margin: auto;
  color: rgb(10, 10, 10);
  font-weight: 100;
  text-shadow: 2px 5px 8px #030000a8;
  margin-bottom: 5px;
  width: 100%;
}
.button {
  margin: 0 auto;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.815);

}
.light hover {
  background: #e7e7e7;
}
</style>
