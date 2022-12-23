import React from 'react';
import { Card, Text } from '@sanity/ui';

/**
 * This component is responsible for rendering a preview of a post inside the Studio.
 * It's imported in `sanity.config.ts´ and used as a component in the defaultDocumentNode function.
 */
export default function Preview(props: any) {
	if (!props.document.displayed.slug) {
		return (
			<Card tone="primary" margin={5} padding={6}>
				<Text align="center">Please add a slug to the post to see the preview!</Text>
			</Card>
		);
	}

	return (
		<Card scheme="light" style={{ width: '100%', height: '100%' }}>
			<iframe style={{ width: '100%', height: '100%', border: '0' }} src={getUrl(props)} />
		</Card>
	);
}

function getUrl({ document }: { document: any }) {
	const url = new URL('/api/preview', location.origin);
	const secret = import.meta.env.VITE_SANITY_PREVIEW_SECRET;

	if (secret) {
		url.searchParams.set('secret', secret);
	}

	url.searchParams.set('slug', document.displayed.slug.current);
	url.searchParams.set('type', document.displayed._type);

	// Needed to break the cache.
	url.searchParams.set('random', Math.random().toString(36).substring(7));

	return url.toString();
}
