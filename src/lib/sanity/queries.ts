import type { InputValue } from '@portabletext/svelte/ptTypes';
import groq from 'groq';

export interface Project {
	_id: string;
	title: string;
	slug: string;
	date: string;
	summary: string;
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
*[_type == "project" && slug.current == $slug] [0] {
  content,
  ${projectFields}
}`;

export const allprojectsQuery = groq`
*[_type == "project"] | order(date desc, _updatedAt desc) {
  ${projectFields}
}`;

export const projectNoContentQuery = groq`
*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}`;
