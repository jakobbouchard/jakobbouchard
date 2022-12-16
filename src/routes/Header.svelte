<script>
	import { page } from '$app/stores';
</script>

<a class="skip-link" href="#content">Skip to content</a>

<header>
	<div class="container">
		<div class="branding">
			{#if $page.url.pathname === '/'}
				<h1><a href="/" rel="home">Jakob Bouchard</a></h1>
			{:else}
				<p><a href="/" rel="home">Jakob Bouchard</a></p>
			{/if}
		</div>
		<nav>
			<ul>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/contact">Contact</a>
				</li>
				<li>
					<a href="/blog">Blog</a>
				</li>
				<li>
					<a href="/now">Now</a>
				</li>
				<li>
					<a href="/uses">Uses</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style lang="postcss">
	.skip-link {
		border: 0;
		clip: rect(1px, 1px, 1px, 1px);
		clip-path: inset(50%);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute !important;
		width: 1px;
		word-wrap: normal !important;

		&:focus {
			background-color: #f1f1f1;
			border-radius: 3px;
			box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
			clip: auto !important;
			clip-path: none;
			color: #21759b;
			display: block;
			font-size: 0.875rem;
			font-weight: 700;
			height: auto;
			left: 5px;
			line-height: normal;
			padding: 15px 23px 14px;
			text-decoration: none;
			top: 5px;
			width: auto;
			z-index: 100000;
		}
	}

	header {
		padding: 1rem 0;

		& > .container {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
		}

		& h1,
		& p {
			--fluid-type-min: 1rem;
			--fluid-type-target: 1vw;
			--fluid-type-max: 1.5rem;

			margin: 0;
			font-family: Georgia, serif;
			font-weight: 900;
			line-height: 1.3;
			color: var(--primary-800);
		}
	}

	nav ul {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0 clamp(1.09rem, 1rem + 0.47vw, 1.33rem);
		margin: 0;
		padding: var(--size-400) 0;
		list-style: none;

		& li {
			--fluid-type-min: 0.25rem;
			--fluid-type-target: 0.1vw;
			--fluid-type-max: 1.5rem;

			margin: 0.15rem 0.5rem;
		}
	}
</style>
