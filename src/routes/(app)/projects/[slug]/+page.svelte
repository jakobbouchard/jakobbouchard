<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { env } from '$env/dynamic/public';
	import { definePreview } from '$lib/sanity/sveltekit/preview';
	import config from '$lib/sanity/config/client';
	import { projectQuery } from '$lib/sanity/queries';
	import type { PageData } from './$types';

	export let data: PageData;

	const withPreview = definePreview(config);

	const project = withPreview(
		data.isPreview,
		env.PUBLIC_SANITY_API_TOKEN,
		data.project,
		projectQuery,
		{ slug: data.project.slug }
	);
</script>

<svelte:head>
	<title>{$project.title} – {data.siteTitle}</title>
</svelte:head>

<article class="container">
	<header>
		<h1>{$project.title}</h1>
		<p class="entry-meta">
			Posted on
			<time class="posted-on" datetime={$project.date}>
				{new Date($project.date).toLocaleDateString('en-CA', { dateStyle: 'long' })}
			</time>
		</p>
	</header>
	{#if $project.content}
		<PortableText value={$project.content} />
	{/if}
	<footer>
		<!-- <span class="cat-links">Posted in <a href="/category/meta" rel="category tag">Meta</a></span> -->
	</footer>
</article>

<style>
	header {
		margin-bottom: var(--space-4);
	}

	header h1 {
		margin-bottom: var(--space-2);
	}

	header .entry-meta {
		margin-top: var(--space-2);
	}

	footer {
		display: flex;
		flex-direction: column;
		padding-top: var(--space-2);
	}
</style>
