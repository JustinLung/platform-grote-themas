<section>
	<h2>Werkvormen</h2>
	<div>
		<slot />
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
