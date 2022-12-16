<footer>
	<div class="container flow">
		<div class="info">
			<a href="/privacy">Privacy</a>
			|
			<a href="/feed">RSS Feed</a>
			|
			<a target="_blank" rel="noopener noreferrer" href="https://ko-fi.com/jakobbouchard">
				Ko-fi
			</a>
			|
			<a target="_blank" rel="me noopener noreferrer" href="https://fosstodon.org/@jakobbouchard">
				Mastodon
			</a>
		</div>
		<a class="kb-club" target="blank" rel="noopener noreferrer" href="https://512kb.club">
			<span>512KB Club</span>
			<span>Green Team</span>
		</a>
	</div>
</footer>

<style lang="postcss">
	footer .container {
		padding: var(--size-700) 0 var(--size-400);
		text-align: center;
	}

	.kb-club {
		--flow-space: var(--size-400);
		display: inline-flex;
		font-weight: 700;
		text-decoration: none;
		transition: background-color 0.25s ease;

		&:hover {
			background-color: #c8e6c9;
		}

		& :first-child,
		& :last-child {
			border: 2px solid #4caf50;
			padding: 0.25rem 0.5rem;
		}

		& :last-child {
			background-color: #4caf50;
		}
	}
</style>
