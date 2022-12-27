import type { QueryParams } from 'sanity';
import type { GroqStore, Config } from '@sanity/groq-store';
import { onMount } from 'svelte';
import { writable } from 'svelte/store';

type PreviewConfig = Pick<
	Config,
	'projectId' | 'dataset' | 'includeTypes' | 'documentLimit' | 'subscriptionThrottleMs'
>;

export function definePreview({
	projectId,
	dataset,
	includeTypes,
	documentLimit = 3000,
	subscriptionThrottleMs = 50
}: PreviewConfig) {
	let store: GroqStore;
	return function withPreview<D>(
		token: string | null,
		initialData: D,
		query: string,
		params?: QueryParams
	) {
		const data = writable(initialData);

		onMount(async () => {
			if (!projectId) {
				console.warn('No projectId set for `definePreview`');
				return;
			}

			if (!store) {
				const _checkAuth = async () => {
					const res = await fetch(`https://${projectId}.api.sanity.io/v1/users/me`, {
						credentials: 'include',
						headers: token ? { Authorization: `Bearer ${token}` } : undefined
					});
					const json = await res.json();
					return !!json?.id;
				};

				const hasAuth = await _checkAuth();
				if (!hasAuth) {
					throw new Error('Not authenticated. Cannot preview.');
				}

				const { groqStore } = await import('@sanity/groq-store');

				// Lazy load the huge `event-source-polyfill`, but only if a token is specified
				let EventSource = undefined;
				if (token !== null) {
					const pkg = await import('event-source-polyfill');
					EventSource = pkg.EventSourcePolyfill;
				}

				store = groqStore({
					projectId,
					dataset,
					documentLimit,
					subscriptionThrottleMs,
					includeTypes,
					token: token === null ? undefined : token,
					EventSource,
					listen: true,
					overlayDrafts: true
				});

				const subscription = store.subscribe(
					query,
					typeof params === 'undefined' ? {} : params,
					(err, result) => {
						if (err) {
							throw err;
						}
						data.set(result);
					}
				);

				return () => {
					subscription.unsubscribe();
					store.close();
				};
			}
		});

		return data;
	};
}
