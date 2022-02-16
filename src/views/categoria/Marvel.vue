<template>
<!-- Insertamos contenedor -->
  <div class="cienciaF">
    <b-container fluid class="p-4 bg-dark m-2 ">
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
              header="King Thor"
              header-tag="header"
              footer-tag="footer"
              class="shadow-card">
              <!-- Insertamos Imagen -->
              <b-img
                thumbnail
                fluid
                alt="Responsive image"
                class="image"
                src="../img/Marvel/KingThor.jpg">
                </b-img>
                <!-- Insertamos contenedor para texto -->
              <b-card-text class="texto">
                <br/>
                <strong>Sinopsis:</strong>
              Siete años antes, Jason Aaron y Esad Ribic presentaron al Thor del futuro lejano, Padre de un reino roto y un universo moribundo, mientras luchaba contra Gorr el Carnicero de los Dioses, portador de All-Black the Necrosword.
Ahora que la espada nefasta ha regresado, en manos del mayor enemigo de todos los tiempos de Thor, su hermano, Loki, para un enfrentamiento cataclísmico final.
              </b-card-text>
                <!-- Agregamos componente modal -->
              <b-modal v-model="modalShow"  size="lg">
                <Modal></Modal>
              </b-modal>
            </b-card>
          </b-col>
          <!-- Agregamos otra columna -->
          <b-col>
            <!-- Contenedor estilo card -->
            <b-card
              style="width: 18rem"
              bg-variant="dark"
              text-variant="white"
              header="Carnage: Family Freud"
              header-tag="header"
              footer-tag="footer"
              class="shadow-card">
              <!-- Insertamos otra imagen -->
              <b-img
                thumbnail
                fluid
                alt="Responsive image"
                class="image"
                src="../img/Marvel/Carnage.jpg">
                </b-img>
                <!-- Agregamos contenedor para texto -->
              <b-card-text class="texto">
                <strong>Sinopsis:</strong>
                Carnage está de regreso! El villano favorito de los fanáticos vuelve para sacudir el Universo Marvel, con Spider-Man y Iron Man como los primeros héroes en la lista de enemigos del simbionte carmesí.
Pero, ¿por qué, y cómo, ha regresado Carnage, y cuántos de los héroes de Marvel se necesitarán para detenerlo? Zeb Wells y Clayton Crain se unen para traer una gran epopeya de Marvel.
                </b-card-text>
            </b-card>
          </b-col>
          <!-- Insertamos otra columna -->
          <b-col>
            <!-- Contenedor -->
            <b-card
              style="width: 18rem"
              bg-variant="dark"
              text-variant="white"
              header="Eternals"
              header-tag="header"
              footer-tag="footer"
              class="shadow-card">
            <!-- Insertamos imagen -->
              <b-img
                thumbnail
                fluid
                alt="Responsive image"
                class="image"
                src="../img/Marvel/Eternals.jpg"
              ></b-img>
              <!-- Contenedor para el texto -->
              <b-card-text class="texto">
                <strong>Sinopsis:</strong> Neil Gaiman, el creador de The Sandman, y John Romita Jr., el artista estrella de Marvel, unen fuerzas para traernos una vez más las hazañas de los personajes creados por Jack Kirby, los cuales debutarán en el cine.

Tienes miles de años. Tienes poderes asombrosos. Has visto cómo las civilizaciones suben y bajan, entonces, ¿por qué nadie recuerda nada de esto?… Ike Harris sueña con aventuras, amoríos y traiciones, pero ninguno de los involucrados lo recuerda ni le cree. ¿Y quién está tratando de matarlo para evitar que hable de eso?</b-card-text>
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
// Exportamos la vista de la pagina
export default {
    components: {
        Modal
    },
  data() {
    return {
      modalShow: false,
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
