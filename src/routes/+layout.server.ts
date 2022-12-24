import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { isPreview, previewType } }) => {
	return { isPreview, previewType };
}) satisfies LayoutServerLoad;
