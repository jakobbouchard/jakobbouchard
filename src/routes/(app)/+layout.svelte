<script lang="ts">
	import '$lib/app.css';

	import PreviewBanner from '$lib/components/PreviewBanner.svelte';
	import Preloader from '$lib/components/Preloader.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

{#if data.isPreview && !data.isEmbedPreview}
	<PreviewBanner />
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
