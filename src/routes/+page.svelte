<script lang="ts">
	import Collapsable from '$lib/components/Collapsable.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import WerkvormSection from '$lib/components/WerkvormSection.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import Werkvorm from '$lib/components/Werkvorm.svelte';
	import { onderwerpen, focus, doel, fase } from '$lib/data/categories';
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

<style>
	div {
		padding: 0 2rem;
	}

	a {
		color: var(--color-white);
		text-decoration: none;
	}
</style>
