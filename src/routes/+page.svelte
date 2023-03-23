<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	import Werkvorm from '$lib/components/Werkvorm.svelte';
</script>

<Werkvorm
	werkvormTitle="Naam van werkvorm"
	werkvormDescription="1 regel bescrhijving werkvorm"
	werkvormLink="/"
	werkvormImage="/assets/images/placeholder.png"
>
	<Tag tagTitle="Ik" tagColor="var(--color-hva-light-blue)" tagLink="/" />
	<Tag tagTitle="Persoonlijke Intresses" tagColor="var(--color-hva-red)" tagLink="/" />
	<Tag tagTitle="Duurzaamheid" tagColor="var(--color-hva-teal)" tagLink="/" />
</Werkvorm>
