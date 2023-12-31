<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { TabItem } from '../types';

  export let items: TabItem[] = [];
  export let activeTabIndex = 1;

  const handleClick = (tabValue: number) => () => (activeTabIndex = tabValue);
</script>

<ul>
  {#each items as item}
    <li class={activeTabIndex === item.index ? 'active' : ''}>
      <button on:click={handleClick(item.index)}>{item.label}</button>
    </li>
  {/each}
</ul>

{#each items as item}
  {#if activeTabIndex == item.index}
    <div class="box" in:fade>
      <svelte:component this={item.component} />
    </div>
  {/if}
{/each}

<style>
  .box {
    margin-bottom: 10px;
    padding: 40px;
    border: 1px solid var(--orange);
    border-radius: 0 0 0.5rem 0.5rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid #dee2e6;
  }
  li {
    margin-bottom: -1px;
  }
  button {
    border: 1px solid var(--border-grey);
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  button:hover {
    /* Button default hover color */
    border-color: #e9ecef;
  }
  li.active > button {
    background-color: #fff;
    border-color: var(--orange);
  }
</style>
