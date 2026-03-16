import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.URL || 'http://localhost:4321',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false })
  ],
  vite: {
    ssr: {
      noExternal: ['framer-motion']
    }
  }
});
