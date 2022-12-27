<div class="preview-banner">
	<div class="icon">
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
		<p>Preview mode is enabled.</p>
		<a rel="external" href="/api/exit-preview">Exit</a>
	</div>
</div>

<style>
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

	.icon {
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

	.container {
		display: flex;
		align-items: center;
		gap: 0 var(--space-2);
		visibility: hidden;
		height: 100%;
		opacity: 0;
		transition: opacity var(--speed-fast) ease var(--speed-normal),
			visibility 0s var(--speed-slower);
	}

	p {
		margin: 0;
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

	.preview-banner:hover .icon,
	.preview-banner:focus-within .icon {
		opacity: 0;
		transition: opacity var(--speed-fast) ease;
	}

	.preview-banner:hover .container,
	.preview-banner:focus-within .container {
		visibility: visible;
		opacity: 1;
		transition: opacity var(--speed-fast) ease var(--speed-fast);
	}

	@media (prefers-color-scheme: dark) {
		.preview-banner {
			background-color: var(--color-gray-8);
			color: var(--color-gray-1);
		}
	}
</style>
