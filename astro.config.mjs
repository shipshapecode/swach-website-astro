import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel/static';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic({
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
