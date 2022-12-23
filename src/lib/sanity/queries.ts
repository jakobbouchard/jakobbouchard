import type { InputValue } from '@portabletext/svelte/ptTypes';
import groq from 'groq';

export interface Project {
	title: string;
	slug: string;
	date: string;
	summary: string;
	content: InputValue;
}

const projectFields = groq`
  title,
  "slug": slug.current,
  "date": _createdAt,
  summary,
  content
`;

export const projectQuery = groq`
{
  "draft": *[_type == "project" && slug.current == $slug && defined(draft) && draft == true][0]{
    content,
    ${projectFields}
  },
  "project": *[_type == "project" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${projectFields}
  },
  "moreProjects": *[_type == "project" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${projectFields}
  }
}`;

export const allprojectsQuery = groq`
*[_type == "project"] | order(date desc, _updatedAt desc) {
  ${projectFields}
}`;

export const projectBySlugQuery = groq`
*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}
`;
