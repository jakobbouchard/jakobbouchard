import { defineCollection, z, image } from "astro:content";

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			featured: z.boolean().optional(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: image(),
			img_alt: z.string().optional(),
		}),
	}),
};
