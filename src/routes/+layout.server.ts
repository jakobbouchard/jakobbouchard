import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { previewMode }, url }) => {
	const isPreview = previewMode && url.searchParams.get('isPreview') === 'true';

	return {
		previewModeEmbed: isPreview,
		previewMode
	};
}) satisfies LayoutServerLoad;
