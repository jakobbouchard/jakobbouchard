import { dev } from '$app/environment';
import type { Cookies } from '@sveltejs/kit';

const cookieName = '__preview_mode';

/**
 * Preview mode cookie name.
 *
 * @param cookies The cookies object from the request
 * @returns The cookies object with the preview cookie set
 */
export function setPreviewCookie(cookies: Cookies) {
	cookies.set(cookieName, 'true', {
		httpOnly: true,
		path: '/',
		sameSite: 'strict',
		secure: !dev
	});
}

/**
 * Get the preview mode cookie value.
 *
 * @param cookies The cookies object from the request
 * @returns The preview mode cookie value
 */
export function getPreviewCookie(cookies: Cookies) {
	return cookies.get(cookieName);
}

/**
 * Remove the preview mode cookie.
 *
 * @param cookies The cookies object from the request
 * @returns The cookies object with the preview cookie removed
 */
export function clearPreviewCookie(cookies: Cookies) {
	cookies.set(cookieName, 'true', {
		httpOnly: true,
		path: '/',
		sameSite: 'strict',
		secure: !dev,
		expires: new Date(0)
	});
}
