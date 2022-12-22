import type { PageLoad } from './$types';

export const load = (async () => {
	return { title: 'Who is Jakob Bouchard' };
}) satisfies PageLoad;
