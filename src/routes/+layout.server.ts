import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { previewType } }) => {
	return { previewType };
}) satisfies LayoutServerLoad;
