import { css } from '@emotion/react';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const { BASE_PATH } = loadEnv(process.env.NODE_ENV, process.cwd(), "")

export default defineConfig({
  base: BASE_PATH || '/',
  output: 'static',
  integrations: [],
  strict: true,
  outDir: './build',
  build: {
    format: 'file'
  },
  buildOptions: {
    sitemap: true,
    robotsTxt: true,
    htmlMinify: true,
    cssMinify: true,
    jsMinify: true
  }
})