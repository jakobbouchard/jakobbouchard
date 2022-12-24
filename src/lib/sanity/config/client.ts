import type { ClientConfig } from '@sanity/client';
import { dev } from '$app/environment';
import { env } from '$env/dynamic/public';

export default {
	projectId: env.PUBLIC_SANITY_PROJECT_ID,
	dataset: env.PUBLIC_SANITY_PROJECT_DATASET,
	useCdn: !dev,
	apiVersion: '2022-12-21'
} satisfies ClientConfig;
