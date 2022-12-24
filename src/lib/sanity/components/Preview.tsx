import React, { useMemo } from 'react';
import { Card, Text } from '@sanity/ui';

export function getComponent(secret: string | undefined) {
	/**
	 * This component is responsible for rendering a preview of a post inside the Studio.
	 */
	return function Preview(props: any) {
		const previewUrl = useMemo(() => {
			if (!props.document.displayed.slug) {
				return '';
			}
			const url = new URL('/api/preview', location.origin);

			if (secret) {
				url.searchParams.set('secret', secret);
			}

			url.searchParams.set('embed', 'true');
			url.searchParams.set('slug', props.document.displayed.slug.current);
			url.searchParams.set('type', props.document.displayed._type);

			// Needed to break the cache.
			url.searchParams.set('random', Math.random().toString(36).substring(7));

			return url.toString();
		}, [props]);

		if (!props.document.displayed.slug) {
			return (
				<Card tone="primary" margin={5} padding={6}>
					<Text align="center">Please add a slug to the post to see the preview!</Text>
				</Card>
			);
		}

		return (
			<Card scheme="light" style={{ width: '100%', height: '100%' }}>
				<iframe style={{ width: '100%', height: '100%', border: '0' }} src={previewUrl} />
			</Card>
		);
	};
}
