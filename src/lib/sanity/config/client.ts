import type { ClientConfig } from '@sanity/client';
import { dev } from '$app/environment';
import { PUBLIC_SANITY_PROJECT_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

export default {
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_PROJECT_DATASET,
	useCdn: !dev,
	apiVersion: '2022-12-21'
} satisfies ClientConfig;
