<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article class="container">
	<header>
		<h1>{data.title}</h1>
		<p class="entry-meta">
			Posted on
			<time class="posted-on" datetime={data._createdAt}>
				{new Date(data._createdAt).toLocaleDateString('en-CA', { dateStyle: 'long' })}
			</time>
		</p>
	</header>
	<PortableText value={data.content} />
	<footer>
		<!-- <span class="cat-links">Posted in <a href="/category/meta" rel="category tag">Meta</a></span> -->
	</footer>
</article>

<style>
	header {
		margin-bottom: var(--space-4);
	}

	header h1 {
		margin-bottom: var(--space-2);
	}

	header .entry-meta {
		margin-top: var(--space-2);
	}

	footer {
		display: flex;
		flex-direction: column;
		padding-top: var(--space-2);
	}
</style>
