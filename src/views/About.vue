import Footer from '@/components/Footer.vue';
<template>
  <div class="about">
    <h1 class="mt-5">FUNDADORES DE COMICCAVE-HISTORIA</h1> 
   
   
   <!-- Carta de Jair-->
   <b-row class="mt-4" id="tarjetaJair">
   <b-col cols="12" md="4">
   <h4>Jair Cervantes</h4>
    <b-card dir="Kike.jpg" img-alt="Jair Cervantes" img-left class="mb -3">
      <b-card-text>
        Jair Cervantes fue el miembro original del proyecto, es originario de Tijuana y la persona que aportó con la idea, tiene experiencia en el desarrollo web frontend que es lo que mejor se le da debido a su gran creatividad al momento de diseñar interfaces.
      </b-card-text>
    </b-card>
   </b-col>
   </b-row>


   <b-row class="mt-4" id="tarjetaJose">
   <b-col cols="12" md="4">
   <h4>Jose Ubieta</h4>
    <b-card dir="jose.png" img-alt="Jose Ubieta" img-right class="mb -3">
      <b-card-text>
        José Ubieta es uno de los miembros fundadores, impulsado por la idea de Jair de hacer una página web donde varias personas pudieran disfrutar de sus cómics e interactuar.
      </b-card-text>
    </b-card>
   </b-col>
   </b-row> 



<Footer></Footer>

  </div>

</template>

<style scoped>

.mt-5{
position: absolute;
left:400px;
}

#tarjetaJair{
  position: absolute;
  top: 600px;
}

#tarjetaJose{
position: absolute;
top: 900px;
}

</style>

