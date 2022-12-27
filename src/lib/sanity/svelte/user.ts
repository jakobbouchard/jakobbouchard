import type { CurrentUser } from 'sanity';

/**
 * Checks if the current cookies or token result in a valid session
 * @internal
 */
export async function getCurrentUser(
	projectId: string,
	token: string | null
): Promise<CurrentUser | null> {
	const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
	const res = await fetch(`https://${projectId}.api.sanity.io/v1/users/me`, {
		credentials: 'include',
		headers
	});
	const json = await res.json();
	return json?.id ? json : null;
}
