<script lang="ts">
  import BackwardChaining from './components/BackwardChaining.svelte';
  import ForwardChaining from './components/ForwardChaining.svelte';
  import Tabs from './components/Tabs.svelte';
  import TreeSvg from './components/TreeSvg.svelte';
  import type { TabItem } from './types';

  let width = 600;
  let height = 400;

  let items: TabItem[] = [
    { label: 'Forward', index: 1, component: ForwardChaining },
    { label: 'Backward', index: 2, component: BackwardChaining }
  ];
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

  <h2>Chaining ⛓️</h2>

  <Tabs {items} />

  <footer>
    Check the code on the <a href="https://github.com/cyoq/inference-engine">GitHub</a> 😉
  </footer>
</main>

<style>
  :root {
    --orange: #ffb7a0;
    --pale-orange: #fccab9;
    --border-grey: #afafaf;
    --chinese-violet: #995d81;
    --air-force-blue: #6689a1;
    --melon: #ffb7a0;
    --asparagus: #6baa75;
  }

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
    --border-color: #999;
  }

  h1 {
    font-size: 2.8rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
  }

  :global(pre) {
    padding: 1px 6px;
    display: inline;
    margin: 0;
    background: var(--orange);
    border-radius: 3px;
  }

  a {
    color: #ff3e00;
    text-decoration: inherit;
  }
</style>
