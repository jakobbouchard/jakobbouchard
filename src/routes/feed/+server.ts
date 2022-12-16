import type { RequestHandler } from './$types';

// TODO: Get files and encode html
export const GET: RequestHandler = async () => {
	const files: any[] = [];
	const rssItems = files.reduce(
		(acc, post) =>
			acc +
			`
<item>
	<title>${post.title}</title>
	<link>https://kudadam.com/blog/${post.slug}</link>
	<guid>https://kudadam.com/blog/${post.slug}</guid>
	<pubDate>${new Date(post.date)}</pubDate>
	<category>${post.category}</category>
	<description>${post.summary}</description>
	<content:encoded>${post.html}</content:encoded>
</item>`,
		''
	);

	const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss
	version="2.0"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
>
	<channel>
		<title>Jakob Bouchard</title>
		<atom:link href="https://jakobbouchard.dev/feed/" rel="self" type="application/rss+xml" />
		<link>https://jakobbouchard.dev</link>
		<description>Full-stack developer</description>
		<language>en-CA</language>
		<category>Technology</category>
		<image>
			<url>https://jakobbouchard.dev/wp-content/uploads/2021/10/cropped-cropped-logo-32x32.png</url>
			<title>Jakob Bouchard</title>
			<link>https://jakobbouchard.dev</link>
			<width>32</width>
			<height>32</height>
		</image>
		${rssItems}
		<copyright>2022 - Now, Jakob Bouchard.</copyright>
	</channel>
</rss>`;

	return new Response(feed, { headers: { 'Content-Type': 'application/xml' } });
};
