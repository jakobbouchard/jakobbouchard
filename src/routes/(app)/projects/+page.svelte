<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { PUBLIC_SANITY_API_TOKEN } from '$env/static/public';
	import type { PageData } from './$types';

	export let data: PageData;
	let projects = writable(data.projects);

	onMount(async () => {
		if (data.isPreview || data.isEmbedPreview) {
			const { definePreview } = await import('$lib/sanity/svelte/preview');
			const { default: config } = await import('$lib/sanity/config/client');
			const { allprojectsQuery } = await import('$lib/sanity/queries');

			const withPreview = definePreview(config);
			projects = withPreview(PUBLIC_SANITY_API_TOKEN, data.projects, allprojectsQuery);
		}
	});
</script>

<svelte:head>
	<title>Projects – {data.siteTitle}</title>
</svelte:head>

<div class="container">
	<header>
		<h1>Projects</h1>
	</header>
	{#if $projects.length}
		<ul>
			{#each $projects as project}
				<li>
					<article>
						<header>
							<h2>
								<a href="/projects/{project.slug}">{project.title}</a>
							</h2>
						</header>
						{#if project.summary}
							<p>{project.summary}</p>
						{/if}
					</article>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No projects found</p>
	{/if}
</div>

<style>
	ul {
		padding-left: 0;
		list-style: none;
	}
</style>
