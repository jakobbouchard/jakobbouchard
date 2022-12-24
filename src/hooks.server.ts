import { getPreviewType } from '$lib/sanity/preview';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const previewType = getPreviewType(event.cookies);
	event.locals.previewType = previewType;

	event.locals.isPreview = false;
	if (previewType) {
		event.locals.isPreview = true;
	}

	const response = await resolve(event);
	return response;
};
