<script>
  //   import { onMount, onDestroy } from "svelte";
  import { fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import PollStore from "../stores/pollstore.js";
  import PollDetails from "./pollDetails.svelte";
  //   export let polls = [];

  //   const unsub = PollStore.subscribe(data => {
  //     polls = data;
  //   });

  //   onDestroy(() => {
  //     console.log("Component destroyed");
  //     unsub();
  //   });
</script>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    padding: 8px;
  }
  @media (max-width: 560px) {
    .poll-list {
      grid-template-columns: 1fr;
    }
  }
</style>

<article class="poll-list">

  {#each $PollStore as poll (poll.id)}
    <section in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </section>
  {:else}
    <p>There is no poll yet</p>
  {/each}
</article>
