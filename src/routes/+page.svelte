<script lang="ts">
	import Collapsable from '$lib/components/Collapsable.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	// TODO: change title and links
	const focus = [
		{
			title: 'Lorem ipsum',
			link: '/'
		}
	];

	const doel = [
		{
			title: 'Lorem ipsum',
			link: '/'
		}
	];

	const onderwerpen = [
		{
			title: 'Duurzaamheid',
			link: '/'
		},
		{
			title: 'Diversiteit',
			link: '/'
		},
		{
			title: 'Digitalisering',
			link: '/'
		},
		{
			title: 'Democratie',
			link: '/'
		}
	];

	const fase = [
		{
			title: 'Lorem ipsum',
			link: '/'
		}
	];
</script>

<div>
	<Sidebar>
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
	</Sidebar>
</div>

<style>
	div {
		padding: 0 2rem;
	}

	a {
		color: var(--color-white);
		text-decoration: none;
	}
</style>
