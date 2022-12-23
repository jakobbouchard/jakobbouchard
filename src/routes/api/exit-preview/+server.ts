import type { RequestHandler } from './$types';
import { clearPreviewCookie } from '$lib/sanity/preview-cookie';
import { redirect } from '@sveltejs/kit';

export const GET = (async ({ request, cookies, url }) => {
	const referer = request.headers.get('referer');

	clearPreviewCookie(cookies);

	throw redirect(302, referer || url.origin || '/');
}) satisfies RequestHandler;
