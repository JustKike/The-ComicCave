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
              header="Batman: Three Jokers"
              header-tag="header"
              footer-tag="footer"
              class="shadow-card">
              <!-- Insertamos Imagen -->
              <b-img
                thumbnail
                fluid
                alt="Responsive image"
                class="image"
                src="../img/DC/ThreeJokers.jpg">
                </b-img>
                <!-- Insertamos contenedor para texto -->
              <b-card-text class="texto">
                <br/>
                <strong>Sinopsis:</strong>
              Treinta años después de que Batman: The Killing Joke cambiara los cómics para siempre, Three Jokers reexamina el mito de quién o qué es Joker y qué está en el centro de su eterna batalla con Batman.
El exitoso escritor Geoff Johns y Jason Fabok, el equipo de escritores y artistas que libró la Guerra de Darkseid en las páginas de La Liga de la Justicia, se reúnen para contar la historia definitiva de Batman y Joker. 
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
              header="Green Lantern: Earth One"
              header-tag="header"
              footer-tag="footer"
              class="shadow-card">
              <!-- Insertamos otra imagen -->
              <b-img
                thumbnail
                fluid
                alt="Responsive image"
                class="image"
                src="../img/DC/GreenLantern.jpg">
                </b-img>
                <!-- Agregamos contenedor para texto -->
              <b-card-text class="texto">
                <strong>Sinopsis:</strong>
 ¡Corinna Sara Bechko y Gabriel Hardman traen la novela gráfica original más reciente de Earth One, que presenta un origen nuevo para Green Lantern! Hal Jordan anhela la emoción del descubrimiento, pero los días en que astronauta y aventura eran sinónimos han quedado atrás.
Cuando Jordan encuentra un poderoso anillo, también encuentra un destino que cumplir. Hay mundos más allá del suyo, diferentes a todo lo que jamás imaginó. Pero la revelación tiene un precio: La Corporación Green Lantern cayó a manos de los Manhunters. Y las probabilidades de revivirla son casi imposibles… ¡Pero hacer lo imposible es exactamente para lo que entrenaron a Hal Jordan!
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
              header="Wonder Woman: Dead Earth"
              header-tag="header"
              footer-tag="footer"
              class="shadow-card">
            <!-- Insertamos imagen -->
              <b-img
                thumbnail
                fluid
                alt="Responsive image"
                class="image"
                src="../img/DC/WonderWoman.jpg"
              ></b-img>
              <!-- Contenedor para el texto -->
              <b-card-text class="texto">
                <strong>Sinopsis:</strong>
  Daniel Warren Johnson escribe e ilustra esta historia que nos pediste en redes sociales. Diana de Themyscira dejó el paraíso para salvar al Mundo del Hombre de sí mismo. Cuando Wonder Woman se despierta de un sueño de siglos para descubrir a la Tierra reducida a un páramo nuclear, sabe que falló.
Atrapada y sola en un futuro sombrío, Diana debe proteger la última ciudad humana de monstruos titánicos mientras descubre su secreto de esta Tierra muerta y cómo ella puede ser responsable de la catástrofe.
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
