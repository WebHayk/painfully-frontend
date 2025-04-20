import {createI18n} from "vue-i18n";
import ru from "@/core/locales/static/ru";

const i18n = createI18n({
    locale: "ru",
    legacy: false,
    fallbackLocale: "ru",
    messages: {
        ru
    }
});

export default i18n;
