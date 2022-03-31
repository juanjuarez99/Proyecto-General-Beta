//Archivo principal
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from "vue";
import App from "./App.vue";
import rutas from "./rutas";

createApp(App).use(rutas).mount("#app");
