import groq from 'groq';
import type { InputValue } from '@portabletext/svelte/ptTypes';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Project {
	_id: string;
	title: string;
	slug: string;
	date: string;
  featuredImage: SanityImageSource;
	summary: string;
	content: InputValue;
}

const projectFields = groq`
  _id,
  title,
  "slug": slug.current,
  "date": _createdAt,
  featuredImage,
  summary
`;

export const projectQuery = groq`
*[_type == "project" && slug.current == $slug] [0] {
  content,
  ${projectFields}
}`;

export const allprojectsQuery = groq`
*[_type == "project"] | order(date desc, _createdAt desc) {
  ${projectFields}
}`;

export const projectNoContentQuery = groq`
*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}`;
