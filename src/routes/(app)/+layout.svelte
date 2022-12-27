<script lang="ts">
	import '$lib/app.css';

	import { dev } from '$app/environment';
	import Preloader from '$lib/components/Preloader.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	{#if !dev}
		<script
			async
			defer
			src="https://umami.jakobbouchard.dev/sherlock.js"
			data-website-id="e6d09bc6-f1fb-4d06-ac14-cd10147e8a41"
			data-domains="jakobbouchard.dev"
			data-do-not-track="true"
		></script>
	{/if}
</svelte:head>

{#if data.isPreview && !data.isEmbedPreview}
	{#await import('$lib/components/PreviewBanner.svelte') then { default: PreviewBanner }}
		<PreviewBanner />
	{/await}
{/if}
{#if !data.isEmbedPreview}
	<Preloader text="Jakob Bouchard" />
{/if}
<div class="app">
	<Header />
	<main id="content" tabindex="-1">
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
	}

	/* Do not show the outline on the skip link target. */
	#content[tabindex='-1']:focus {
		outline: 0;
	}
</style>
