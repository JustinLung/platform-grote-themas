<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	import Video from '$lib/components/Video.svelte';
	import PaperclipIcon from '$lib/icons/paperclip.svg?component';
		'hier komt een korste omschrijving over de werkvorm of het thema. Er kan van alles staan maar voor nu staat hier een random tekst die eigenlijk nergens over staat maar er puur voor dient om content op te vullen. Zo lijkt het toch nog wat en is het design mooier om naar te loeren.';

	export let data;

	console.log(data);
</script>

<section>
	<div>
		<h3>Contactpersoon</h3>
		{#each data.contactpersonen as contactpersoon}
			<p>Naam: {contactpersoon.voornaam} {contactpersoon.achternaam}</p>
			<p>Email: <a href="mailto:{contactpersoon.email}">{contactpersoon.email}</a></p>
		{/each}
		<h3>Faculteit/opleiding</h3>
		<span>{data.opleiding?.faculteit?.titel} - {data.opleiding?.titel}</span>
		{#if data.materialen.length}
			<h3>Download materialen</h3>
			{#each data.materialen as materiaal, i}
				<a href={materiaal.url} class="material"><PaperclipIcon />Materiaal #{i}</a>
			{/each}
		{/if}
		<h3>Korte beschrijving</h3>
		<p>{data.beschrijving}</p>
		<div class="tags">
			{#each data.tags as tag}
				<Tag title={tag.split('_').join(' ')} color="var(--color-hva-light-blue)" link="/" />
			{/each}
		</div>
	</div>
	<Video src={data.video?.url} />
</section>

<style>
	section {
		padding: 2rem;
		display: flex;
		justify-content: space-between;
	}

	h3 {
		font-size: 1.5rem;
	}

	.material {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	p {
		max-width: 30rem;
	}

	.tags {
		display: flex;
		gap: 0.3rem;
	}

	@media (max-width: 55rem) {
		section {
			flex-direction: column;
			gap: 2rem;
		}
	}
</style>
