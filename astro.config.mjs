import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://www.ladestack.in',
  image: {
    remotePatterns: [],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
