<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<svelte:head>
	<title>Talk with me – {data.siteTitle}</title>
</svelte:head>

<div class="container">
	<header>
		<h1>Talk with me</h1>
	</header>
</div>
