<script lang="ts">
	import ArrowIcon from '$lib/icons/arrow.svg?component';
	export let title: string;
	export let description: string;
	export let image: string = '/assets/images/placeholder.png';
	export let link: string;
</script>

<article>
	<figure>
		<img src={image} alt={title} />
	</figure>
	<section>
		<h3>{title}</h3>
		<p>{description}</p>
		<a href={link} class="werkvorm-link"><ArrowIcon />Bekijk werkvorm</a>
		<a href={link} class="werkvorm-link"><ArrowIcon />Bekijk Introvideo</a>
		<div>
			<slot />
		</div>
	</section>
</article>

<style>
	article {
		display: flex;
		gap: 2rem;
		max-width: 45rem;
	}

	figure {
		padding: 0;
		margin: 0;
		height: 20rem;
		width: 17rem;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	h3 {
		font-size: 2rem;
		padding: 1.5rem 0;
		margin: 0;
	}

	p {
		color: var(--color-hva-red);
		font-size: 1rem;
		padding: 0 0 1.5rem;
		margin: 0;
		font-weight: 700;
	}

	.werkvorm-link {
		display: flex;
		align-items: center;
		gap: 1rem;
		font-weight: 700;
		text-decoration: underline;
	}

	:global(svg) {
		transition: 0.3s ease-in-out;
	}

	.werkvorm-link:hover :global(svg) {
		transform: translateX(0.5rem);
	}

	section > div {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 2rem;
		gap: 0.5rem;
	}

	@media (max-width: 55rem) {
		article {
			flex-direction: column;
		}

		article > section {
			padding: 0 1rem;
		}

		figure {
			width: 100%;
		}
	}
</style>
