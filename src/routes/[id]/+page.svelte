<script lang="ts">
	import AspectRatio from '$lib/components/AspectRatio.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import Video from '$lib/components/Video.svelte';
	import PaperclipIcon from '$lib/icons/paperclip.svg?component';

	export let data;

	async function getFiles(): Promise<Blob[]> {
		const downloadLinks = data.materialen.map((m) => fetch(m.url));
		const fullFilled = await Promise.all(downloadLinks);
		return new Promise((resolve) => {
			const blobs = fullFilled.map(async (link) => {
				const blob = link.blob();
				return blob;
			});
			const urls = Promise.all(blobs);
			resolve(urls);
		});
	}
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

			{#await getFiles()}
				<p>Materiaal laden...</p>
			{:then urls}
				{#each urls as url, i}
					<a download="materiaal-#{i}" href={window.URL.createObjectURL(url)} class="material"
						><PaperclipIcon />Materiaal #{i}</a
					>
				{/each}
			{/await}
		{/if}
		<h3>Korte beschrijving</h3>
		<p>{data.beschrijving}</p>
		<div class="tags">
			{#each data.tags as tag}
				<Tag title={tag.titel} link="/?tag={tag.waarde}" color={tag.kleur?.hex} />
			{/each}
		</div>
	</div>
	<div class="video">
		<AspectRatio ratio={16 / 9}>
			<Video src={data.video?.url} />
		</AspectRatio>
	</div>
</section>

<style>
	section {
		padding: 2rem;
		display: flex;
		justify-content: space-between;
	}

	.video {
		width: 60%;
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
		.video {
			width: 100%;
		}
	}
</style>
