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
              header="EL JUEZ DREDD: LOS ARCHIVOS COMPLETOS Nº 1"
              header-tag="header"
              footer-tag="footer"
              class="shadow-card">
              <!-- Insertamos Imagen -->
              <b-img
                thumbnail
                fluid
                alt="Responsive image"
                class="image"
                src="../img/Cienciafix/judge_dredd_no1.jpg">
                </b-img>
                <!-- Insertamos contenedor para texto -->
              <b-card-text class="texto">
                <br />
                <strong>Sinopsis:</strong>
                Durante casi 30 años, un hombre ha dominado la escena del cómic británico. Es juez, jurado y verdugo, un hombre de la ley del futuro sin piedad que reparte justicia con puño de hierro en las calles de Megacity uno. Él es el juez Dredd. Ahora puedes redescubrir las raíces de este personaje legendario en esta serie de novelas gráficas que recogen todas las aventuras de Dredd en orden cronológico, completas y sin cortes.
              </b-card-text>
              <!-- Creamos un boton -->
              <b-button
                @click="modalShow = !modalShow"
                variant="primary"
                class="button">
                Reseñas
                </b-button>
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
              header="Titulo del Comic"
              header-tag="header"
              footer-tag="footer"
              class="shadow-card">
              <!-- Insertamos otra imagen -->
              <b-img
                thumbnail
                fluid
                alt="Responsive image"
                class="image"
                src="https://picsum.photos/250/250/?image=58">
                </b-img>
                <!-- Agregamos contenedor para texto -->
              <b-card-text class="texto"
                >Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</b-card-text>
                <!-- Insertamos un boton -->
              <b-button href="#" variant="primary" class="button"
                >Go somewhere</b-button
              >
            </b-card>
          </b-col>
          <!-- Insertamos otra columna -->
          <b-col>
            <!-- Contenedor -->
            <b-card
              style="width: 18rem"
              bg-variant="dark"
              text-variant="white"
              header="Titulo del Comic"
              header-tag="header"
              footer-tag="footer"
              class="shadow-card">
            <!-- Insertamos imagen -->
              <b-img
                thumbnail
                fluid
                alt="Responsive image"
                class="image"
                src="https://picsum.photos/250/250/?image=59"
              ></b-img>
              <!-- Contenedor para el texto -->
              <b-card-text class="texto"
                >Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</b-card-text>
                <!-- Agregamos un boton -->
              <b-button href="#" variant="primary" class="button">Go somewhere</b-button
              >
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
