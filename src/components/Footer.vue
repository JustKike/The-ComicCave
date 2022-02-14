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
          <h5 class="title">Contactos</h5>
          <ul>
            <li class="list-unstyled" ><a href="#!">the.comic.cave2022@gmail.com</a></li>
            <li class="list-unstyled"><a href="#!">jose.ubietadiaz@cesunbc.edu.mx</a></li>
            <li class="list-unstyled"><a href="#!">jair.cervantesjauregui@cesunbc.edu.mx</a></li>
            <li class="list-unstyled"><a href="#!">+52 664 1234567</a></li>
          </ul>
        </mdb-col>
        <mdb-col md="6" lg="7" class="text-center text-md-right">
            <a class="fb-ic ml-0"><i class="fab fa-facebook white-text mr-lg-4"> </i></a>
            <a class="tw-ic"><i class="fab fa-twitter white-text mr-lg-4"> </i></a>
            <a class="gplus-ic"><i class="fab fa-google-plus white-text mr-lg-4"> </i></a>
            <a class="li-ic"><i class="fab fa-linkedin-in white-text mr-lg-4"> </i></a>
            <a class="ins-ic"><i class="fab fa-instagram white-text mr-lg-4"> </i></a>
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
