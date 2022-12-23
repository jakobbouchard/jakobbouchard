<script lang="ts">
	import { renderStudio, type Config } from 'sanity';
	import { onMount } from 'svelte';

	export let config: Config;
	let studioEl: HTMLDivElement;

	onMount(() => {
		renderStudio(studioEl, config);
	});
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
	<meta name="robots" content="noindex" />
	<meta name="referrer" content="same-origin" />
</svelte:head>

<div id="svelte-studio">
	<div bind:this={studioEl} />
</div>

<style>
	:global(body) {
		margin: 0;
	}

	#svelte-studio {
		height: 100vh;
	}

	#svelte-studio > div {
		height: 100%;
	}
</style>
