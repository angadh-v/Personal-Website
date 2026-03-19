// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import { template } from "./src/settings";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), sitemap()],
    site: process.env.SITE_URL ?? template.website_url,
    base: template.base,
});
