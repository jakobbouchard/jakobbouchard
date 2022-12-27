import { error, redirect } from '@sveltejs/kit';
import { PUBLIC_PREVIEW_SECRET } from '$env/static/public';
import { getClient } from '$lib/sanity/client';
import { enablePreview } from '$lib/sanity/preview';
import { type ProjectNoContent, projectNoContentQuery } from '$lib/sanity/queries';
import type { RequestHandler } from './$types';

export const GET = (async ({ url: { searchParams }, cookies, setHeaders }) => {
	const secret = searchParams.get('secret');
	const type = searchParams.get('type');
	const slug = searchParams.get('slug');
	const isEmbed = searchParams.get('embed') === 'true';

	// Check the secret.
	if (secret !== PUBLIC_PREVIEW_SECRET) {
		throw error(401, 'Invalid secret');
	}

	// Check if we have a type and slug parameter.
	if (!slug || !type) {
		throw error(401, 'Missing slug or type');
	}

	// Default redirect. Altnernatively, you can redirect to a 404 page.
	let redirectSlug = '';
	let isPreviewing = false;
	let document;

	// Our query may vary depending on the type.
	switch (type) {
		case 'project':
			document = await getClient(true).fetch<ProjectNoContent>(projectNoContentQuery, { slug });

			if (!document || !document.slug) {
				throw error(404, 'Not found');
			}

			isPreviewing = true;

			redirectSlug = `/projects/${document.slug}${isEmbed ? '?isEmbedPreview=true' : ''}`;
			break;

		default:
			break;
	}

	// Set the preview cookie.
	if (isPreviewing) {
		enablePreview(cookies, isEmbed);
	}

	// Since this endpoint is called from the Sanity Studio on
	// every content change, we'll make sure not to cache it.
	setHeaders({ 'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0' });

	if (!redirectSlug) {
		throw error(404, 'Not found');
	}

	throw redirect(307, redirectSlug);
}) satisfies RequestHandler;
