<script lang="ts">
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
	import { PortableText } from "@portabletext/svelte";
	import { PUBLIC_SANITY_API_TOKEN } from "$env/static/public";
	import { urlFor } from "$lib/sanity/images";
	import type { PageData } from "./$types";

	export let data: PageData;

	let project = writable(data.project);

	onMount(async () => {
		if (data.isPreview || data.isEmbedPreview) {
			const { definePreview } = await import("$lib/sanity/svelte/preview");
			const { default: config } = await import("$lib/sanity/config/client");
			const { projectQuery } = await import("$lib/sanity/queries");

			const withPreview = definePreview(config);
			project = withPreview(
				PUBLIC_SANITY_API_TOKEN,
				data.project,
				projectQuery,
				{ slug: data.project.slug },
			);
		}
	});
	$: featuredImage = urlFor($project.featuredImage)
		.size(1024, 576)
		.auto("format")
		.url();
</script>

<svelte:head>
	<title>{$project.title} – {data.siteTitle}</title>
	<link rel="preload" as="image" href={featuredImage} />
</svelte:head>

<article class="container">
	<header>
		<h1>{$project.title}</h1>
		<p class="entry-meta">
			Posted on
			<time class="posted-on" datetime={$project.date}>
				{new Date($project.date).toLocaleDateString("en-CA", {
					dateStyle: "long",
				})}
			</time>
		</p>
	</header>
	<img src={featuredImage} alt="" />
	<PortableText value={$project.content} />
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

	img {
		aspect-ratio: 16/9;
		max-width: 100%;
	}

	footer {
		display: flex;
		flex-direction: column;
		padding-top: var(--space-2);
	}
</style>
