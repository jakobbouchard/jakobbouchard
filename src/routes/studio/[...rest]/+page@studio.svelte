<script lang="ts">
	import { onMount } from 'svelte';
	import { renderStudio } from 'sanity';
	import config from '$lib/sanity/config/studio';

	let studio: HTMLElement;

	onMount(() => {
		renderStudio(studio, config);
	});
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
	<meta name="referrer" content="same-origin" />
</svelte:head>

<main bind:this={studio} id="sanity-studio" />

<style>
	:global(body) {
		margin: 0;
	}

	#sanity-studio {
		height: 100vh;
	}
</style>
