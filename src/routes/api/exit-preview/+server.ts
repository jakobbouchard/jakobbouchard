import { redirect } from '@sveltejs/kit';
import { disablePreview } from '$lib/sanity/preview';
import type { RequestHandler } from './$types';

export const GET = (async ({ request, cookies, url }) => {
	const referer = request.headers.get('referer');

	disablePreview(cookies);

	throw redirect(307, referer || url.origin || '/');
}) satisfies RequestHandler;
