<script>
	import '../app.postcss';

	import Preloader from './Preloader.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<Preloader text="Jakob Bouchard" />
<div class="app">
	<Header />
	<div id="content" tabindex="-1">
		<slot />
	</div>
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
