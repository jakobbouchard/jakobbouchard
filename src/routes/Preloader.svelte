<script lang="ts">
	export let text: string;

	let preloader: HTMLDivElement;
</script>

<div bind:this={preloader} class="preloader">
	<div class="preloader-background" />
	<div class="preloader-inner">
		<span class="preloader-text">
			{#each text.split(' ') as part, index}
				<span class="preloader-text-part" style="--animation-delay: {0.15 * (index + 1)}s">
					{part}
				</span>
			{/each}
		</span>
	</div>
</div>

<style lang="postcss">
	.preloader {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		display: none;
		height: 100vh;
		height: calc(100vh - env(safe-area-inset-bottom));
		padding: 10%;
		color: #fff;
	}

	.preloader-background {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: #000;
		transform: scaleX(1);
	}

	:global(.js) .preloader {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	:global(.dom-loaded) .preloader {
		visibility: hidden;
		transition: visibility 0s 0.5s;
	}

	:global(.dom-loaded) .preloader-background {
		transform-origin: center left;
		transform: scaleX(0);
		transition: transform 0.5s cubic-bezier(0.55, 0.06, 0.68, 0.19);
	}

	.preloader-inner {
		opacity: 1;
	}

	:global(.dom-loaded) .preloader-inner {
		opacity: 0;
		transition: opacity 0.5s;
	}

	.preloader-inner {
		--border-width: 3px;
		position: relative;
		display: grid;
		place-content: center;
		padding: 2em;
		width: 90%;
		height: 50%;
	}

	.preloader-inner::before,
	.preloader-inner::after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border-width: 0;
		border-style: solid;
		border-color: transparent;
		transition: border-color 0.2s ease, width 0.35s ease, height 0.35s ease 0.35s;
	}

	.preloader-inner::before {
		top: 0;
		left: 0;
		border-top-width: var(--border-width);
		border-right-width: var(--border-width);
	}

	.preloader-inner::after {
		bottom: 0;
		right: 0;
		border-left-width: var(--border-width);
		border-bottom-width: var(--border-width);
	}

	:global(.dom-loading) .preloader-inner::before,
	:global(.dom-loading) .preloader-inner::after {
		width: 100%;
		height: 100%;
		border-color: #fff;
	}

	:global(.dom-loaded) .preloader-inner::before,
	:global(.dom-loaded) .preloader-inner::after {
		transition-delay: 0.5s;
	}

	.preloader-text-part {
		position: relative;
		bottom: -0.25em;
		opacity: 0;
		font-size: 1.5rem;
		transition: opacity 0.35s ease, bottom 0.35s ease;
		transition-delay: var(--animation-delay);
	}

	:global(.dom-loading) .preloader-text-part {
		bottom: 0;
		opacity: 1;
	}

	:global(.dom-loaded) .preloader-text-part {
		transition-delay: 0.5s;
	}
</style>
