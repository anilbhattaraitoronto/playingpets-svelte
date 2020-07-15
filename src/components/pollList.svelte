<script>
  import PollDetails from "./pollDetails.svelte";
  export let polls = [];
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

  {#each polls as poll (poll.id)}
    <section>
      <PollDetails {poll} on:vote />
    </section>
  {:else}
    <p>There is no poll yet</p>
  {/each}
</article>
