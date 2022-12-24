<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	/**
	 * Only show the preview banner on the following route id's.
	 */
	const previewRouteIds = ['/(app)/projects/[slug]'];
	import PreviewBanner from '$lib/components/PreviewBanner.svelte';
	import { PreviewType } from '$lib/types';

	$: ({ isPreview, previewType } = data);
	$: showPreviewBanner =
		isPreview &&
		previewType == PreviewType.Regular &&
		previewRouteIds.includes($page.route.id || '');
</script>

{#if showPreviewBanner}
	<PreviewBanner />
{/if}

<slot />
