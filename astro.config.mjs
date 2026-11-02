// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.thegrafx.com',
  prefetch: true,
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Anton',
      cssVariable: '--font-display',
      weights: [400],
      fallbacks: ['Impact', 'Haettenschweiler', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Archivo',
      cssVariable: '--font-body',
      weights: ['400 800'],
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Poppins',
      cssVariable: '--font-logo',
      weights: [700],
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
  ],
});
