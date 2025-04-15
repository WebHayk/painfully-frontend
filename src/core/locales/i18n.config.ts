import {createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'ru',
    messages: {
        ru: {
            auth: {
                login: "Авторизация",
                register: "Регистрация"
            },
            routes: {
                dashboard: "Дашборд",
                events: "Мероприятия",
                createEvent: "Создать мероприятие",
                settings: "Настройки",
                profile: "Мой профиль"
            }
        }
    }
});

export default i18n;
