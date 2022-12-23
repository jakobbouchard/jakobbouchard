import type { ClientConfig } from '@sanity/client';
import { dev } from '$app/environment';
import { projectId } from './';

export default {
	projectId,
	dataset: !dev ? 'production' : 'staging',
	useCdn: !dev,
	apiVersion: '2022-12-21'
} satisfies ClientConfig;
