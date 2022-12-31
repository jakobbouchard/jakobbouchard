<script lang="ts">
	import "./styles.css";

	import { page } from "$app/stores";
	import PageTransition from "./PageTransition.svelte";
	import Preloader from "./Preloader.svelte";
	import Header from "./Header.svelte";
	import Footer from "./Footer.svelte";
	import type { LayoutData } from "./$types";

	export let data: LayoutData;
</script>

{#if data.isPreview && !data.isEmbedPreview}
	{#await import("./PreviewBanner.svelte") then { default: PreviewBanner }}
		<PreviewBanner />
	{/await}
{/if}
{#if !data.isEmbedPreview}
	<Preloader text="Jakob Bouchard" />
{/if}
<div class="app">
	<Header />
	<main id="content" tabindex="-1">
		<PageTransition pathname={$page.url.pathname}>
			<slot />
		</PageTransition>
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
	}

	/* Do not show the outline on the skip link target. */
	#content[tabindex="-1"]:focus {
		outline: 0;
	}
</style>
