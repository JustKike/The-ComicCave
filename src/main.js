import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// Importamos bootstrap-vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Importamos archivosvCSS Bootstrap y BootstrapVue
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// BootstrapVue disponible para todo el proyecto
Vue.use(BootstrapVue);
// Componentes de iconos BootstrapVue plugin
Vue.use(IconsPlugin);

// importamos textarea autosize
import VueTextareaAutosize from "vue-textarea-autosize";
Vue.use(VueTextareaAutosize);

//importar estilos 
import '@/assets/styles.css';
//importamos estilos devextreme para toolbar
import 'devextreme/dist/css/dx.light.css';

// Instancia de vue
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    // renderisando app
    render: h => h(App)
}).$mount('#app');