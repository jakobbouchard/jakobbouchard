<script>
	import '../app.postcss';

	import { page } from '$app/stores';
	import Preloader from './Preloader.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	$: title = $page.data.title ?? 'Jakob Bouchard';
	$: desc = $page.data.title ? 'Jakob Bouchard' : 'Game dev dude';
</script>

<svelte:head>
	<title>{title} – {desc}</title>
</svelte:head>

<Preloader text="Jakob Bouchard" />
<div class="app">
	<Header />
	<main id="content" tabindex="-1">
		<slot />
	</main>
	<Footer />
</div>

<style lang="postcss">
	.app {
		display: flex;
		flex-direction: column;
	}

	/* Do not show the outline on the skip link target. */
	#content[tabindex='-1']:focus {
		outline: 0;
	}
</style>
