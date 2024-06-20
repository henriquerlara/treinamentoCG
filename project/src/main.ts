import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import store from './store'; // Importando a store
import consulteFramework from 'consulte-framework-vue'
import 'consulte-framework-vue/dist/style.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const app = createApp(App);

app.use(router);
app.use(store); // Usando a store
app.use(consulteFramework);

app.mount("#app");
