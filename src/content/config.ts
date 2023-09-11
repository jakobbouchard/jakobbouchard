import { defineCollection, z } from "astro:content";

export const collections = {
	work: defineCollection({
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				description: z.string(),
				attribution: z.string().optional(),
				publishDate: z.coerce.date(),
				tags: z.array(z.string()),
				filters: z.array(z.string()),
				videoPreview: z.string().optional(),
				img: image().optional(),
				imgAlt: z.string().optional(),
				url: z.string().optional(),
			}),
	}),
};
