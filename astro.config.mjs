import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    imageService: true,
    speedInsights: {
      enabled: true,
    },
    webAnalytics: {
      enabled: true,
    },
  }),
  site: 'https://swach.io/',
  integrations: [
    tailwind(),
    starlight({
      title: 'Swach Documentation',
      logo: {
        dark: './src/assets/svgs/swach-logo-line.svg',
        light: './src/assets/svgs/swach-dock-icon.svg',
      },
    }),
  ],
});
