import config from "./config/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(config);

export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}
