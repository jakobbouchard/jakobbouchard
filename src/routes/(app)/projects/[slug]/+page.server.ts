import { error } from "@sveltejs/kit";
import { getClient } from "$lib/sanity/client";
import { projectQuery, type Project } from "$lib/sanity/queries";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params: { slug }, parent }) => {
	const { isPreview, isEmbedPreview } = await parent();
	const project = await getClient(isPreview || isEmbedPreview).fetch<Project>(
		projectQuery,
		{ slug },
	);

	if (!project) {
		throw error(404, "Project not found");
	}

	return { project };
}) satisfies PageServerLoad;
