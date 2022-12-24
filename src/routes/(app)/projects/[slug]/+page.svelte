<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { createPreviewSubscriptionStore } from '$lib/sanity/sveltekit/previewSubscriptionStore';
	import config from '$lib/sanity/config/client';
	import { projectQuery } from '$lib/sanity/queries';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const previewSubscription = createPreviewSubscriptionStore(config);

	$: ({ initialData, isPreview, slug } = data);
	$: ({ data: project } = previewSubscription(projectQuery, {
		params: { slug },
		initialData,
		enabled: isPreview && !!slug
	}));
</script>

<article class="container">
	<header>
		<h1>{$project.data.title}</h1>
		<p class="entry-meta">
			Posted on
			<time class="posted-on" datetime={$project.data.date}>
				{new Date($project.data.date).toLocaleDateString('en-CA', { dateStyle: 'long' })}
			</time>
		</p>
	</header>
	{#if $project.data.content}
		<PortableText value={$project.data.content} />
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
