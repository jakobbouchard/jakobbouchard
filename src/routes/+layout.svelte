<script>
	import '../app.postcss';

	import Preloader from './Preloader.svelte';
</script>

<Preloader text="Jakob Bouchard" />
<div class="app">
	<slot />
</div>
