<script lang="ts">
	import { page } from '$app/stores';
	import { env } from '$env/dynamic/public';
	import { definePreview } from '$lib/sanity/sveltekit/preview';
	import config from '$lib/sanity/config/client';
	import { allprojectsQuery } from '$lib/sanity/queries';
	import type { PageData } from './$types';

	export let data: PageData;

	const withPreview = definePreview(config);

	const projects = withPreview(
		data.isPreview,
		env.PUBLIC_SANITY_API_TOKEN,
		data.projects,
		allprojectsQuery
	);
</script>

<svelte:head>
	<title>Projects – {$page.data.siteTitle}</title>
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
