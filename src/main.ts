import { createApp } from "vue";

import App from "./App.vue";
import i18n from "./locale";
import router from "./router";
import store from "./store";
import "./style.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(i18n);
app.mount("#app");
