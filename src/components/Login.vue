<template>
  <div>
    <!-- Agregamos un contenedor -->
    <div class="mb-2">
      <!-- Agregamos boton iniciar sesion para mostrar barra lateral -->
      <b-button 
        pill 
        variant="primary"
        v-b-toggle
        href="#example-sidebar"
        @click.prevent>
        <span v-if="btnNme">+ informacion</span>
        <span v-else>Inicio | Registro</span>
        </b-button>
    </div>
    <!-- Agregamos barra lateral -->
    <b-sidebar v-show="sidebar"
      id="example-sidebar"
      title="Sidebar"
      aria-label="Sidebar with custom footer"
      no-header bg-variant="dark">
      <!-- Estatus de inicio de sesion -->
      <div class="d-flex bg-primary  text-light d-flex justify-content-center px-3 py-2">
        <top-header :onClick="sampleFunction"></top-header>
      </div>
      <!-- Agregamos un footer -->
      <template #footer="{ hide }">
        <div
          class="d-flex bg-primary  text-light justify-content-between align-items-center px-3 py-2"
        >
          <strong class="mr-auto">The ComicCave</strong>
          <b-button class="float-right" size="sm" @click="hide">Close</b-button>
        </div>
      </template>
      <!-- Termina el footer -->
      <!-- Agregamos contenedor -->
      <div class="px-3 py-2">
        <!-- Agregagmos una contenedor tipo carta -->
        <b-card class="mt-3" header="Inicia Sesion" v-show="component">
          <!-- Creamos el formulario de inicio de sesion -->
          <b-form @submit.prevent="onSubmit" @reset="onReset">
            <!-- Agrupamos los complementos -->
            <b-form-group
              id="input-group-1"
              label="Correo:"
              label-for="input-1"
              description="Nunca compartiremos su informacion con nadie más.">
              <!-- Agregamos input para correo -->
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Introduce tu correo"
                required>
              </b-form-input>
            </b-form-group>
            <!-- Agrupamos complementos -->
            <b-form-group>
              <!-- Creamos etiqueta -->
              <label for="text-password">Contraseña</label>
              <!-- Input para introducir contraseña -->
              <b-form-input
                type="password"
                id="text-password"
                aria-describedby="password-help-block"
                v-model="form.password"
                required
                placeholder="Introduce Contraseña"
                v-b-popover.hover.v-danger.top="{ content: msg }"
                title="CUIDADO!">
              </b-form-input>
            </b-form-group>
            <!-- Agregamos una separacion -->
            <br/>
            <!-- contenedor para boton enviar y cancelar -->
            <div class="d-flex justify-content-center">
              <b-button type="submit" variant="primary">Enviar</b-button>|
              <b-button type="reset" variant="danger">Cancelar</b-button>
            </div>
            <!-- botones para iniciar sesion con google o facebook -->
            <div class="mt-4 d-block">
              <b-button style="width: 100%" variant="outline-primary" @click.prevent="onFacebook()">
                <b-icon scale="1.3" shift-h="-24" icon="facebook"></b-icon> Sign In with Facebook
              </b-button>
              <b-button class="mt-2" style="width: 100%" variant="danger" 
              id="googleLogin" @click.prevent="onGoogle()">
                <b-icon shift-h="-30" icon="google"></b-icon> Sign In with Google
              </b-button>
           </div>
          </b-form>
          <!-- Termina el formulario -->
        </b-card>
        </div>
      <!-- Agregamos un contenedor para modal Crear cuenta -->
      <div class="px-3 py-2" v-show="component">
        <join></join>
      </div>
      <!-- Modulo para mostrar datos de usuario -->
      <div class="px-3 py-2">
      <b-card class="mt-3" header="Datos de Usuario"  v-show="!component">
      </b-card>
      </div>

    </b-sidebar>
    <!-- Final de la barra lateral -->
  </div>
</template>

<script>
  // importamos el modal Join
  import Join from "./Join.vue";
  import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, 
  GoogleAuthProvider, signInWithPopup, FacebookAuthProvider   } from "firebase/auth";
  import TopHeader from "./Top-Header.vue";

  export default {
    components: { Join, TopHeader },
    name: "Login",
    data() {
      return {
        msg: "La contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.",
        form: {
          email: "",
          password: "",
        },
        error: '',
        show: true,
        sidebar: true,
        component: true,
        btnNme: false
      };
    },
    methods: {
      async onSubmit(event) {
        event.preventDefault();
        // Nos salta una alerta con los datos del formulario
        // alert(JSON.stringify(this.form));
        try {
                const auth = getAuth();
                await signInWithEmailAndPassword(auth, this.form.email, this.form.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    alert(user.email + " logeado con exito!");
                })
                 // Reset our form values
                this.form.email = "";
                this.form.password = "";
                // Redirecciona a Home
                this.$router.replace({name: "Home"});
                }catch (err){
                    console.log(err);
                }

      },
      onReset(event) {
        event.preventDefault();
        // Reset our form values
        this.form.email = "";
        this.form.password = "";
        // Trick to reset/clear native browser form validation state
        this.show = false;
        this.$nextTick(() => {
          this.show = true;
        });
      },
      sampleFunction(){
        //ocultar sidebar
        return this.sidebar = false;
    },
    // mostrar u ocultar componentes de inicio/resgistro de sesion 
    // y datos de usuario
    comprobar(){
        try {
          const requiresAuth = true;
          const auth = getAuth();
          const isAuthenticated = auth.currentUser;
          if (requiresAuth && !isAuthenticated) {
              this.component = true;
          } else {
              this.component = false;
          }
        } catch (err) {
          console.log(err);
        }
      },
      //Google login
      onGoogle(event){
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) =>{
          console.log("Google sign in");
          try {
                // Redirecciona a Home
                this.$router.replace({name: "Home"});
                }catch (err){
                    console.log(err);
                }
        }).catch((error) =>{
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
        })
      },
      //Facebook login
      onFacebook(event){
        const provider = new FacebookAuthProvider ();
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
           console.log(result);
           console.log("Facebook sign in");
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);

            // ...
          });
      }
  },
    created() {
      try {
            // comprobar si hay un usuario logeado
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                this.btnNme = !!user;
                if (this.btnNme = !!user) {
                      return this.show = true,
                       this.sidebar = true,
                       this.comprobar();
                }else{
                      return this.show = false,
                      this.sidebar = true,
                      this.comprobar();
                }
            })
          } catch (err) {
                  console.log(err);
          }
    },
  };
</script>
<style scoped>
.oscuro {
  background-color: black;
}
.shadow{
  text-shadow: 2px 2px 4px #030000;
}

.error {
    color: red;
    font: size 18px;
}
#example-sidebar li:hover {
  
            /* Sidebar items change color 
            when hovered over */
            color: green;
        }
</style>
