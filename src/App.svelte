<script lang="ts">
	import TreeSvg from './components/TreeSvg.svelte';

	const text = 'Hello World';

	let width = 600;
	let height = 400;
</script>

<main>
	<h1>{text}</h1>
	<TreeSvg chartWidth={width} chartHeight={height} />
</main>
