<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Privacy – {$page.data.siteTitle}</title>
</svelte:head>

<div class="container">
	<header>
		<h1>Privacy</h1>
	</header>
	<p>
		As someone who values my own privacy, I think it’s important for my website to reflect that. As
		such, I’m trying to make this website as privacy-respecting as I can. As someone who lives
		outside the EU, I don’t <em>need</em> to respect the GDPR, but I try to as much as possible.
	</p>
	<h2>📊 Analytics</h2>
	<p>
		I use an open-source, privacy-respecting, analytics tool called umami to monitor my site’s
		visits. It doesn’t use trackers or cookies, so it’s not able to personally identify visitors,
		unlike Google Analytics. Plus, I can self-host it, which I like. My umami instance is hosted on
		Vercel.
	</p>
	<p>
		You can see <a
			href="https://umami.jakobbouchard.dev/share/wLP1SE57/jakobbouchard.dev"
			data-type="URL"
			target="_blank"
			rel="noreferrer noopener">this website’s stats here</a
		> — it’s literally my dashboard. I can see what pages are popular and where visitors come from. I
		don’t need anything more. Google Analytics has wayyy too much stuff for me.
	</p>
	<p>
		If you want to know more about umami, <a
			href="https://umami.is/"
			target="_blank"
			rel="noreferrer noopener">here is their website</a
		>, and
		<a href="https://github.com/mikecao/umami" target="_blank" rel="noreferrer noopener"
			>here is their repo</a
		>.
	</p>
	<h2>🍪 Cookies</h2>
	<p>
		While I think cookies taste amazing — especially PC’s The Decadent cookies — I don’t want them
		on my website, at least not for tracking purposes.
	</p>
	<p>
		Now, if you can, go buy yourself a box of The Decadent cookies, I swear you won’t regret it.
	</p>
</div>
