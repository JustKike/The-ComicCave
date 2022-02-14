<template>
    <!-- Creamos el Footer -->
      <div class="footer">
          <mdb-footer color="blue" class="font-small pt-4 mt-4">
    <mdb-container class="text-left">
      <mdb-row>

        <mdb-col sm="6">
          <h5 class="title">The ComicCave</h5>
          <p>Idea del ing. Jair Cervantes, nace como una idea para poder reunir a diferente gente en una sola página para poder interactuar con diferentes usuarios en el ámbito que gusten de buenas historias y descubrir algo nuevo dentro del mundo de los cómics.</p>
        </mdb-col>

        <mdb-col sm="6">
          <h5 class="title">Contáctanos</h5>
          <div class=" text-right">
              <font-awesome-icon icon="fa-brands fa-twitter" class="m-2"/>
              <font-awesome-icon icon="fab fa-instagram" class="m-2"/>
              <font-awesome-icon icon="fab fa-facebook" class="m-2"/>
              <font-awesome-icon icon="fab fa-linkedin" class="m-2"/>
              <font-awesome-icon icon="fab fa-youtube" class="m-2"/>
          </div>
          <ul>
            <li class="list-unstyled" ><a href="#!">the.comic.cave2022@gmail.com</a></li>
            <li class="list-unstyled"><a href="#!">jose.ubietadiaz@cesunbc.edu.mx</a></li>
            <li class="list-unstyled"><a href="#!">jair.cervantesjauregui@cesunbc.edu.mx</a></li>
            <li class="list-unstyled"><a href="#!">+52 664 1234567</a></li>
          </ul>
        </mdb-col>

      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2022 Copyright: <a href="#">TheComicCave.com</a>
      </mdb-container>
    </div>
  </mdb-footer>
      </div>
</template>

<script>
    import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'FooterPage',
    name: 'App',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>

<style>
/* CSS documento */
.footer{
  bottom: 0;
  width: 100%;
  background-color: rgb(29, 27, 31);
  color: white;
  padding:15px;
  text-align: center;
}
</style>
