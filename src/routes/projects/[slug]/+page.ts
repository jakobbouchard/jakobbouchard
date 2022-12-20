import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	return { title: `Title for ${params.slug} goes here` };
}) satisfies PageLoad;
