import { defineConfig, isDev } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
	name: 'default',
	title: 'Portfolio',

	projectId: 'omwsdwsk',
	dataset: !isDev ? 'production' : 'staging',

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemaTypes
	}
});
