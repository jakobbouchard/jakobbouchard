import { ISR_BYPASS_TOKEN } from "$env/static/private";
import type { Cookies } from "@sveltejs/kit";

const cookieName = "__preview_enabled";
const embedCookieName = "__preview_embed";
const cookieOpts = {
	httpOnly: true,
	path: "/",
	sameSite: true,
};

/**
 * @param cookies The cookies object from the request.
 */
export function enablePreview(cookies: Cookies, embed = false) {
	cookies.set(embed ? embedCookieName : cookieName, "1", cookieOpts);
	cookies.set("__prerender_bypass", ISR_BYPASS_TOKEN, cookieOpts);
}

/**
 * @param cookies The cookies object from the request.
 */
export function isPreviewEnabled(cookies: Cookies, embed = false) {
	return cookies.get(embed ? embedCookieName : cookieName) === "1";
}

/**
 * @param cookies The cookies object from the request.
 */
export function disablePreview(cookies: Cookies) {
	cookies.delete(cookieName, cookieOpts);
	cookies.delete(embedCookieName, cookieOpts);
	cookies.delete("__prerender_bypass", cookieOpts);
}
