import { isPreviewEnabled } from '$lib/sanity/preview';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies, url }) => {
	const isPreview = isPreviewEnabled(cookies);

	return {
		siteTitle: 'Jakob Bouchard',
		siteDescription: 'Game dev dude',
		isPreview,
		isEmbedPreview: isPreview && url.searchParams.get('isEmbedPreview') === 'true'
	};
}) satisfies LayoutServerLoad;
