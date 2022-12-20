import type { PageLoad } from './$types';

export const load = (async () => {
	return { title: 'Contact' };
}) satisfies PageLoad;
