<script lang="ts">
  let question = 'Is it outlook?';
  let answers = ['Sunny', 'Overcast', 'Rainy', 'Doom'];
  let answerColors = ['--chinese-violet', '--air-force-blue', '--asparagus', '--melon'];
  let conclusion = 'Play?: Yes';

  let productionRules = [
    { statement: 'Outlook = Overcast', conclusion: 'Play?: Yes' },
    { statement: 'Outlook = Overcast', conclusion: 'Play?: Yes' }
  ];
</script>

<div class="container">
  <span>
    Forward chaining helps to <pre>sequentially</pre>
    get to the
    <pre>conclusions</pre>
    .
  </span>

  <div class="controls">
    <button class="control-btn">Start inference</button>
    <button class="control-btn" disabled>Clear inference</button>
  </div>

  <div class="question">
    <pre>Question:</pre>
    {question}
  </div>

  <div class="answer">
    <pre>Answer:</pre>

    {#each answers as answer, i}
      <button style="background-color: var({answerColors[i % answerColors.length]})">
        {answer}
      </button>
    {/each}
  </div>

  <div class="conclusion">
    <pre>Conclusion:</pre>
    {conclusion}
  </div>

  <div class="rules">
    <h2>Production rules</h2>
    {#each productionRules as rule}
      <div class="rule">
        <b>IF</b>
        {rule.statement}
        <b>THEN</b>
        {rule.conclusion}
      </div>
    {/each}
  </div>
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
