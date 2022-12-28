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
	}

	header > .container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}

	header .branding > * {
		position: relative;
		z-index: 10;
		margin: 0;
		font-family: var(--font-primary);
		font-size: var(--text-xl);
		font-weight: 700;
		line-height: var(--leading-tight);
		color: var(--color-gray-8);
	}

	header .branding > * a {
		text-decoration: none;
	}

	:global(html.no-js) header .container {
		display: block;
	}

	:global(html.no-js) nav button {
		display: none;
	}

	:global(html.no-js) nav ul {
		display: block;
	}

	nav button {
		position: relative;
		z-index: 10;
		border: 0;
		padding: var(--space-1);
		width: var(--space-5);
		height: var(--space-5);
		background-color: unset;
		cursor: pointer;
	}

	nav button::before,
	nav button::after {
		content: '';
		position: relative;
		display: block;
		border-top: 2px solid var(--color-black);
		width: 100%;
		transition: transform var(--speed-fast) ease, top var(--speed-fast) ease var(--speed-fast),
			bottom var(--speed-fast) ease var(--speed-fast);
	}

	nav button::before {
		top: -3px;
	}

	nav button::after {
		bottom: -3px;
	}

	nav.active button::before,
	nav.active button::after {
		transition: transform var(--speed-fast) ease var(--speed-fast), top var(--speed-fast) ease,
			bottom var(--speed-fast) ease;
	}

	nav.active button::before {
		top: 1px;
		transform: rotate(45deg);
	}

	nav.active button::after {
		bottom: 1px;
		transform: rotate(-45deg);
	}

	nav .menu-background {
		position: fixed;
		inset: 0;
		z-index: 5;
		background-color: var(--color-gray-2);
		transform-origin: top;
		transform: scaleY(0);
		transition: transform var(--speed-slower) ease var(--speed-normal),
			visibility 0s var(--speed-slower);
	}

	nav.active .menu-background {
		visibility: visible;
		transform: scaleY(1);
		transition: transform var(--speed-slower) ease;
	}
	nav ul {
		position: fixed;
		inset: 0;
		z-index: 10;
		display: flex;
		flex-direction: column;
		visibility: hidden;
		list-style: none;
		margin: var(--space-8) 0 0;
		padding: var(--space-2) var(--space-3);
		font-size: var(--text-4xl);
		text-align: right;
		transition: visibility 0s var(--speed-slower);
	}

	nav ul li {
		position: relative;
		right: calc(var(--space-3) * -1);
		opacity: 0;
		transition: opacity var(--speed-normal) ease, right var(--speed-slower) ease;
	}

	nav ul li:nth-of-type(1) {
		transition-delay: 0.2s;
	}

	nav ul li:nth-of-type(2) {
		transition-delay: 0.1s;
	}

	nav ul li:nth-of-type(3) {
		transition-delay: 0;
	}

	nav ul li a {
		text-decoration: none;
		cursor: pointer;
	}

	nav.active ul {
		visibility: visible;
		transition: visibility 0s;
	}

	nav.active ul li {
		right: 0;
		opacity: 1;
		transition: opacity var(--speed-slow) ease, right var(--speed-normal) ease;
	}

	nav.active ul li:nth-of-type(1) {
		transition-delay: 0.15s;
	}

	nav.active ul li:nth-of-type(2) {
		transition-delay: 0.3s;
	}

	nav.active ul li:nth-of-type(3) {
		transition-delay: 0.45s;
	}

	@media (min-width: 32rem) {
		:global(html.no-js) header .container,
		:global(html.no-js) nav ul {
			display: flex;
		}

		nav button {
			display: none;
		}

		nav .menu-background {
			display: none;
		}

		nav ul {
			position: relative;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			visibility: visible;
			align-items: center;
			gap: 0 var(--space-5);
			margin: 0;
			padding: var(--space-2) 0;
			background-color: unset;
			font-size: inherit;
		}

		nav ul li {
			right: 0;
			opacity: 1;
		}

		nav ul li a {
			position: relative;
			z-index: 0;
		}

		nav ul li a::after {
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

		nav ul li:hover a::after,
		nav ul li.active a::after {
			transform: scaleX(1);
		}
	}

	@media (prefers-color-scheme: dark) {
		header .branding h1,
		header .branding p {
			color: var(--color-gray-1);
		}

		nav button::before,
		nav button::after {
			border-top-color: var(--color-gray-1);
		}

		nav .menu-background {
			background-color: var(--color-gray-9);
		}

		nav ul li a::after {
			background-color: var(--color-gray-1);
		}
	}
</style>
