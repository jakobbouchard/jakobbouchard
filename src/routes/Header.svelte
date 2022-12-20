<script>
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	let open = false;

	afterNavigate((navigate) => {
		if (open && navigate.type == 'link') {
			open = false;
		}
	});
</script>

<a class="sr-only skip-link" href="#content">Skip to content</a>

<header>
	<div class="container">
		<div class="branding">
			<svelte:element this={$page.url.pathname === '/' ? 'h1' : 'p'}>
				<a href="/" rel="home">Jakob<br />Bouchard</a>
			</svelte:element>
		</div>
		<nav aria-label="Main Menu" class:active={open}>
			<button on:click={() => (open = !open)} aria-expanded={open} aria-controls="main-menu">
				<span class="sr-only">Menu</span>
			</button>
			<div class="menu-background" />
			<ul id="main-menu">
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
	.skip-link:focus {
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
			position: relative;
			z-index: 1;
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

	:global(html.no-js) {
		& header .container {
			display: block;
		}

		& nav {
			& button {
				display: none;
			}

			& ul {
				display: block;
			}
		}
	}

	nav {
		& button {
			position: relative;
			z-index: 1;
			border: 0;
			padding: var(--space-1);
			width: var(--space-5);
			height: var(--space-5);
			background-color: unset;
			cursor: pointer;

			&::before,
			&::after {
				content: '';
				position: relative;
				display: block;
				border-top: 2px solid #000;
				width: 100%;
				transition: transform var(--speed-fast) ease, top var(--speed-fast) ease var(--speed-fast),
					bottom var(--speed-fast) ease var(--speed-fast);
			}

			&::before {
				top: -3px;
			}

			&::after {
				bottom: -3px;
			}
		}

		&.active button {
			&::before,
			&::after {
				transition: transform var(--speed-fast) ease var(--speed-fast), top var(--speed-fast) ease,
					bottom var(--speed-fast) ease;
			}

			&::before {
				top: 1px;
				transform: rotate(45deg);
			}

			&::after {
				bottom: 1px;
				transform: rotate(-45deg);
			}
		}

		& ul {
			position: fixed;
			inset: 0;
			display: flex;
			flex-direction: column;
			visibility: hidden;
			list-style: none;
			margin: var(--space-8) 0 0;
			padding: var(--space-2) var(--space-3);
			font-size: var(--text-4xl);
			text-align: right;
			transition: visibility 0s var(--speed-slower);

			& li {
				position: relative;
				right: calc(var(--space-3) * -1);
				opacity: 0;
				transition: opacity var(--speed-normal) ease, right var(--speed-slower) ease;

				&:nth-child(1) {
					transition-delay: 0.2s;
				}

				&:nth-child(2) {
					transition-delay: 0.1s;
				}

				&:nth-child(3) {
					transition-delay: 0;
				}

				& a {
					text-decoration: none;
					cursor: pointer;
				}
			}
		}

		&.active ul {
			visibility: visible;
			transition: visibility 0s;

			& li {
				right: 0;
				opacity: 1;
				transition: opacity var(--speed-slow) ease, right var(--speed-normal) ease;

				&:nth-child(1) {
					transition-delay: 0.15s;
				}

				&:nth-child(2) {
					transition-delay: 0.3s;
				}

				&:nth-child(3) {
					transition-delay: 0.45s;
				}
			}
		}

		& .menu-background {
			position: fixed;
			inset: 0;
			background-color: var(--color-gray-2);
			transform-origin: top;
			transform: scaleY(0);
			transition: transform var(--speed-slower) ease var(--speed-normal),
				visibility 0s var(--speed-slower);
		}

		&.active .menu-background {
			visibility: visible;
			transform: scaleY(1);
			transition: transform var(--speed-slower) ease;
		}
	}

	@media (--breakpoint-sm) {
		:global(html.no-js) {
			& header .container,
			& nav ul {
				display: flex;
			}
		}

		nav {
			& button {
				display: none;
			}

			& .menu-background {
				display: none;
			}

			& ul {
				position: relative;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				visibility: visible;
				align-items: center;
				gap: 0 clamp(1.09rem, 1rem + 0.47vw, 1.33rem);
				margin: 0;
				padding: var(--space-2) 0;
				background-color: unset;
				font-size: inherit;

				& li {
					right: 0;
					margin: 0.15rem 0.5rem;
					opacity: 1;

					& a {
						position: relative;
						z-index: 0;

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
							background-color: var(--color-gray-8);
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
		}
	}

	@media (--dark-mode) {
		header .branding h1,
		header .branding p {
			color: var(--color-gray-1);
		}

		nav ul li a::after {
			background-color: var(--color-gray-1);
		}
	}
</style>
