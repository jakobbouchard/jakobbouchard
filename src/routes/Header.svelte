<script>
	import { page } from '$app/stores';
</script>

<a class="sr-only" href="#content">Skip to content</a>

<header>
	<div class="container">
		<div class="branding">
			<svelte:element this={$page.url.pathname === '/' ? 'h1' : 'p'}>
				<a href="/" rel="home">Jakob<br />Bouchard</a>
			</svelte:element>
		</div>
		<nav>
			<ul>
				<li class:active={$page.url.pathname.startsWith('/projects')}>
					<a href="/projects">Projects</a>
				</li>
				<li class:active={$page.url.pathname.startsWith('/about')}>
					<a href="/about">About</a>
				</li>
				<li class:active={$page.url.pathname.startsWith('/contact')}>
					<a href="/contact">Contact</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style lang="postcss">
	.sr-only:focus {
		clip: auto !important;
		clip-path: none;
		display: block;
		top: var(--space-1);
		left: var(--space-1);
		outline: 0;
		border: var(--color-gray-9) solid 2px;
		border-radius: var(--rounded);
		padding: var(--space-2) var(--space-3) var(--space-2);
		width: auto;
		height: auto;
		background-color: var(--color-gray-2);
		color: var(--color-gray-9);
		font-size: var(--text-sm);
		font-weight: 700;
		text-decoration: none;
		z-index: 100000;
	}

	header {
		padding: var(--space-2) 0;

		& > .container {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
		}

		& .branding > * {
			margin: 0;
			font-family: var(--font-primary);
			font-size: var(--text-xl);
			font-weight: 700;
			line-height: var(--leading-tight);
			color: var(--color-gray-8);

			& a {
				text-decoration: none;
			}
		}
	}

	nav ul {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0 clamp(1.09rem, 1rem + 0.47vw, 1.33rem);
		margin: 0;
		padding: var(--space-2) 0;
		list-style: none;

		& li {
			margin: 0.15rem 0.5rem;

			& a {
				position: relative;
				z-index: 0;
				text-decoration: none;
				cursor: pointer;

				&::after {
					content: '';
					display: block;
					position: absolute;
					bottom: 0;
					left: calc(var(--space-1) * -1);
					z-index: -1;
					opacity: 20%;
					width: calc(100% + var(--space-2));
					height: 35%;
					background-color: var(--color-gray-1);
					transform: scaleX(0);
					transition: transform var(--speed-normal) ease;
				}
			}

			&:hover a::after,
			&.active a::after {
				transform: scaleX(1);
			}
		}
	}

	@media (--dark-mode) {
		header .branding h1,
		header .branding p {
			color: var(--color-gray-1);
		}
	}
</style>
