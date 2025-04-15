import {createApp} from "vue";
import App from "./App.vue";
import router from "./core/router";
import "@/styles/main.scss";
import {createVuetify} from "vuetify";
import "vuetify/styles";
import "vuetify/dist/vuetify.min.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import i18n from "./core/locales/i18n.config.ts";

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "light",
        themes: {
            light: {
                colors: {
                    background: '#6200EE',
                    surface: '#FFFFFF',
                    primary: '#93755e',
                    secondary: '#03DAC6',
                    error: '#B00020',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00',
                    // You can add more custom color keys
                    customColor: '#FF4081',
                },
            }
        }
    }
});

const app = createApp(App);
app.use(vuetify);
app.use(i18n);
app.use(router);
app.mount("#app");
