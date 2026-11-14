import { defineConfig } from 'astro/config';

// "site" is the public address of the website.
// If you buy your own domain later, change this one line.
export default defineConfig({
  site: 'https://landomarynissen.github.io',

  // Security: keep every script in its own file instead of writing it into
  // the page. That lets the Content-Security-Policy in Base.astro refuse any
  // script that is not one of the site's own files.
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
