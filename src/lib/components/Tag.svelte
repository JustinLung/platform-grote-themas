<script lang="ts">
	import type { TagFragment } from '$lib/graphql/generated/sdk';
	import { tags } from '$lib/state/filter';

	export let tag: TagFragment;

	function onClick() {
		// Add to tags
		tags.update((_tags) => {
			if (_tags.map((t) => t.waarde).includes(tag.waarde)) return _tags;
			return [..._tags, tag];
		});
	}
</script>

<button
	on:click={onClick}
	style={`border-color: ${tag?.kleur?.hex}; --hover-color: ${tag?.kleur?.hex}`}
	><span>{tag?.titel}</span></button
>

<style>
	button {
		border: 2px solid;
		font-weight: 700;
		padding: 0.25rem 1rem;
		transition: 100ms background-color ease-out;
		background: transparent;
		color: white;
	}

	:hover {
		background-color: var(--hover-color);
	}
</style>
