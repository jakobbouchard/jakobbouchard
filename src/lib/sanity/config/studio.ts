import type { Config, DocumentPluginOptions, Slug } from 'sanity';
import { getComponent } from '$lib/sanity/components/Preview';

/*-------------- SCHEMAS --------------*/
import projectType from '$lib/sanity/schemas/project';
const schemaTypes = [projectType];

/*-------------- PLUGINS --------------*/
import { deskTool, type DeskToolOptions } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { contentGraphView } from 'sanity-plugin-graph-view';
const deskConfig = {
	// `defaultDocumentNode is responsible for adding a “Preview” tab to the document pane
	// You can add any React component to `S.view.component` and it will be rendered in the pane
	// and have access to content in the form in real-time.
	// It's part of the Studio's “Structure Builder API” and is documented here:
	// https://www.sanity.io/docs/structure-builder-reference
	defaultDocumentNode: (S, { schemaType }) => {
		if (schemaType === projectType.name) {
			return S.document().views([
				S.view.form(),
				S.view.component(getComponent(import.meta.env.VITE_PREVIEW_SECRET)).title('Preview')
			]);
		}

		return null;
	}
} satisfies DeskToolOptions;

/*----------- STUDIO CONFIG -----------*/
const documentConfig = {
	productionUrl: async (prev, { document }) => {
		const url = new URL('/api/preview', location.origin);
		const secret = import.meta.env.VITE_PREVIEW_SECRET;
		if (secret) {
			url.searchParams.set('secret', secret);
		}

		url.searchParams.set('type', document._type);

		switch (document._type) {
			case projectType.name:
				url.searchParams.set('slug', (document.slug as Slug)?.current);
				break;
			default:
				return prev;
		}

		return url.toString();
	}
} satisfies DocumentPluginOptions;

export default {
	projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
	dataset: import.meta.env.VITE_SANITY_PROJECT_DATASET,

	title: 'Jakob Bouchard',
	basePath: '/studio',

	plugins: [deskTool(deskConfig), visionTool(), unsplashImageAsset(), contentGraphView({})],
	document: documentConfig,

	schema: { types: schemaTypes }
} satisfies Config;
