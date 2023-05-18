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
				animatedImg: image()
					.refine(({ format }) => format == "gif", {
						message: "This must be a gif!",
					})
					.optional(),
				img: image().optional(),
				imgAlt: z.string().optional(),
				url: z.string().optional(),
			}),
	}),
};
