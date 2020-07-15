<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let tabItems;
  export let activeTab;
</script>

<style>
  .tabx {
    margin-bottom: 40px;
  }
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
  }
  li {
    list-style-type: none;
    margin: 0 20px;
    font-size: 18px;
    cursor: pointer;
  }
  .active,
  li:hover {
    text-decoration: underline;
    color: orangered;
  }
</style>

<div class="tabs">
  <ul>
    {#each tabItems as item}
      <li on:click={() => dispatch('tabChange', item)}>
        <div class:active={item === activeTab}>{item}</div>
      </li>
    {/each}
  </ul>
</div>
