<script lang="ts">
	export let navTitle: string = '';
	import { page } from '$app/stores'
	
	const werkvormTitle = $page.url.pathname.replace('/','')
</script>

<header>
	<div>
		<img src="/assets/images/logo.svg" alt="Hogeschool van Amsterdam" />
		<div>Hva / Informatie / Werkvormen & thema's {navTitle}</div>
		<h1>{$page.url.pathname === '/' ? "Werkvormen & Thema's" : werkvormTitle}</h1>
		<p>
			Hier vind je alle werkvormen en thema’s die je kunt bekijken en materiaal van kan downloaden.
		</p>
	</div>
	<img src="/assets/images/hva-triangle.svg" alt="" class="graphic" />
</header>

<style>
	header > div {
		padding: 2rem 2rem 0;
	}
	img:first-child {
		max-width: 10rem;
	}

	div {
		padding: 2rem;
	}

	div {
		padding: 1rem 0;
	}

	h1 {
		font-size: 4rem;
		max-width: 45rem;
		line-height: 1.3em;
		padding: 0;
		margin: 0;
	}

	p {
		max-width: 30rem;
	}

	.graphic {
		position: absolute;
		top: 0rem;
		z-index: -1;
		max-width: 70%;
	}

	@media (max-width: 55rem) {
		h1 {
			font-size: 2rem;
		}
	}
</style>
