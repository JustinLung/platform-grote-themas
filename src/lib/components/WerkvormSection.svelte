<script>
	import Tag from './Tag.svelte';
	import Werkvorm from './Werkvorm.svelte';
</script>

<section>
	<h2>Werkvormen</h2>
	<div>
		<!-- TODO: Map over data -->
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
		<!-------------------------->
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
