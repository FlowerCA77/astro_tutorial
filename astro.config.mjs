// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://iridescent-kulfi-8e868a.netlify.app/",
  integrations: [preact()]
});