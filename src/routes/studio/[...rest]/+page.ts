// We need to disable SSR for Sanity Studio to work correctly,
// because it doesn't support Node ESM imports for now.
export const ssr = false;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
