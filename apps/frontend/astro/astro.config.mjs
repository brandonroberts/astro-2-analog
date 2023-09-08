import analogjsangular from "@analogjs/astro-angular";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  srcDir: 'apps/frontend/astro/src',
  integrations: [
    analogjsangular({
      vite: {
        tsconfig: './apps/frontend/astro/tsconfig.app.json',
      },
    }),
  ],
});