<script lang="ts">
	import '$lib/app.css';

	import { page } from '$app/stores';
	import Preloader from './Preloader.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { PreviewType } from '$lib/types';

	$: title = $page.data.title ?? 'Jakob Bouchard';
	$: desc = $page.data.title ? 'Jakob Bouchard' : 'Game dev dude';
	$: showPreloader = $page.data.previewType !== PreviewType.Embed;
</script>

<svelte:head>
	<title>{title} – {desc}</title>
</svelte:head>

{#if showPreloader}
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
