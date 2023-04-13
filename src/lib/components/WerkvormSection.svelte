<script lang="ts">
	import type { WerkvormFragment } from '$lib/graphql/generated/sdk';
	import Tag from './Tag.svelte';
	import Werkvorm from './Werkvorm.svelte';

	export let werkvormen: WerkvormFragment[];
</script>

<section>
	<h2>Werkvormen</h2>
	<div>
		{#if !werkvormen.length}
			<p>Er zijn nog geen bestaande werkvormen</p>
		{:else}
			{#each werkvormen as werkvorm}
				<Werkvorm
					title={werkvorm.title}
					description={werkvorm.beschrijving}
					link="/"
					image={werkvorm.thumbnail.url}
				>
					<Tag title="Ik" color="var(--color-hva-light-blue)" link="/" />
					<Tag title="Persoonlijke Intresses" color="var(--color-hva-red)" link="/" />
					<Tag title="Duurzaamheid" color="var(--color-hva-teal)" link="/" />
				</Werkvorm>
			{/each}
		{/if}
	</div>
</section>

<style>
	h2 {
		font-size: 2rem;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media (max-width: 55rem) {
		section {
			padding-bottom: 2rem;
		}
	}
</style>
