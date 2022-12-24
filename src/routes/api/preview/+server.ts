import type { RequestHandler } from './$types';
import { enablePreview } from '$lib/sanity/preview';
import { getClient } from '$lib/sanity/client';
import { projectNoContentQuery } from '$lib/sanity/queries';
import { error, redirect } from '@sveltejs/kit';

export const GET = (async ({ url, cookies, setHeaders }) => {
	const allParams = url.searchParams;
	const secret = import.meta.env.VITE_PREVIEW_SECRET;
	const incomingSecret = allParams.get('secret');
	const type = allParams.get('type');
	const slug = allParams.get('slug');
	const isEmbed = allParams.get('embed');

	// Check the secret.
	if (secret !== incomingSecret) {
		throw error(401, 'Invalid secret');
	}

	// Check if we have a type and slug parameter.
	if (!slug || !type) {
		throw error(401, 'Missing slug or type');
	}

	// Default redirect. Altnernatively, you can redirect to a 404 page.
	let redirectSlug = '/';
	let isPreviewing = false;

	// Our query may vary depending on the type.
	if (type === 'project') {
		const project = await getClient(true).fetch(projectNoContentQuery, { slug });

		if (!project || !project.slug) {
			throw error(401, 'No project found');
		}

		isPreviewing = true;

		redirectSlug = `/projects/${project.slug}${isEmbed ? '?isEmbedPreview=true' : ''}`;
	}

	// Set the preview cookie.
	if (isPreviewing) {
		enablePreview(cookies);
	}

	// Since this endpoint is called from the Sanity Studio on
	// every content change, we'll make sure not to cache it.
	setHeaders({ 'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0' });

	// We don't redirect to url.searchParams.get("slug") as that exposes us to open redirect vulnerabilities,
	throw redirect(302, redirectSlug);
}) satisfies RequestHandler;
