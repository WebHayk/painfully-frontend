import {STORAGE_KEYS} from "@/core/variables/index.js";

export class ThemeHelpers {
    static getStoredTheme = () => {
        return (localStorage.getItem(STORAGE_KEYS)) || 'light';
    };

    static storeTheme = (theme) => {
        localStorage.setItem(STORAGE_KEYS, theme);
    };
}
