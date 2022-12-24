import type { SchemaPluginOptions } from 'sanity';

export default {
	name: 'project',
	type: 'document',
	title: 'Project',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title'
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: { source: 'title' }
		},
		{
			name: 'featuredImage',
			type: 'image',
			title: 'Featured Image'
		},
		{
			name: 'summary',
			type: 'string',
			title: 'Summary'
		},
		{
			title: 'Content',
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }]
		}
	]
} satisfies Unpacked<SchemaPluginOptions['types']>;
