<script lang="ts">
	import Collapsable from './Collapsable.svelte';
	import SearchIcon from '$lib/icons/search.svg?component';
	import { onderwerpen, focus, doel, fase } from '$lib/data/categories';
	import { searchterm, tag } from '../state/filter';
	import { page } from '$app/stores';
	import CrossIcon from '$lib/icons/cross.svg?component';
	import { goto } from '$app/navigation';

	function handleSearch(e: KeyboardEvent) {
		const value = (e.target as HTMLInputElement).value;
		searchterm.set(value);
	}
</script>

<aside>
	<h2>Zoeken</h2>
	<div class="input-container">
		<SearchIcon class="search-icon" />
		<input on:keyup={handleSearch} type="search" placeholder="Zoek op werkvormen en thema's" />
	</div>
	{#if $tag}
		<button
			on:click={() => {
				goto('/');
				tag.set('');
			}}>{$tag} <CrossIcon /></button
		>
	{/if}
	<div>
		<Collapsable title="Onderwerp">
			{#each onderwerpen as onderwerp}
				<a href={onderwerp.link}>{onderwerp.title}</a>
			{/each}
		</Collapsable>
		<Collapsable title="Focus / Intentie">
			{#each focus as focus}
				<a href={focus.link}>{focus.title}</a>
			{/each}
		</Collapsable>
		<Collapsable title="Doel">
			{#each doel as doel}
				<a href={doel.link}>{doel.title}</a>
			{/each}
		</Collapsable>
		<Collapsable title="Fase">
			{#each fase as fase}
				<a href={fase.link}>{fase.title}</a>
			{/each}
		</Collapsable>
	</div>
</aside>

<style>
	h2 {
		font-size: 2rem;
	}

	input {
		all: unset;
		background-color: var(--color-white);
		color: var(--color-navy-blue);
		width: 100%;
		height: 100%;
		padding: 0;
	}

	.input-container {
		background-color: var(--color-white);
		color: var(--color-navy-blue);
		padding: 0.5rem 1rem;
		margin-bottom: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	a {
		color: var(--color-white);
		text-decoration: none;
	}

	button {
		all: unset;
		font-weight: 700;
		padding: 0.75rem 1rem;
		transition: 100ms background-color ease-out;
		background-color: var(--color-hva-red);
		color: var(--color-white);
		margin-bottom: 1rem;
		cursor: pointer;
		border: 2px solid var(--color-hva-red);

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: .5rem;
	}

	button:hover {
		background-color: transparent;
		color: var(--color-hva-red);
		border: 2px solid var(--color-hva-red);
	}

	@media (max-width: 55rem) {
		h2 {
			font-size: 1.5rem;
		}
	}
</style>
