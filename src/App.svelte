<script lang="ts">
  import TreeSvg from './components/TreeSvg.svelte';

  let width = 600;
  let height = 400;
</script>

<main bind:clientWidth={width}>
  <h1>Inference engine 💡</h1>

  <span
    >The decision graph for <pre>forward</pre>
    and
    <pre>backward</pre>
    chaining execution</span
  >

  <TreeSvg chartWidth={width} chartHeight={height} />

  <footer>Check the code on the <a href="">GitHub</a> 😉</footer>
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
