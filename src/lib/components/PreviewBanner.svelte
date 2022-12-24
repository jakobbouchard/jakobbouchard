<script lang="ts">
	import { sanityUser } from '$lib/sanity';

	$: ({ data } = sanityUser());
</script>

<div class="preview-banner">
	<div class="preview-icon">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
			<circle cx="12" cy="12" r="3" />
		</svg>
	</div>
	<div class="container">
		<p>
			<span class="name">Hello {$data?.name ? $data.name : 'there'}!</span>
			<span>You are previewing a draft.</span>
		</p>

		<a rel="external" href="/api/exit-preview">Exit</a>
	</div>
</div>

<style>
	.preview-icon {
		z-index: 25;
		position: absolute;
		top: 0;
		left: 0;
		display: grid;
		place-items: center;
		width: var(--space-4);
		height: var(--space-4);
		transition: opacity var(--speed-fast) ease var(--speed-slower);
	}

	.preview-banner {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: var(--space-4);
		height: var(--space-4);
		background-color: var(--color-gray-3);
		font-size: var(--text-sm);
		z-index: 20;
		transition: width var(--speed-fast) ease var(--speed-slower);
	}

	.container {
		display: flex;
		align-items: center;
		gap: 0 var(--space-2);
		height: 100%;
		opacity: 0;
		transition: opacity var(--speed-fast) ease var(--speed-normal);
	}

	p {
		margin: 0;
	}

	p .name {
		display: none;
	}

	a {
		margin-left: auto;
	}

	a:hover {
		text-decoration: none;
	}

	.preview-banner:hover,
	.preview-banner:focus-within {
		width: 100%;
		transition: width var(--speed-fast) ease;
	}

	.preview-banner:hover .preview-icon,
	.preview-banner:focus-within .preview-icon {
		opacity: 0;
		transition: opacity var(--speed-fast) ease;
	}

	.preview-banner:hover .container,
	.preview-banner:focus-within .container {
		opacity: 1;
		transition: opacity var(--speed-fast) ease var(--speed-fast);
	}

	@media (min-width: 32rem) {
		p .name {
			display: inline;
			font-weight: 700;
		}
	}

	@media (prefers-color-scheme: dark) {
		.preview-banner {
			background-color: var(--color-gray-8);
			color: var(--color-gray-1);
		}
	}
</style>
