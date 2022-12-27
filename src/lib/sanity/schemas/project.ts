import type { SchemaPluginOptions } from 'sanity';

export default {
	name: 'project',
	type: 'document',
	title: 'Project',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
			validation: (Rule) => Rule.required().min(10).max(80)
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: { source: 'title' },
			validation: (Rule) => Rule.required()
		},
		{
			name: 'featuredImage',
			type: 'image',
			title: 'Featured Image',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'summary',
			type: 'string',
			title: 'Summary',
			validation: (Rule) => Rule.required()
		},
		{
			title: 'Content',
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
			validation: (Rule) => Rule.required()
		}
	]
} satisfies Unpacked<SchemaPluginOptions['types']>;
