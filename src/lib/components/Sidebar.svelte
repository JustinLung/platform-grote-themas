<aside>
	<h2>Zoeken</h2>
	<input type="search" placeholder="Zoek op werkvormen en thema's" />
	<div>
		<slot />
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

	@media (max-width: 55rem) {
		h2 {
			font-size: 1.5rem;
		}
	}
</style>
