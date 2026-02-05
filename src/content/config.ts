import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        author: z.string().default('Joe'),
        tags: z.array(z.string()).default(['Safari']),
    }),
});

const packages = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        description: z.string(),
        duration: z.string(),
        price: z.number(),
        destination: z.string(),
        image: z.string(),
        highlights: z.array(z.string()),
        includes: z.string(),
        itinerary: z.array(z.object({
            day: z.number(),
            title: z.string(),
            description: z.string(),
        })).optional(),
        featured: z.boolean().default(false),
    }),
});

export const collections = { blog, packages };
