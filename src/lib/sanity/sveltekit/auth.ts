/**
 * Checks if the current token, or cookies, result in a valid session
 * @internal
 */
export async function _checkAuth(projectId: string, token?: string): Promise<boolean> {
	const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
	const res = await fetch(`https://${projectId}.api.sanity.io/v1/users/me`, {
		credentials: 'include',
		headers
	});
	const json = await res.json();
	return Boolean(json?.id);
}
