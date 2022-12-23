import { createPreviewSubscriptionStore } from './sveltekit/previewSubscriptionStore';
import { createCurrentUserStore } from './sveltekit/currentUser';
import config from './config/client';

export const previewSubscription = createPreviewSubscriptionStore(config);
export const sanityUser = createCurrentUserStore(config);
