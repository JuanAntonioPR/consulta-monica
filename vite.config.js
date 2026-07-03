// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: "/consulta-monica/",

  server: {
    host: true,
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: {
        // Página principal
        main: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, '404.html'),

        // Páginas secundarias (activarlas cuando las tengamos listas)
        avisoLegal: resolve(__dirname, 'html/aviso-legal.html'),
        colonoscopia: resolve(__dirname, 'html/colonoscopia.html'),
        consultaPresencial: resolve(__dirname, 'html/consulta-presencial.html'),
        ecografia: resolve(__dirname, 'html/ecografia.html'),
        gastroscopia: resolve(__dirname, 'html/gastroscopia.html'),
        politicaCookies: resolve(__dirname, 'html/politica-cookies.html'),
        politicaPrivacidad: resolve(__dirname, 'html/politica-privacidad.html'),
        posts: resolve(__dirname, 'html/posts.html'),
        sobreMi: resolve(__dirname, 'html/sobre-mi.html'),
        videoconsulta: resolve(__dirname, 'html/videoconsulta.html'),
      },
    },
  },
});
