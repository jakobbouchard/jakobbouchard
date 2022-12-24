import { error } from '@sveltejs/kit';
import { getClient, overlayDrafts } from '$lib/sanity/client';
import { allprojectsQuery, type Project } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { isPreview } }) => {
	const projects = await getClient(isPreview).fetch<Project[]>(allprojectsQuery);

	if (!projects) {
		throw error(500, 'Could not find projects');
	}

	return { projects: overlayDrafts(projects) };
}) satisfies PageServerLoad;
