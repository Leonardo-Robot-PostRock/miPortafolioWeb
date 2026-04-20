import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://leonardopuebla.com',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      lastmod: new Date(),
      // Prioridades jerárquicas según importancia de cada página
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname;

        // Homepage → máxima prioridad
        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Página de listado de proyectos
        else if (path === '/projects/' || path === '/projects') {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Páginas individuales de proyecto
        else if (path.startsWith('/project/')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        // Cualquier otra página
        else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }

        return item;
      },
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    ssr: {
      noExternal: ['framer-motion']
    }
  }
});
