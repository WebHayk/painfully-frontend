import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import {ThemeHelpers} from "@/core/helpers/theme.helpers.js";

export default {
    components,
    directives,
    theme: {
        defaultTheme: ThemeHelpers.getStoredTheme(),
        themes: {
            light: {
                colors: {
                    background: '#F5F6FA',
                    surface: '#FFFFFF',
                    primary: '#4A90E2',
                    secondary: '#7ED6A7',
                    error: '#B00020',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00',
                    'text-primary': '#1E1E1E',
                    'text-secondary': '#5C5C5C',
                    'text-disabled': '#A0A0A0',
                    'text-hint': '#B3B3B3'
                },
            },
            dark: {
                colors: {
                    background: '#121212',
                    surface: '#1E1E1E',
                    primary: '#4A90E2',
                    secondary: '#7ED6A7',
                    error: '#CF6679',
                    info: '#64B5F6',
                    success: '#81C784',
                    warning: '#FFB74D',
                    'text-primary': '#FFFFFF',
                    'text-secondary': '#B3B3B3',
                    'text-disabled': '#666666',
                    'text-hint': '#888888'
                }
            }
        }
    }
}
