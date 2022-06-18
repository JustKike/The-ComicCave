<template>
    <div>
        Logged in:
        <span v-if="loggedIn">Yes</span>
        <span v-else>No</span>
        <div>
            <b-button @click="signOut() && onClick()" v-if="show" variant="outline-dark" pill size="sm">Sign Out</b-button>
        </div>
    </div>
</template>

<script>
import { db } from "../firebase.js";
import { getAuth, signOut, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";


export default {
    props: {
    onClick: Function
    },
    name: "TopHeader",
    created() {
         try {
                const auth = getAuth();
                setPersistence(auth, browserSessionPersistence)
                .then(() => {
                    return signInWithEmailAndPassword(auth, email, password);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
                onAuthStateChanged(auth, (user) => {
                    this.loggedIn = !!user;
                    if (this.loggedIn = !!user) {
                         return this.show = true,
                        console.log("Este usuario ha iniciado sesion", user.email);
                    }else{
                         return this.show = false;
                    }
                })
            } catch (err) {
                    console.log(err);
            }
    },
    data(){
        return{
            loggedIn: false,
            show: true,
        }
    },
    methods: {
        async signOut(){
            try {
                const auth = getAuth();
                await signOut(auth).then(() => {
                    alert(" Sesion terminada con exito!");
                    var sideBar = document.getElementById("Login");
                
                    //ocultar sidebar
                    this.sidebar = false;
                    // Redireccion a otra pagina
                    this.$router.replace({name: "DefPage"})
                })
            } catch (err) {
                    console.log(err);
            }
        }
    },
}
</script>