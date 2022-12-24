import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { projectQuery, type Project } from '$lib/sanity/queries';
import { getClient } from '$lib/sanity/client';

export const load = (async ({ params, locals: { isPreview } }) => {
	const { project } = await getClient(isPreview).fetch<{ project: Project }>(projectQuery, {
		slug: params.slug
	});

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		isPreview,
		slug: project?.slug || params.slug,
		initialData: { data: project }
	};
}) satisfies PageServerLoad;
