import type { PageLoad } from './$types';

export const load = (async () => {
	return { title: 'Talk with me' };
}) satisfies PageLoad;
