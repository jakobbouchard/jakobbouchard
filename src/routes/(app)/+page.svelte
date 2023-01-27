<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.siteTitle} – {data.siteDescription}</title>
</svelte:head>

<div class="container" />
