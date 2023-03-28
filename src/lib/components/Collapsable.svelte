<script lang="ts">
	let content: HTMLElement;
	let collapsed = true;

	export let title: string;

	function toggleCollapsable() {
		collapsed = !collapsed;
	}
</script>

<button on:click={toggleCollapsable}>{title}</button>
<div class="content {!collapsed && 'open'}" style="--mh: {content?.clientHeight}px">
	<nav bind:this={content}>
		<slot />
	</nav>
</div>

<style>
	.content.open {
		max-height: var(--mh);
	}

	.content {
		max-height: 0vh;
		overflow: hidden;
		transition: max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1);
		position: relative;
	}

	button {
		cursor: pointer;
		display: flex;
		color: var(--white);
		border: none;
		padding: 0;
		margin: 0;
		font-weight: bold;
		width: 100%;
		background-color: var(--color-navy-blue);
		padding: 1.5rem;
		font-size: 1rem;
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background-color: var(--color-navy-blue);
		padding: 0 1.5rem 1.5rem;
	}
</style>
