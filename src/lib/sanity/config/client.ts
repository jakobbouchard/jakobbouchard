import type { ClientConfig } from '@sanity/client';
import { dev } from '$app/environment';

export default {
	projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
	dataset: import.meta.env.VITE_SANITY_PROJECT_DATASET,
	useCdn: !dev,
	apiVersion: '2022-12-21'
} satisfies ClientConfig;
