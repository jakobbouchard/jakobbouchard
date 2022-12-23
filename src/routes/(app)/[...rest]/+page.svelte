<script>
	import { dev } from '$app/environment';
	import { renderStudio, defineConfig } from 'sanity';
	import { deskTool } from 'sanity/desk';
	import { schemaTypes } from './schemas';

	const config = defineConfig({
		name: 'default',
		title: 'Portfolio',

		projectId: 'omwsdwsk',
		dataset: !dev ? 'production' : 'staging',

		plugins: [deskTool()],

		schema: { types: schemaTypes }
	});

	renderStudio(document.getElementById('app'), config);
</script>
