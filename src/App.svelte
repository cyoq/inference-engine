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

  <!-- <div class="controls">
    <div class="controls-inner">
      {#each spots as spot, index}
      <button>
        Hi
        <span style="background-color: coral"></span>
      </button>
      {/each}
    </div>
  </div> -->

  <footer>Check the code on the <a href="https://example.com">GitHub</a> 😉</footer>
</main>

<style>
  :root {
    --orange-color: #ffb7a0;
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
    background: var(--orange-color);
    border-radius: 3px;
  }

  a {
    color: #ff3e00;
    text-decoration: inherit;
  }

  .controls {
    display: flex;
    justify-content: center;
  }
  .controls-inner {
    display: flex;
    margin: 0 auto;
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .controls-inner > * + * {
    border-left: 1px solid var(--border-color);
  }
  button {
    cursor: pointer;
    font-weight: 600;
    justify-content: center;
    padding: 1rem 1rem;
    text-align: center;
    border: none;
    white-space: nowrap;
    margin: 0;
    position: relative;
    background: transparent;
    user-select: none;
  }
  button span {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: 0.2s ease-out;
  }
  button:hover span {
    opacity: 0.7;
  }
  button.active {
    text-decoration: underline;
    text-decoration-thickness: 3px;
  }
</style>
