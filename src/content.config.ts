import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // Not available with legacy API

const seasons = defineCollection({
    loader: glob({ pattern: "*.md", base: "./seasons" }),
    schema: z.object({
        img: z.string().optional()
    })
});

const regions = defineCollection({
    loader: glob({ pattern: "*.md", base: "./regions" }),
    schema: z.object({
        title: z.string(),
        images: z.string().optional(),
        img: z.string().optional()
    })
})

export const collections = { seasons, regions }