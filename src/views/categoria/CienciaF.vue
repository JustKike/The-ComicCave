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
              header="EL JUEZ DREDD: LOS ARCHIVOS COMPLETOS Nº 1"
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
                src="../img/Cienciafix/judge_dredd_no1.jpg"
              >
              </b-img>
              <!-- Insertamos contenedor para texto -->
              <b-card-text class="texto">
                <br />
                <strong>Sinopsis:</strong>
                Durante casi 30 años, un hombre ha dominado la escena del cómic
                británico. Es juez, jurado y verdugo, un hombre de la ley del
                futuro sin piedad que reparte justicia con puño de hierro en las
                calles de Megacity uno. Él es el juez Dredd. Ahora puedes
                redescubrir las raíces de este personaje legendario en esta
                serie de novelas gráficas que recogen todas las aventuras de
                Dredd en orden cronológico, completas y sin cortes.
              </b-card-text>
              <!-- Creamos un boton -->
              <b-button
                @click="modalShow = !modalShow"
                variant="primary"
                class="button"
              >
                Reseñas
              </b-button>
              <!-- Agregamos componente modal -->
              <b-modal v-model="modalShow" size="lg">
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
              header="Star Wars: Los Últimos Jedi"
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
                src="../img/Cienciafix/star-wars-los-ultimos-jedi.jpg"
              >
              </b-img>
              <!-- Agregamos contenedor para texto -->
              <b-card-text class="texto">
                <strong>Sinopsis:</strong>
                La Primera Orden impera. Luego de diezmar a la pacífica
                República, el líder supremo Snoke ahora envía a sus despiadadas
                legiones a asumir el control militar de la galaxia. Solo la
                general Leia Organa y su grupo de combatientes de la Resistencia
                se oponen a la creciente tiranía, convencidos de que el maestro
                jedi Luke Skywalker regresará y restaurará la chispa de
                esperanza en la lucha. Pero la Resistencia ha sido expuesta.
                Mientras la Primera Orden se dirige hacia la base rebelde, los
                valientes héroes organizan un desesperado escape….</b-card-text
              >
              <!-- Creamos un boton -->
              <b-button
                @click="modalShow = !modalShow"
                variant="primary"
                class="button"
              >
                Reseñas
              </b-button>
            </b-card>
          </b-col>
          <!-- Insertamos otra columna -->
          <b-col>
            <!-- Contenedor -->
            <b-card
              style="width: 18rem"
              bg-variant="dark"
              text-variant="white"
              header="VALERIAN:y la ciudad de los mil planetas"
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
                src="../img/Cienciafix/valerian.jpg"
              ></b-img>
              <!-- Contenedor para el texto -->
              <b-card-text class="texto">
                <br />
                <strong>Sinopsis:</strong>
                En El imperio de los mil planetas, la misión de Valerian y
                Laureline es establecer contacto con sistema planetario Syrte
                que carece de los medios para el viaje interestelar. Allí
                descubren que se trata de un sistema atrasado, controlado por
                los Entendidos, que son los sacerdotes de una religión que
                domina el acceso a la tecnología.</b-card-text
              >
              <!-- Creamos un boton -->
              <b-button
                @click="modalShow = !modalShow"
                variant="primary"
                class="button"
              >
                Reseñas
              </b-button>
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
    Modal,
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
