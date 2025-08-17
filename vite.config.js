// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    host: true,
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: {
        // Página principal
        main: resolve(__dirname, 'index.html'),

        // Páginas secundarias (activarlas cuando las tengamos listas)
        // ejemplo: resolve(__dirname, 'html/ejemplo.html'),
        // curriculum: resolve(__dirname, 'html/curriculum.html'),
        // contacto: resolve(__dirname, 'html/contacto.html'),
      },
    },
  },
});
