import { getClient } from './client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(getClient());

export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}
