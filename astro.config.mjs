import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
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
