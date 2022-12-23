import sanityClient, { type SanityDocument } from '@sanity/client';
import type { InputValue } from '@portabletext/svelte/ptTypes';
import { dev } from '$app/environment';

export interface Project extends SanityDocument {
	title: string;
	slug: {
		current: string;
	};
	summary: string;
	content: InputValue;
}

export const client = sanityClient({
	projectId: 'omwsdwsk',
	dataset: !dev ? 'production' : 'staging',
	apiVersion: '2022-12-21',
	useCdn: !dev
});
