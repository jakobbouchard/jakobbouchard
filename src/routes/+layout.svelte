<script>
	import './app.css';

	import Preloader from './Preloader.svelte';
</script>

<Preloader text="Jakob Bouchard" />
<div class="app">
	<slot />
</div>
