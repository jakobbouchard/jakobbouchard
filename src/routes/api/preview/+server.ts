import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';
import { setPreviewCookie } from '$lib/sanity/preview-cookie';
import { getClient } from '$lib/sanity/client';
import { projectBySlugQuery } from '$lib/sanity/queries';
import { error, redirect } from '@sveltejs/kit';

export const GET = (async ({ url, cookies, setHeaders }) => {
	const allParams = url.searchParams;
	const secret = env.VITE_SANITY_PREVIEW_SECRET;
	const incomingSecret = allParams.get('secret');
	const type = allParams.get('type');
	const slug = allParams.get('slug');
	const embedded = allParams.get('embed');

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
		const project = await getClient(true).fetch(projectBySlugQuery, { slug });

		if (!project || !project.slug) {
			throw error(401, 'No project found');
		}

		isPreviewing = true;

		// Set the redirect slug and append the isPreview query
		// param, so that the app knows it's a Sanity preview.
		const isPreview = embedded ? 'isPreview=true' : '';
		redirectSlug = `/projects/${project.slug}?${isPreview}`;
	}

	// Set the preview cookie.
	if (isPreviewing) {
		setPreviewCookie(cookies);
	}

	// Since this endpoint is called from the Sanity Studio on
	// every content change, we'll make sure not to cache it.
	setHeaders({ 'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0' });

	// We don't redirect to url.searchParams.get("slug") as that exposes us to open redirect vulnerabilities,
	throw redirect(302, redirectSlug);
}) satisfies RequestHandler;
