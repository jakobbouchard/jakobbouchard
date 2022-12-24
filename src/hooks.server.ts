import { isPreviewEnabled } from '$lib/sanity/preview';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.isPreview = isPreviewEnabled(event.cookies);

	const response = await resolve(event);
	return response;
};
