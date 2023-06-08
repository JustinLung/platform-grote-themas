<script lang="ts">
	let video: HTMLVideoElement;
	export let src = '/video/example.mp4';
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video controls bind:this={video}>
	<source {src} />
</video>
