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
              header="Invincible"
              header-tag="header"
              footer-tag="footer"
              class="shadow-card">
              <!-- Insertamos Imagen -->
              <b-img
                thumbnail
                fluid
                alt="Responsive image"
                class="image"
                src="../img/Otros/Invincible.jpg">
                </b-img>
                <!-- Insertamos contenedor para texto -->
              <b-card-text class="texto">
                <br/>
                <strong>Sinopsis:</strong>
              ANGSTROM LEVY DECIDE PONER EN PRÁCTICA SU PLAN MÁS LETAL Y MAQUIAVÉLICO, ¡Y EL MUNDO NUNCA HA CONOCIDO UN PELIGRO MAYOR! POR SI ELLO FUERA POCO, INVENCIBLE DEBE ENFRENTARSE A LA AMENAZA QUE REPRESENTA CONQUEST. Y A PREGUNTAS QUE NO SABE CÓMO RESPONDER.
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
              header="Sonic: The Hedgehog"
              header-tag="header"
              footer-tag="footer"
              class="shadow-card">
              <!-- Insertamos otra imagen -->
              <b-img
                thumbnail
                fluid
                alt="Responsive image"
                class="image"
                src="../img/Otros/Sonic.jpg">
                </b-img>
                <!-- Agregamos contenedor para texto -->
              <b-card-text class="texto">
                <strong>Sinopsis:</strong>
 Todo ha conducido a este momento: ¡el epílogo de la Saga del Virus del Metal! El mundo ha cambiado. Héroes y villanos planean el futuro. Sin embargo, un héroe sigue desaparecido...
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
              header="The Witcher: El Lamento de la Bruja"
              header-tag="header"
              footer-tag="footer"
              class="shadow-card">
            <!-- Insertamos imagen -->
              <b-img
                thumbnail
                fluid
                alt="Responsive image"
                class="image"
                src="../img/Otros/TheWitcher.jpeg"
              ></b-img>
              <!-- Contenedor para el texto -->
              <b-card-text class="texto">
                <strong>Sinopsis:</strong>
UN TRABAJO QUE PONDRÁ A PRUEBA LAS CONVICCIONES DE GERALT DE RIVIAl fuego se eleva hacia el cielo cuando una bruja arde en la hoguera. Mientras Geralt busca su siguiente trabajo, imágenes perturbadoras de la persecución fatídica aparecen ante él, una advertencia ominosa.
             </b-card-text>
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
