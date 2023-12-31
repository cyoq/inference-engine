<script lang="ts">
  import { fade } from 'svelte/transition';
  import { forwardInference } from '../store';
  import { NodeType } from '../types';
  let answerColors = ['--chinese-violet', '--air-force-blue', '--asparagus', '--melon'];
</script>

<div class="container">
  <span>
    Forward chaining helps to <pre>sequentially</pre>
    get to the
    <pre>conclusions</pre>
    .
  </span>

  <div class="controls">
    <button
      class="control-btn"
      on:click={forwardInference.startInference}
      disabled={$forwardInference.hasInferenceStarted}>Start inference</button
    >
    <button
      class="control-btn"
      on:click={forwardInference.reset}
      disabled={!$forwardInference.hasInferenceStarted}>Clear inference</button
    >
  </div>

  {#if $forwardInference.hasInferenceStarted}
    <div class="question" in:fade>
      <pre>Question:</pre>
      {$forwardInference.currentNode.name}?
    </div>
  {/if}

  {#if $forwardInference.hasInferenceStarted && ($forwardInference.answers ?? []).length > 0}
    <div class="answer" in:fade>
      <pre>Answer:</pre>

      {#each $forwardInference.answers ?? [] as answer, i}
        <button
          style="background-color: var({answerColors[i % answerColors.length]})"
          on:click={() => forwardInference.next(answer)}
        >
          {answer}
        </button>
      {/each}
    </div>
  {/if}

  {#if $forwardInference.hasInferenceStarted && $forwardInference.currentNode.type === NodeType.Conclusion}
    <div class="conclusion" in:fade>
      <pre>Conclusion:</pre>
      {$forwardInference.currentNode.name}
    </div>
  {/if}

  {#if $forwardInference.hasInferenceStarted}
    <div class="rules">
      <h2>Production rules</h2>
      {#each $forwardInference.productionRules as rule}
        <div class="rule" in:fade>
          <b>IF</b>
          {rule.facts.map((f) => `${f.name} = ${f.value}`).join(' AND ')}
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

  .controls {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    margin-right: auto;
    margin-left: 0;
  }

  .question,
  .conclusion,
  .answer {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-right: auto;
    margin-left: 0;
  }
  .answer button {
    cursor: pointer;
    font-weight: 600;
    padding: 0.5rem 1rem;
    white-space: nowrap;
    margin-right: 2px;
    margin-left: 2px;
    border: 1px solid var(--border-grey);
    border-radius: 0.5rem;
    transition: text-decoration 0.8s ease-out;
  }
  .answer button:hover {
    opacity: 0.7;
    text-decoration: underline !important;
    transition: 0.1s ease-in;
  }

  .rule {
    font-size: 18px;
    margin-top: 0.5rem;
  }
</style>
