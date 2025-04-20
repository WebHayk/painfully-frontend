import { useVuetify } from 'vuetify';
import { storeTheme } from '@/services/themeService';

export const useTheme = () => {
    const vuetify = useVuetify();

    const toggleTheme = () => {
        const newTheme = vuetify.theme.global.name.value === 'light' ? 'dark' : 'light';
        vuetify.theme.global.name.value = newTheme;
        storeTheme(newTheme);
    };

    return {
        toggleTheme,
        currentTheme: vuetify.theme.global.name,
    };
};
