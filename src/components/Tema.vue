<template>
  <!-- Contendor -->
  <div class="justify-content-between">
    <div class="row">
      <!-- incia el tema -->
      <div class="col-sm-6 mb-3" v-for="(item, id) in publicacion" :key="id">
        <div class="card" style="height: 350px">
          <!-- cuperpo de la tarjeta -->
          <div class="card-body" >
            <h3>{{ item.seleccion }}</h3>
            <h1 class="card-title">{{ item.titulo }}</h1>
            <p class="card-text mb-2" v-html="item.texto">
            </p>
          </div>
          <!-- boton para ver la publicacion completa -->
          <!-- mandamos el id del documento en la Coleccion de la BD -->
          <router-link :to="`/Publicacion/${item.id}`">
            <button class="btn btn-primary btn-sombra">Ver Tema</button>
          </router-link>
          <!-- footer de la tarjeta -->
            <div class="card-footer mt-2 d-flex justify-content-between">
                <div class="row justify-content-start">
                      <div class="col-2">
                        <!-- imagen de usuario autor de la publicacion -->
                        <b-card-img
                          src="../img/profile-man.png"
                          img-alt="Card Image"
                          class="rounded-circle img"
                        ></b-card-img>
                      </div>
                      <!-- nombre del autor y fecha de publicacion -->
                      <div class="col-4">
                        <label class="fw-normal" style="float:left;">{{ item.autor }}</label
                        ><br />
                        <label class="fw-normal" style="float:left; "
                          ><b-icon icon="calendar2-week" aria-hidden="true" ></b-icon>
                          {{ item.date }}
                        </label>
                      </div>
                  </div>
                  <!-- Seccion para nomero de comentarios de la publicacion -->
                  <div class="col-2 justify-content-end">
                    <label class="fw-normal m-2">45 </label>
                    <b-icon
                      icon="chat-right-dots-fill"
                      aria-hidden="true"
                      scale="1.2"
                    ></b-icon>
                  </div>
              </div>
          </div>
      </div>
      <!-- termina el tema -->
    </div>
  </div>
</template>

<script>
// importamos router
import router from "../router/index";
// importaciones para la BD
import { db } from "../firebase";
import {
  collection,
  getDocs,
  orderBy,
  doc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore/lite";

export default {
  name: "Tema",
  data() {
    return {
      publicacion: [],
    };
  },
  methods: {
    // leemos los datos de la BD
    async obtenerDatos() {
      try {
        const querySnapshot = await getDocs(collection(db, "temas"));
        const publicacion = [];
        querySnapshot.forEach((doc) => {
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
  },
  mounted() {
    // llamamos al metodo obtener datos
    this.obtenerDatos();
  },
};
</script>

<!-- Estilos aplicados solo a esta seccion -->
<style scoped>
.centrado {
  text-align: center;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.404);
  transition: 0.3s;
  width: 100%;
  text-align: center;
  padding: 15px;
}

h3 {
  color: rgb(250, 3, 3);
  font-family: Book Antiqua;
  text-align: left;
}
h1 {
  font-family: "lust-display-didone", serif;
  text-align: left;
  font-weight: bold;
  font-size: 25px;
  width: 100%;
  letter-spacing: 0.3rem;
  color: rgb(3, 44, 105);
  text-shadow: 1px 2px 6px #030000a8;
  /* para interrumpir el parrafo con puntos suspensivos */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 100%; /* fallback */
  max-height: 100%; /* fallback */
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}
p {
  font-family: Century Schoolbook, Century Schoolbook L, Georgia, serif;
  font-size: 20px;
  text-align: justify;
  color: rgb(63, 63, 63);
  font-weight: 100;
  text-shadow: 1px 2px 4px #030000a8;
  /* para interrumpir el parrafo con puntos suspensivos */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 100%; /* fallback */
  max-height: 100%; /* fallback */
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
}
.btn-sombra {
  box-shadow: 0 4px 0 #0239ad;
}
.img {
  width: 100%;
  height: auto;
}
</style>
