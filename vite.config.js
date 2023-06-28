import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  viteCompression({
    algorithm: 'brotliCompress',
    ext: '.br',
    disable: false,
    verbose: true
  }),
  svgr({
    svgrOptions: {
      // svgr options
    },
  })]
})
