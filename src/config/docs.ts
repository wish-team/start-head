import type { DocsConfig } from "@/types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/developers/docs/getting-started/",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/developers/docs/getting-started/",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Introduction",
          href: "/developers/docs/documentation",
        },
        {
          title: "Components",
          href: "/developers/docs/documentation/components",
        },
        {
          title: "Configuration  Astro DB",
          href: "/developers/docs/documentation/components",
          disabled: true,
        },
        {
          title: "Search (Fuse.js)",
          href: "/developers/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Pages",
      items: [
        {
          title: "Landing",
          href: "/developers/docs/in-progress",
          disabled: true,
        },
        {
          title: "Changelog",
          href: "/developers/docs/in-progress",
          disabled: true,
        },
        {
          title: "Wait List",
          href: "/developers/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Examples",
      items: [
        // {
        //   title: "Introduction",
        //   href: "/docs/in-progress",
        //   disabled: true,
        // },
        {
          title: "Static Blog",
          href: "/developers/docs/in-progress",
          disabled: true,
        },
        {
          title: "Docs & Guides",
          href: "/developers/docs/in-progress",
          disabled: true,
        },
        {
          title: "Blog with Astro DB",
          href: "/developers/docs/in-progress",
          disabled: true,
        },
        {
          title: "Ecommerce",
          href: "/developers/docs/in-progress",
          disabled: true,
        },
        {
          title: "Animes (GraphQL)",
          href: "/developers/docs/in-progress",
          disabled: true,
        },
        {
          title: "Authentification (Lucia)",
          href: "/developers/docs/in-progress",
          disabled: true,
        },
      ],
    },
  ],
};
