import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { isPreview, isEmbedPreview } }) => {
	return {
		siteTitle: 'Jakob Bouchard',
		siteDescription: 'Game dev dude',
		isPreview,
		isEmbedPreview
	};
}) satisfies LayoutServerLoad;
