<script lang="ts">
	import Collapsable from './Collapsable.svelte';
	import { onderwerpen, focus, doel, fase } from '$lib/data/categories';
	import { searchterm } from '../../state/filter';

	function handleSearch(e: KeyboardEvent) {
		const value = (e.target as HTMLInputElement).value;
		searchterm.set(value);
	}
</script>

<aside>
	<h2>Zoeken</h2>
	<input on:keyup={handleSearch} type="search" placeholder="Zoek op werkvormen en thema's" />
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
		padding: 0.5rem 0;
		width: 100%;
		margin-bottom: 1rem;
	}

	a {
		color: var(--color-white);
		text-decoration: none;
	}

	@media (max-width: 55rem) {
		h2 {
			font-size: 1.5rem;
		}
	}
</style>
