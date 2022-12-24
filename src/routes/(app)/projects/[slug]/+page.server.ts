import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { projectQuery, type Project } from '$lib/sanity/queries';
import { getClient } from '$lib/sanity/client';

export const load = (async ({ params: { slug }, parent }) => {
	const { isPreview } = await parent();
	const project = await getClient(isPreview).fetch<Project>(projectQuery, { slug });

	if (!project) {
		throw error(404, 'Project not found');
	}

	return { project };
}) satisfies PageServerLoad;
