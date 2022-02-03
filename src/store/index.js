import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {}, //Es un objeto que puede contener cualquier tipo de información: strings, arrays u otros objetos. Es la información que almacenamos de forma centralizada en toda la app.
    mutations: {}, //Son las únicas funciones que pueden modificar el estado.
    actions: {}, //Son funciones
    modules: {} //Para los modulos
})

// Sirve como un almacén centralizado para todos los componentes de una aplicación Vue, con reglas que garantizan 
//que el estado se puede cambiar de manera predecible.