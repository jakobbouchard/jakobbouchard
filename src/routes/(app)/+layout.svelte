<script lang="ts">
	import '$lib/app.css';

	import { page } from '$app/stores';
	import PreviewBanner from '$lib/components/PreviewBanner.svelte';
	import Preloader from '$lib/components/Preloader.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

{#if $page.data.isPreview && !$page.data.isEmbedPreview}
	<PreviewBanner />
{/if}
{#if !$page.data.isEmbedPreview}
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
