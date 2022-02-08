import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Importamos bootstrap-vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Importamos archivosvCSS Bootstrap y BootstrapVue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// BootstrapVue disponible para todo el proyecto
Vue.use(BootstrapVue)
    // Componentes de iconos BootstrapVue plugin
Vue.use(IconsPlugin)

// Instancia de vue
Vue.config.productionTip = false


new Vue({
    router,
    store,
    // renderisando app
    render: h => h(App)
}).$mount('#app')