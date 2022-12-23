import type { PageLoad } from './$types';
import { client, type Project } from '$lib/sanity';

export const load = (async ({ params }) => {
	const [data] = await client.fetch<Project[]>(
		`*[_type == "project" && slug.current == "${params.slug}"]`
	);

	return { ...data };
}) satisfies PageLoad;
