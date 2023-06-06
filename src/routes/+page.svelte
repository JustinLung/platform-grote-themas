<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import WerkvormSection from '$lib/components/WerkvormSection.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import { page } from '$app/stores';
	import { tag } from '$lib/state/filter';

	export let data;

	page.subscribe(({ url }) => {
		const filter = url.searchParams.get('tag') ?? '';
		tag.set(filter);
	});
</script>

<section>
	<div class="sidebar-container">
		<Sidebar />
	</div>
	<div>
		<WerkvormSection werkvormen={data.werkvormen.werkvormen} />
	</div>
</section>

<BackToTop />

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: flex-start;
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

	@media (max-width: 55rem) {
		section {
			flex-direction: column;
		}
	}
</style>
