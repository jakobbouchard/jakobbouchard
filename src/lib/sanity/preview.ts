import type { Cookies } from '@sveltejs/kit';
import { dev } from '$app/environment';

const cookieName = '__preview_enabled';

/**
 * @param cookies The cookies object from the request.
 */
export function enablePreview(cookies: Cookies) {
	cookies.set(cookieName, '1', {
		httpOnly: true,
		path: '/',
		sameSite: 'strict',
		secure: !dev
	});
}

/**
 * @param cookies The cookies object from the request.
 */
export function isPreviewEnabled(cookies: Cookies) {
	return cookies.get(cookieName) === '1';
}

/**
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
