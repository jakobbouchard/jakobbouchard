<script>
	import { page } from '$app/stores';

	const title = $page.error?.message || 'An error occured';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="container">
	<header>
		<h1>{title}</h1>
	</header>
	<p>
		<a href="/">Back to homepage</a>
	</p>
</div>
