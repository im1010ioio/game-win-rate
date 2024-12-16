import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        includePaths: ['src/scss'],
      },
    },
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        en: fileURLToPath(new URL('./en.html', import.meta.url)),
        jp: fileURLToPath(new URL('./jp.html', import.meta.url)),
        cn: fileURLToPath(new URL('./cn.html', import.meta.url)),
        ko: fileURLToPath(new URL('./ko.html', import.meta.url)),
        termsOfUse: fileURLToPath(new URL('./terms-of-use.html', import.meta.url)),
        about: fileURLToPath(new URL('./about.html', import.meta.url)),
      },
    },
  },
  server: {
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/en/') {
          req.url = '/en.html';
        }
        else if (req.url === '/jp/') {
          req.url = '/jp.html';
        }
        else if (req.url === '/cn/') {
          req.url = '/cn.html';
        }
        else if (req.url === '/ko/') {
          req.url = '/ko.html';
        }
        else if (req.url === '/terms-of-use/') {
          req.url = '/terms-of-use.html';
        }
        else if (req.url === '/about/') {
          req.url = '/about.html';
        }
        next();
      });
    },
  },
});
