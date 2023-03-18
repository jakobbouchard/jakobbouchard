import { defineCollection, z, image } from "astro:content";

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			attribution: z.string().optional(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: image().optional(),
			imgAlt: z.string().optional(),
			url: z.string().optional(),
		}),
	}),
};
