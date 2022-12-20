<script lang="ts">
	export let text: string;

	function getDelay(index: number) {
		return 0.15 * (index + 1) + 's';
	}
</script>

<div class="preloader">
	<div class="preloader-background" />
	<div class="preloader-inner">
		<span class="preloader-text">
			{#each text.split(' ') as part, index}
				<span class="preloader-text-part" style:--animation-delay={getDelay(index)}>
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
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10%;
		color: var(--color-gray-2);
		z-index: 10000;
		cursor: wait;
	}

	:global(html.no-js) .preloader {
		display: none;
	}

	.preloader-background {
		position: absolute;
		inset: 0;
		background-color: var(--color-black);
	}

	.preloader-inner {
		position: relative;
		display: grid;
		place-content: center;
		padding: var(--space-4);
		width: 90%;
		height: 50%;

		&::before,
		&::after {
			content: '';
			position: absolute;
			width: 0;
			height: 0;
			border-width: 0;
			border-style: solid;
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
	}

	:global(html.dom-loading) {
		& .preloader-inner::before,
		& .preloader-inner::after {
			width: 100%;
			height: 100%;
			transition: width var(--speed-normal) ease,
				height var(--speed-normal) ease var(--speed-normal);
		}

		& .preloader-text-part {
			bottom: 0;
			opacity: 1;
			transition: opacity var(--speed-normal) ease, bottom var(--speed-normal) ease;
			transition-delay: var(--animation-delay);
		}
	}

	:global(html.dom-loaded) {
		& .preloader {
			visibility: hidden;
			transition: visibility 0s var(--speed-slower);
			cursor: unset;
		}

		& .preloader-background {
			transform-origin: center left;
			transform: scaleX(0);
			transition: transform var(--speed-slower) cubic-bezier(0.55, 0.06, 0.68, 0.19);
		}

		& .preloader-inner {
			opacity: 0;
			transition: opacity var(--speed-slower) ease;

			&::before,
			&::after {
				transition-delay: var(--speed-slower);
			}
		}

		& .preloader-text-part {
			transition-delay: var(--speed-slower);
		}
	}

	@media (--reduced-motion) {
		.preloader-text-part {
			bottom: 0;
		}

		.preloader-inner::before,
		.preloader-inner::after {
			width: 100%;
			height: 100%;
			opacity: 0;
		}

		:global(html.dom-loading) {
			& .preloader-inner::before,
			& .preloader-inner::after {
				opacity: 1;
				transition: opacity var(--speed-slow) ease;
			}

			& .preloader-text-part {
				opacity: 1;
			}
		}

		:global(html.dom-loaded) {
			& .preloader-background {
				transform: unset;
				opacity: 0;
				transition: opacity var(--speed-slower) cubic-bezier(0.55, 0.06, 0.68, 0.19);
			}
		}
	}
</style>
