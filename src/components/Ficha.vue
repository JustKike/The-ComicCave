<template>
 <!-- Contenedor para Ficha con un scroll-->
  <div id="scrollspy-nested" style="position:relative; height:309px; overflow-y:auto">
    <!-- Creamos la tabla con los datos del script -->
    <b-table stacked :items="items"></b-table>
  </div>
</template>

<script>
  export default {
      name: 'Ficha',
    data() {
      return {
        // Tenga en cuenta que `isActive` se omite y no aparecerá en la tabla representada
        //array de elementos
        items: [
          {  //elementos de la tabla.
              Título_original: 'Sinopsis de EL JUEZ DREDD: LOS ARCHIVOS COMPLETOS Nº 1 (INTEGRAL)', 
              Año: '2019',
              No_de_páginas: '336',
              Editorial: 'KRAKEN',
              Idioma: 'CASTELLANO',
              Encuadernación: 'Tapa blanda',
              Año_de_edición: '2019',
              Traductor: 'CARLOS LÓPEZ ORTIZ',
              Fecha_de_lanzamiento: '24/01/2019'
              }
        ]
      }
    }
  }
</script>