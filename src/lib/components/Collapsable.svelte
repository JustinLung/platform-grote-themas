<script lang="ts">
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	let collapsable = false;

	export let title: string;

	function toggleCollapsable() {
		collapsable = !collapsable;
	}
</script>

<div style={collapsable ? `margin-bottom: 0` : `margin-bottom: 1rem`}>
	<button on:click={toggleCollapsable}>{title}</button>
</div>
{#if collapsable}
	<nav
		in:fly={{
			y: -20
		}}
		out:fly={{
			y: -20
		}}
	>
		<slot />
	</nav>
{/if}

<style>
	div {
		background-color: var(--color-navy-blue);
		padding: 1.5rem;
		cursor: pointer;
	}

	button {
		cursor: pointer;
		all: unset;
		padding: 0;
		margin: 0;
		font-weight: bold;
		width: 100%;
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background-color: var(--color-navy-blue);
		padding: 0 1.5rem 1.5rem;
		margin-bottom: 1rem;
	}
</style>
