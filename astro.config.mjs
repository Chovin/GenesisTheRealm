import { css } from '@emotion/react';
import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/',
  output: 'static',
  integrations: [],
  strict: true,
  outDir: './build',
  buildOptions: {
    sitemap: true,
    robotsTxt: true,
    htmlMinify: true,
    cssMinify: true,
    jsMinify: true
  }
})