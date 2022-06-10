<template>
    <div>
        Logged in:
        <span v-if="loggedIn">Yes</span>
        <span v-else>No</span>
        <div>
            <b-button @click="signOut" variant="outline-dark" pill size="sm">Sign Out</b-button>
        </div>
    </div>
</template>

<script>
import { db } from "../firebase.js";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";


export default {
    name: "TopHeader",
    created() {
         try {
                const auth = getAuth();
                onAuthStateChanged(auth, (user) => {
                    this.loggedIn = !!user;
                    console.log("Este usuario ha iniciado sesion", user.email);
                })
                // Redireccion a otra pagina
                this.$router.replace({name: "Home"});
                
            } catch (err) {
                    console.log(err);
            }
    },
    data(){
        return{
            loggedIn: false
        }
    },
    methods: {
        async signOut(){
            try {
                const auth = getAuth();
                await signOut(auth).then(() => {
                    alert(" Sesion terminada con exito!");
                    // Redireccion a otra pagina
                    this.$router.replace({name: "Home"})
                })
            } catch (err) {
                    console.log(err);
            }
        }
    },
}
</script>