/**
 * Checks if the current cookies result in a valid session
 * @internal
 */
export async function checkAuth(projectId: string, token?: string): Promise<boolean> {
	const res = await fetch(`https://${projectId}.api.sanity.io/v1/users/me`, {
		credentials: 'include'
	});
	const json = await res.json();
	return Boolean(json?.id);
}
