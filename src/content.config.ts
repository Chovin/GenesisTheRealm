import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // Not available with legacy API

const seasons = defineCollection({
    loader: glob({ pattern: "*.md", base: "./seasons" }),
    schema: z.object({
        img: z.string().optional()
    })
});

export const collections = { seasons }