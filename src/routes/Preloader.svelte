<script lang="ts">
	export let text: string;
</script>

<div class="preloader">
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
		inset: 0;
		display: none;
		padding: 10%;
		color: var(--color-gray-2);
		z-index: 10000;
	}

	:global(.js) .preloader {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.preloader-background {
		position: absolute;
		inset: 0;
		background-color: var(--color-black);
		transform-origin: center right;
		transform: scaleX(1);
		transition: transform var(--speed-slower) cubic-bezier(0.55, 0.06, 0.68, 0.19);
	}

	.preloader-inner {
		position: relative;
		display: grid;
		place-content: center;
		padding: var(--space-4);
		width: 90%;
		height: 50%;
		opacity: 1;
		transition: opacity var(--speed-slower);

		&::before,
		&::after {
			content: '';
			position: absolute;
			width: 0;
			height: 0;
			border-width: 0;
			border-style: solid;
			transition: width var(--speed-normal) ease,
				height var(--speed-normal) ease var(--speed-normal);
		}

		&::before {
			top: 0;
			left: 0;
			border-top-width: 3px;
			border-right-width: 3px;
		}

		&::after {
			bottom: 0;
			right: 0;
			border-left-width: 3px;
			border-bottom-width: 3px;
		}
	}

	.preloader-text-part {
		position: relative;
		bottom: calc(var(--space-1) * -1);
		opacity: 0;
		font-size: var(--text-2xl);
		transition: opacity var(--speed-normal) ease, bottom var(--speed-normal) ease;
		transition-delay: var(--animation-delay);
	}

	:global(.dom-loading) {
		& .preloader-inner::before,
		& .preloader-inner::after {
			width: 100%;
			height: 100%;
		}

		& .preloader-text-part {
			bottom: 0;
			opacity: 1;
		}
	}

	:global(.dom-loaded) {
		& .preloader {
			visibility: hidden;
			transition: visibility 0s var(--speed-slower);
		}

		& .preloader-background {
			transform-origin: center left;
			transform: scaleX(0);
		}

		& .preloader-inner {
			opacity: 0;

			&::before,
			&::after {
				transition-delay: var(--speed-slower);
			}
		}

		& .preloader-text-part {
			transition-delay: var(--speed-slower);
		}
	}
</style>
