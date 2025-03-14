import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        svgr(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        host: 'localhost',
        port: 3000
    },
});
