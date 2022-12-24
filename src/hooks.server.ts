import { isPreviewEnabled } from '$lib/sanity/preview';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const isPreview = isPreviewEnabled(event.cookies);
	event.locals.isPreview = isPreview;
	event.locals.isEmbedPreview =
		isPreview && event.url.searchParams.get('isEmbedPreview') === 'true';

	return await resolve(event);
};
