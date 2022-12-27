import { error } from '@sveltejs/kit';
import { getClient, overlayDrafts } from '$lib/sanity/client';
import { allprojectsQuery, type Project } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load = (async ({ parent }) => {
	const { isPreview, isEmbedPreview } = await parent();
	const projects = await getClient(isPreview || isEmbedPreview).fetch<Project[]>(allprojectsQuery);

	if (!projects) {
		throw error(500, 'Could not find projects');
	}

	return { projects: overlayDrafts(projects) };
}) satisfies PageServerLoad;
