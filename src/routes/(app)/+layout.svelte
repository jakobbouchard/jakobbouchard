<script lang="ts">
	import '$lib/app.css';

	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	import PreviewBanner from '$lib/components/PreviewBanner.svelte';
	import Preloader from './Preloader.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	export let data: LayoutData;

	$: title = $page.data.title ?? 'Jakob Bouchard';
	$: desc = $page.data.title ? 'Jakob Bouchard' : 'Game dev dude';
	$: ({ isPreview, isEmbedPreview } = data);
</script>

<svelte:head>
	<title>{title} – {desc}</title>
</svelte:head>

{#if isPreview && !isEmbedPreview}
	<PreviewBanner />
{/if}
{#if !isEmbedPreview}
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
