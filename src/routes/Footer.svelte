<footer>
	<div class="container">
		<div class="social">
			<a
				title="Ko-fi"
				href="https://ko-fi.com/jakobbouchard"
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M18 8h1a4 4 0 0 1 0 8h-1" />
					<path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
					<line x1="6" y1="1" x2="6" y2="4" />
					<line x1="10" y1="1" x2="10" y2="4" />
					<line x1="14" y1="1" x2="14" y2="4" />
				</svg>
				<span class="sr-only">Ko-fi</span>
			</a>
			<a title="Email" href="mailto:hey@jakobbouchard.dev">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<circle cx="12" cy="12" r="4" />
					<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
				</svg>
				<span class="sr-only">Email</span>
			</a>
			<a
				title="Mastodon"
				href="https://fosstodon.org/@jakobbouchard"
				target="_blank"
				rel="me noopener noreferrer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
				</svg>
				<span class="sr-only">Mastodon</span>
			</a>
			<a
				title="GitHub"
				href="https://github.com/jakobbouchard"
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
					/>
				</svg>
				<span class="sr-only">GitHub</span>
			</a>
		</div>
		<div class="copyright">Jakob Bouchard &copy; {new Date().getFullYear()}</div>
		<div class="links">
			<a href="/privacy">Privacy</a>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: var(--color-gray-2);
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		padding-top: var(--space-5);
		padding-bottom: var(--space-4);
		gap: var(--space-4) var(--space-8);
	}

	.social {
		display: flex;
		width: 100%;
		gap: 0 var(--space-2);
	}

	.social a {
		line-height: 1;
		transition: color var(--speed-normal) ease;
	}

	.social a:hover {
		color: var(--color-gray-7);
	}

	.links,
	.copyright {
		font-size: var(--text-sm);
	}

	.links {
		margin-left: auto;
	}

	.links a {
		position: relative;
		z-index: 0;
		text-decoration: none;
	}

	.links a::after {
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

	.links a:hover::after {
		transform: scaleX(1);
	}

	@media (prefers-color-scheme: dark) {
		.social a:hover {
			color: var(--color-gray-1);
		}

		.links a::after {
			background-color: var(--color-gray-1);
		}
	}
</style>
