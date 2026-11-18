import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const blog = defineCollection({
  // Load Markdown files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    // Path to a file in `public/`, e.g. `/images/hero.svg`
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
})

export const collections = { blog }
