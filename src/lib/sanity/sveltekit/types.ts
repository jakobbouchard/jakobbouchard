import type { Config } from '@sanity/groq-store/dist/typings/types';

export interface ProjectConfig {
	projectId: string;
	dataset: string;
	token?: string;
	/** Must be provided when token is used in browser, as native EventSource does not support auth-headers. */
	EventSource?: Config['EventSource'];
}

export interface CurrentUser {
	id: string;
	name: string;
}

export type Params = Record<string, unknown>;

export interface SubscriptionOptions<R = unknown> {
	enabled?: boolean;
	params?: Params;
	initialData?: R;
}
