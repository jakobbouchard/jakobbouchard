import { isPreviewEnabled } from '$lib/sanity/preview';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies, url }) => {
	const isPreview = isPreviewEnabled(cookies);
	const isEmbedPreview =
		isPreviewEnabled(cookies, true) && url.searchParams.get('isEmbedPreview') === 'true';

	return {
		siteTitle: 'Jakob Bouchard',
		siteDescription: 'Game dev dude',
		isPreview,
		isEmbedPreview
	};
}) satisfies LayoutServerLoad;
