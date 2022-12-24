import type { Cookies } from '@sveltejs/kit';

const cookieName = '__preview_enabled';
const cookieOpts = {
	httpOnly: true,
	path: '/',
	sameSite: true
};

/**
 * @param cookies The cookies object from the request.
 */
export function enablePreview(cookies: Cookies) {
	cookies.set(cookieName, '1', cookieOpts);
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
	cookies.delete(cookieName, cookieOpts);
}
