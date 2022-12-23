import { error } from '@sveltejs/kit';
import { getClient } from '$lib/sanity/client';
import { allprojectsQuery, type Project } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const projects = await getClient().fetch<Project[]>(allprojectsQuery);

	if (!projects) {
		throw error(500, 'No projects found');
	}

	return { title: 'Projects', projects: projects };
}) satisfies PageServerLoad;
