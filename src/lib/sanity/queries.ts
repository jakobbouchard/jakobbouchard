import groq from "groq";
import type { InputValue } from "@portabletext/svelte/ptTypes";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface ProjectNoContent {
	_id: string;
	title: string;
	slug: string;
	date: string;
	summary: string;
}

export interface Project extends ProjectNoContent {
	featuredImage: SanityImageSource;
	content: InputValue;
}

const projectFields = groq`
  _id,
  title,
  "slug": slug.current,
  "date": _createdAt,
  summary
`;

export const projectQuery = groq`
*[_type == "project" && slug.current == $slug] | order(date desc, _updatedAt desc)[0] {
  content,
  featuredImage,
  ${projectFields}
}`;

export const allprojectsQuery = groq`
*[_type == "project"] | order(date desc, _updatedAt desc) {
  ${projectFields}
}`;

export const projectNoContentQuery = groq`
*[_type == "project" && slug.current == $slug] | order(date desc, _updatedAt desc)[0] {
  ${projectFields}
}`;
