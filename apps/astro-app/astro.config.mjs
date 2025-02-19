import { defineConfig } from 'astro/config';
import angular from '@analogjs/astro-angular';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  outDir: '../../dist/apps/astro-app',
  integrations: [angular(), react()],
});
