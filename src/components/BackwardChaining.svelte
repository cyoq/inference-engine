<script lang="ts">
  import { fade } from 'svelte/transition';
  import { backwardInference, forwardInference } from '../store';
  import { NodeType } from '../types';
  let selectedConclusion: string;
</script>

<div class="container">
  <span>
    Backward chaining helps to get <pre>reasons</pre>
    why a specific
    <pre>conclusion</pre>
    occurred.
  </span>

  <div class="conclusion-choice">
    <pre>Select a conclusion:</pre>
    <select bind:value={selectedConclusion}>
      {#each $backwardInference.conclusions as conclusion}
        <option value={conclusion}>
          {conclusion}
        </option>
      {/each}
    </select>
  </div>

  <div class="controls">
    <button
      class="control-btn"
      on:click={() => backwardInference.startInference(selectedConclusion)}
      disabled={selectedConclusion === '' || $backwardInference.hasInferenceStarted}
      >Start inference</button
    >
    <button
      class="control-btn"
      on:click={backwardInference.reset}
      disabled={!$backwardInference.hasInferenceStarted}>Clear inference</button
    >
  </div>

  {#if $backwardInference.hasInferenceStarted}
    <div class="rules" in:fade out:fade>
      <h2>Production rules</h2>
      {#each $backwardInference.productionRules as rule}
        <div class="rule" in:fade>
          <b>IF</b>
          {@html rule.facts.map((f) => `${f.name} = ${f.value}`).join(' <b>AND</b> ')}
          <b>THEN</b>
          {rule.conclusion}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    font-size: 15px;
  }

  .control-btn {
    border: 1px solid var(--border-grey);
    border-radius: 0.25rem;
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: var(--orange);
    cursor: pointer;
    font-weight: 600;
  }

  .control-btn:hover:enabled {
    background-color: var(--pale-orange);
  }

  .control-btn:disabled {
    background-color: #e0e0e0;
  }

  .controls,
  .conclusion-choice {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    margin-right: auto;
    margin-left: 0;
  }

  .conclusion-choice select {
    background-color: #fff;
    padding: 0.5rem 1rem;
    border: 1px solid var(--orange);
  }

  .rule {
    font-size: 18px;
    margin-top: 0.5rem;
  }
</style>
