import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
  }),

  schema: z.object({
    poster: z.string(),
    title: z.string(),
    subtitle: z.string(),
  }),
});

export const collections = { blog };
