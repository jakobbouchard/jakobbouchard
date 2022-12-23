<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { projects } = data;
</script>

<div class="container">
	<header>
		<h1>Projects</h1>
	</header>
	{#if projects && projects.length}
		<ul>
			{#each projects as project}
				<li>
					<article>
						<header>
							<h2>
								<a href="/projects/{project.slug.current}">{project.title}</a>
							</h2>
						</header>
						<p>{project.summary}</p>
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
