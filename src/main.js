import {createApp} from "vue";
import "@fontsource/montserrat";
import App from "./App.vue";
import router from "./core/router/index.js";
import "@/styles/main.scss";
import {createVuetify} from "vuetify";
import "vuetify/styles";
import "vuetify/dist/vuetify.min.css";
import i18n from "./core/locales/i18n.config.js";
import store from "./core/store";
import vuetifyConfig from "@/core/vuetify/vuetify.config.js";

const vuetify = createVuetify(vuetifyConfig);

const app = createApp(App);
app.use(store);
app.use(vuetify);
app.use(i18n);
app.use(router);
app.mount("#app");
