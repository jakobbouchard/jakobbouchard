<main class="container">
	<div class="flow">
		<p>
			Hello 👋 I’m Jakob, a web developer from Canada. Welcome to my website! Here you’ll find my <a
				href="/blog">blog posts</a
			>. If you want to learn more about me (or my pets 🐱🐶), check out my
			<a href="/about">about page</a>. If you’re more interested by my setup and this website, I’ve
			setup a <a href="/uses">uses page</a> just for that. You can also check out
			<a href="/now">what I’m doing now</a>. Oh and there’s <a href="/privacy">no cookies</a> here.
		</p>

		<h2>My latest posts</h2>
		<ul class="latest-posts flow">
			<li>
				<a href="/blog/blogging-is-hard">Blogging is hard</a>
				<time datetime="2022-09-22T17:47:17-04:00">September 22, 2022</time>
			</li>
			<li>
				<a href="/blog/new-website">New website!</a>
				<time datetime="2021-10-02T19:45:00-04:00">October 2, 2021</time>
			</li>
		</ul>
	</div>
</main>

<style lang="postcss">
	main {
		margin-top: var(--size-700);
	}

	.latest-posts {
		padding: 0;
		list-style: none;

		& li time {
			display: block;
			font-size: 0.75em;
		}
	}
</style>
