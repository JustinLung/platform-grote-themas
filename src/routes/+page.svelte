<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	import Werkvorm from '$lib/components/Werkvorm.svelte';
</script>

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
