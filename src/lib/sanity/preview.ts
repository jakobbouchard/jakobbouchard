import type { Cookies } from '@sveltejs/kit';
import { dev } from '$app/environment';
import type { PreviewType } from '$lib/types';

const cookieName = '__preview_type';

/**
 * Sets the preview type using cookies.
 *
 * @param cookies The cookies object from the request.
 */
export function setPreviewType(cookies: Cookies, previewType: PreviewType) {
	cookies.set(cookieName, previewType.toString(), {
		httpOnly: true,
		path: '/',
		sameSite: 'strict',
		secure: !dev
	});
}

/**
 * Gets the preview type from the cookies.
 *
 * @param cookies The cookies object from the request.
 * @returns The preview type.
 */
export function getPreviewType(cookies: Cookies) {
	return cookies.get(cookieName) as PreviewType | undefined;
}

/**
 * Disables preview mode using cookies.
 *
 * @param cookies The cookies object from the request.
 */
export function disablePreview(cookies: Cookies) {
	cookies.delete(cookieName, {
		httpOnly: true,
		path: '/',
		sameSite: 'strict',
		secure: !dev
	});
}
