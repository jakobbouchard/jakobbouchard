import type { RequestHandler } from './$types';
import { disablePreview } from '$lib/sanity/preview';
import { redirect } from '@sveltejs/kit';

export const GET = (async ({ request, cookies, url }) => {
	const referer = request.headers.get('referer');

	disablePreview(cookies);

	throw redirect(302, referer || url.origin || '/');
}) satisfies RequestHandler;
