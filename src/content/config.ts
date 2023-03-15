import { defineCollection, z } from "astro:content";

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			featured: z.boolean().optional(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};
