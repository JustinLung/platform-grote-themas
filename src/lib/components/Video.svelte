<script lang="ts">
	let video: HTMLVideoElement;
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video controls bind:this={video}>
	<source src="/video/example.mp4" />
</video>
