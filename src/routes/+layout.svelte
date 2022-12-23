<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	/**
	 * Only show the preview banner on the following route id's.
	 */
	const previewRouteIds = ['/(app)/projects/[slug]'];
	import PreviewBanner from '$lib/components/PreviewBanner.svelte';

	$: ({ previewMode, previewModeEmbed: embedded } = data);
	$: showPreviewBanner = previewMode && previewRouteIds.includes($page.route.id || '');
</script>

{#if showPreviewBanner}
	<PreviewBanner {embedded} />
{/if}

<slot />
