import { defineType, defineField } from 'sanity';

export const project = defineType({
	name: 'project',
	type: 'document',
	title: 'Project',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title'
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: { source: 'title' }
		}),
		defineField({
			name: 'summary',
			type: 'string',
			title: 'Summary'
		}),
		defineField({
			title: 'Content',
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }]
		})
	]
});
