<script lang="ts">
	let video: HTMLVideoElement;
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video controls bind:this={video}>
	<source src="/video/example.mp4" />
</video>

<style>
	video {
		width: 60%;
	}

	@media(max-width: 55rem) {
		video {
			width: 100%;
		}
	}
</style>