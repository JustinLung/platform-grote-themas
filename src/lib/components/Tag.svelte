<script lang="ts">
	export let tagLink: string;
	export let tagTitle: string;
	export let tagColor: string;
</script>

<a href={tagLink} style={`border-color: ${tagColor}`}><span>{tagTitle}</span></a>

<style>
	a {
		border: 2px solid;
		font-weight: 700;
		padding: 0.25rem 1rem;
	}
</style>
