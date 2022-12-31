import type { SchemaPluginOptions } from "sanity";

export default {
	title: "Project",
	name: "project",
	type: "document",
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
			validation: (Rule) => Rule.required().min(10).max(80),
		},
		{
			title: "Slug",
			name: "slug",
			type: "slug",
			options: { source: "title" },
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Featured Image",
			name: "featuredImage",
			type: "image",
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Summary",
			name: "summary",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Content",
			name: "content",
			type: "array",
			of: [{ type: "block" }],
			validation: (Rule) => Rule.required(),
		},
	],
} satisfies Unpacked<SchemaPluginOptions["types"]>;
