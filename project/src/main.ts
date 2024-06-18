import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import store from './store'; // Importando a store

const app = createApp(App);

app.use(router);
app.use(store); // Usando a store

app.mount("#app");
