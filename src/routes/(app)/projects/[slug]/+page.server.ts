import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { projectQuery, type Project } from '$lib/sanity/queries';
import { getClient, overlayDrafts } from '$lib/sanity/client';

export const load = (async ({ params, locals: { previewMode } }) => {
	const { project, moreProjects } = await getClient(previewMode).fetch<{
		project: Project;
		moreProjects: Project[];
	}>(projectQuery, {
		slug: params.slug
	});

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		previewMode,
		slug: project?.slug || params.slug,
		initialData: {
			data: project,
			moreData: overlayDrafts(moreProjects)
		}
	};
}) satisfies PageServerLoad;
