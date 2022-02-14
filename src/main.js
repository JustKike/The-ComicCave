import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// Importamos bootstrap-vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
//Import FontAwesome core
import { library } from '@fortawesome/fontawesome-svg-core';
//Import icons
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// Importamos archivosvCSS Bootstrap y BootstrapVue
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

//Add icons to library
library.add(faUserSecret, faTwitter, faInstagram, faFacebook, faLinkedin, faYoutube);

//Add icon component
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
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
    el: '#app',
    components: { App },
    template: '<App/>',
    router,
    store,
    // renderizando app
    render: h => h(App)
}).$mount('#app');