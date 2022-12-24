import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { isPreview }, url }) => {
	const isEmbedPreview = isPreview && url.searchParams.get('isEmbedPreview') === 'true'

	return { isPreview, isEmbedPreview };
}) satisfies LayoutServerLoad;
