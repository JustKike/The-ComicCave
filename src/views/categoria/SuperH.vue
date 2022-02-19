<template>
  <!-- Insertamos contenedor -->
  <div class="cienciaF">
    <b-container fluid class="p-4 bg-dark m-2">
      <!-- Creamos una fila -->
      <b-row>
        <!-- Creamos un contenedor estilo card -->
        <b-card-group class="centered">
          <!-- Creamos una columna -->
          <b-col>
            <!-- Contenedor tipo Card -->
            <b-card
              style="width: 20rem"
              bg-variant="dark"
              text-variant="white"
              header="BATMAN: El regreso del señor de la noche"
              header-tag="header"
              footer-tag="footer"
              class="shadow-card"
            >
              <!-- Insertamos Imagen -->
              <b-img
                thumbnail
                fluid
                alt="Responsive image"
                class="image"
                src="../img/SuperHeroe/AdventuresIntoDarkness.jpg"
              >
              </b-img>
              <!-- Insertamos contenedor para texto -->
              <b-card-text class="texto">
                <br />
                <strong>Sinopsis:</strong>
                Situada 10 años después de que un envejecido Batman se haya
                retirado y la ciudad de Gotham se haya hundido más en la
                decadencia y la anarquía. Ahora, cuando su ciudad más lo
                necesita, el caballero oscuro regresa en un resplandor de
                gloria. Junto a Carrie Kelly, una adolescente que se convertirá
                en el nuevo Robin, Batman sale a la calle para acabar con la
                amenaza de los mutantes, una salvaje banda que ha invadido la
                ciudad.
              </b-card-text>
              <!-- Grupo de botones -->
              <b-button-group class="button d-flex justify-content-center">
                <!-- Boton para ver comic -->
                <b-button
                  @click="comicShow = !comicShow"
                  variant="success"
                  class="pb-2 m-1"
                  lg="4"
                  >Ver Comic</b-button
                >
                <!-- Modal para vizualizar el comic -->
                <b-modal
                  v-model="comicShow"
                  size="xl"
                  scrollable
                  title="BATMAN: El regreso del señor de la noche"
                  :header-bg-variant="headerBgVariant"
                  :header-text-variant="headerTextVariant"
                  :body-bg-variant="bodyBgVariant"
                  :footer-bg-variant="footerBgVariant"
                  :footer-text-variant="footerTextVariant"
                >
                  <!-- llamamos al modal que contendra el comic -->
                  <ModalComic></ModalComic>
                  <!-- Footer para el modal -->
                  <template #modal-footer> 
                    <div
                      class="w-100 card-body d-flex justify-content-between align-items-center "
                    >
                    <!-- Titulo del footer -->
                      <strong>The ComicCave</strong>
                      <!-- Agregamos boton cerrar -->
                      <b-button
                        variant="primary"
                        size="sm"
                        @click="comicShow = false"
                      >
                        Cerrar
                      </b-button>
                    </div>
                  </template>
                </b-modal>
                <!-- Boton para las reseñas -->
                <b-button
                  @click="modalShow = !modalShow"
                  variant="primary"
                  class="pb-2 m-1"
                >
                  Reseñas
                </b-button>
              </b-button-group>
              <!-- Modal para las reseñas -->
              <b-modal v-model="modalShow" size="lg">
                <Modal></Modal>
              </b-modal>
            </b-card>
            <!-- Termina el primer contendor de comic -->
          </b-col>
          <!-- Agregamos otra columna -->
          <b-col>
            <!-- Contenedor estilo card -->
            <b-card
              style="width: 18rem"
              bg-variant="dark"
              text-variant="white"
              header="Spiderman Vol. 1 / El Espectacular Spiderman (1983-1994)"
              header-tag="header"
              footer-tag="footer"
              class="shadow-card"
            >
              <!-- Insertamos otra imagen -->
              <b-img
                thumbnail
                fluid
                alt="Responsive image"
                class="image"
                src="../img/SuperHeroe/spiderman.jpg"
              >
              </b-img>
              <!-- Agregamos contenedor para texto -->
              <b-card-text class="texto"
                >
                <br />
                <strong>Sinopsis:</strong>
                Mordido por una araña radiactiva, el estudiante Peter Parker descubrió que había adquirido las habilidades proporcionales de ésta... se había convertido, de hecho, en una araña humana: ¡el Asombroso Spider-Man!
                </b-card-text
              >
             <!-- Grupo de botones -->
              <b-button-group class="button d-flex justify-content-center">
                <!-- Boton para ver comic -->
                <b-button
                  @click="comicShow = !comicShow"
                  variant="success"
                  class="pb-2 m-1"
                  lg="4"
                  >Ver Comic</b-button
                >
                <!-- Boton para las reseñas -->
                <b-button
                  @click="modalShow = !modalShow"
                  variant="primary"
                  class="pb-2 m-1"
                >
                  Reseñas
                </b-button>
              </b-button-group>
            </b-card>
          </b-col>
          <!-- Insertamos otra columna -->
          <b-col>
            <!-- Contenedor -->
            <b-card
              style="width: 18rem"
              bg-variant="dark"
              text-variant="white"
              header="Spawn Vol 1: Preguntas, parte uno"
              header-tag="header"
              footer-tag="footer"
              class="shadow-card"
            >
              <!-- Insertamos imagen -->
              <b-img
                thumbnail
                fluid
                alt="Responsive image"
                class="image"
                src="../img/SuperHeroe/Spawn_Vol_1_1.png"
              ></b-img>
              <!-- Contenedor para el texto -->
              <b-card-text class="texto"
                >
                <strong>Sinopsis:</strong>
                Spawn (Al Simmons) se encuentra en la cima de un edificio en la Ciudad de New York. Él murió y regresó, pero no recuerda por qué está allí. Recuerda haber sido engañado y cómo este no era el trato que esperaba.
                <br>
                Hace cinco años, en 1987, los reportes informativos de noticias hablaron sobre la reciente muerte del héroe estadounidense, Albert Simmons, quien había salvado la vida del presidente trabajando anteriormente en la Agencia Central de Inteligencia (CIA). Algunos canales informaron sobre cómo su esposa, Wanda Blake, apareció con otro hombre en la estela, Martin Alexander.
                <br>
                Spawn recuerda haber sido parte de la CIA, a Jason Wynn, y su muerte.
                </b-card-text
              >
              <!-- Grupo de botones -->
              <b-button-group class="button d-flex justify-content-center">
                <!-- Boton para ver comic -->
                <b-button
                  @click="comicShow = !comicShow"
                  variant="success"
                  class="pb-2 m-1"
                  lg="4"
                  >Ver Comic</b-button
                >
                <!-- Boton para las reseñas -->
                <b-button
                  @click="modalShow = !modalShow"
                  variant="primary"
                  class="pb-2 m-1"
                >
                  Reseñas
                </b-button>
              </b-button-group>
            </b-card>
          </b-col>
        </b-card-group>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// Importamos el componente modal
import Modal from "@/components/Modal.vue";
// Importamos el componente modal para comic
import ModalComic from "@/components/ModalComic.vue";

// Exportamos la vista de la pagina
export default {
  components: {
    Modal,
    ModalComic,
  },
  data() {
    return {
      modalShow: false, //Modal Reseñas oculto
      comicShow: false, //Modal Comic oculto
      headerBgVariant: "dark", //estilo oscuro para la cabezera
      headerTextVariant: "light", //Estilo claro para texto en cabezera
      bodyBgVariant: "dark", //Fondo oscuro para el body
      footerBgVariant: "warning", // color amarillo para el footer
      footerTextVariant: "dark", //Texto oscuro del footer
    };
  },
};
</script>
// estilos aplicados solo a esta vista
<style scoped>
.button {
  position: relative;
  display: block;
  margin: 0 auto;
  align-items: center;
}
header {
  text-align: center;
  font-family: "lust-display-didone", serif;
  font-size: 25px;
  color: #fffb08;
}
.shadow-card {
  box-shadow: -2px 2px 20px #fffefe;
}
.centered {
  vertical-align: middle;
  vertical-align: center;
  align-items: center;
}
.texto {
  text-align: justify;
}
</style>
