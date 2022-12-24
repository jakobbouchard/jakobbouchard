import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { isPreview }, url }) => {
	return {
		siteTitle: 'Jakob Bouchard',
		siteDescription: 'Game dev dude',
		isPreview,
		isEmbedPreview: isPreview && url.searchParams.get('isEmbedPreview') === 'true'
	};
}) satisfies LayoutServerLoad;
