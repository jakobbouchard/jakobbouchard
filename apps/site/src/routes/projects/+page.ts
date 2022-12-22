import type { PageLoad } from './$types';
import { client, type Project } from '$lib/sanity';

export const load = (async () => {
	const data = await client.fetch<Project[]>(`*[_type == "project"]`);

	return { title: 'Projects', projects: data };
}) satisfies PageLoad;
