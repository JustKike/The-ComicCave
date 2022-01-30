<template>
  <div class="Card centrado">
        <div class="container">
        <img :src="srcText" alt="Avatar" class="image" width="224" height="48">
        <div class="overlay">{{ msg }}</div>
        </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    msg: 'string',
    dir: 'string'
  },
  computed:{
      srcText(){
          return "../assets/"+this.dir;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centrado {
  text-align: center;
}
* {box-sizing: border-box;}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 50%;
  text-align: center;
}

.container {
  position: relative;
  width: 50%;
  max-width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  
}

.image {
  display: block;
  width: 100%;
  height: auto;
  box-shadow: 4px 4px 10px #030000;
  transition: 0.3s;
}

.overlay {
  position: absolute; 
  bottom: 0; 
  background: rgb(0, 0, 0);
  background: rgba(255, 20, 145, 0.336); /* Black see-through */
  color: #f1f1f1; 
  width: 92%;
  transition: .5s ease;
  opacity:0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}
.container:hover .overlay {
  opacity: 1;
}
</style>