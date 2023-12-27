<script lang="ts">
  import TreeSvg from './components/TreeSvg.svelte';

  const text = 'Hello World';

  let width = 600;
  let height = 400;
</script>

<main bind:clientWidth={width}>
  <h1>{text}</h1>

  <span
    >This is a cool <pre>SVG</pre>
    graph</span
  >
  <TreeSvg chartWidth={width} chartHeight={height} />
</main>

<style>
  main {
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #f0f0f0;
    font-family: sans-serif;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  pre {
    padding: 1px 6px;
    display: inline;
    margin: 0;
    background: #ffb7a0;
    border-radius: 3px;
  }

  a {
    color: #ff3e00;
    text-decoration: inherit;
  }
</style>
