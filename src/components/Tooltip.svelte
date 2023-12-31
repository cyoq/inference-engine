<script lang="ts">
  import { fade } from 'svelte/transition';

  const rectWidth = 60;
  const rectHeight = 20;

  export let x: number;
  export let y: number;
</script>

<g
  class="chart-tooltip"
  transform="translate({x - rectWidth * 2}, {y})"
  in:fade={{ duration: 500 }}
>
  <rect width={rectWidth} height={rectHeight} fill="#f0f0f0" />
  <text dy="0.35em" x={rectWidth / 2} y={rectHeight / 2} text-anchor="middle">Current</text>
  <polygon
    points="{rectWidth + 2},0 {rectWidth + 2},{rectHeight} {rectWidth + rectWidth / 4},{rectHeight /
      2}"
    class="triangle"
    fill="#f0f0f0"
  />
</g>

<style>
  .chart-tooltip {
    position: absolute;
    padding: 6px;
    border: 1px solid var(--orange);
    background: white;
    /* Allows not to hover on the element itself  */
    pointer-events: none;
  }

  .chart-tooltip rect {
    fill: #fafafa;
    stroke: var(--border-grey);
    stroke-width: 1px;
  }

  .triangle {
    stroke: var(--border-grey);
    fill: #fafafa;
    stroke-width: 1px;
  }
</style>
