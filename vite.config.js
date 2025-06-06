import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import {fileURLToPath} from "url";
import vuetify from "vite-plugin-vuetify";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        vuetify({autoImport: true}),
    ],
    resolve: {
        alias: [
            { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
            { find: '@assets', replacement: fileURLToPath(new URL('./src/shared/assets', import.meta.url)) },
            { find: '@cmp', replacement: fileURLToPath(new URL('./src/shared/cmp', import.meta.url)) },
            { find: '@stores', replacement: fileURLToPath(new URL('./src/shared/stores', import.meta.url)) },
            { find: '@use', replacement: fileURLToPath(new URL('./src/shared/use', import.meta.url)) },
        ],
    }
})
