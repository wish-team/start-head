import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown'

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://starthead.world',
  integrations: [tailwind({
    applyBaseStyles: false,
  }), react(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
}), sitemap()],
output: "hybrid",
});