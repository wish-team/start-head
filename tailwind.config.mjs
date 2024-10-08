import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", 		
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFD800',
        'primary-focus': '#E0BF00'
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require('flowbite/plugin'), flowbite.plugin()],
};
