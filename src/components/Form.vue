<template>
    <div class="mt-5">
<h1>Ponte en contacto con nosotros</h1>
    
    <form>
    <b-col md="6">
        <b-row>
            <medium>Nombre</medium>
        <b-form-input name="nombre" type="text"  v-model="texto" :state="comprobar" placeholder="Escribe tu nombre"></b-form-input>
        <small>Al menos 3 caracteres</small>
        </b-row>
        <p></p>
        <b-row>
        <medium>Correo</medium>
        <b-form-input type="email"  placeholder="Escribe tu correo"></b-form-input> 
        </b-row>
        <p></p>
       
        <b-row>
        <medium>Comentario</medium>
            <textarea class="form-control" placeholder="Escribe tu comentario"></textarea>
        </b-row>

        <p></p>
        
       <b-row>
           <b-check>Acepto términos y condiciones</b-check>
       </b-row>
 
    </b-col>
            
    <b-col md="1">
        <p></p>
        <b-row>
                <button class="btn btn-primary mb-3" type="submit">Enviar datos</button>
        </b-row>
    </b-col>
    </form>

    </div>
</template>



<script>

export default {
    name: 'Form',
    data(){
        return{
            texto: ''
        }
    },
    computed:{
        comprobar(){
            return this.texto.length >2 ? true:false
        },
        enable(){
            return this.texto.length=false ? enable : disable
        }
    }
}
</script>
