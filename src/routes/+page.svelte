<script lang="ts">
	import Collapsable from '$lib/components/Collapsable.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import WerkvormSection from '$lib/components/WerkvormSection.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import Werkvorm from '$lib/components/Werkvorm.svelte';

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

<section>
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
	<div>
		<WerkvormSection>
			<Werkvorm
				title="Naam van werkvorm"
				description="1 regel bescrhijving werkvorm"
				link="/"
				image="/assets/images/placeholder.png"
			>
				<Tag title="Ik" color="var(--color-hva-light-blue)" link="/" />
				<Tag title="Persoonlijke Intresses" color="var(--color-hva-red)" link="/" />
				<Tag title="Duurzaamheid" color="var(--color-hva-teal)" link="/" />
			</Werkvorm>
		</WerkvormSection>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 1.5rem;
		width: 100%;
		gap: 2rem;
	}
	div {
		width: 100%;
	}
	div:nth-child(2) {
		flex: 1;
	}

	div:first-child {
		flex: 0.5;
	}
	a {
		color: var(--color-white);
		text-decoration: none;
	}

	@media (max-width: 55rem) {
		section {
			flex-direction: column;
		}
	}
</style>
