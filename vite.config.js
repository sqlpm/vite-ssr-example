import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/vite-ssr-example/',
  plugins: [react()],
  build: {
    minify: false,
  },
});