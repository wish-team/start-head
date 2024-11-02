import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown'
import icon from "astro-icon";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://starthead.world',
  integrations: [tailwind({
    applyBaseStyles: false,
  }), react(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
    
}), sitemap(), icon(), mdx({
  syntaxHighlight: "shiki",
  shikiConfig: {
    theme: "github-dark-dimmed",
  },
  gfm: true,
})],
});