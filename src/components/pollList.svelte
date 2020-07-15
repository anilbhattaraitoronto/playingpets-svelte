<script>
  export let polls = [];
</script>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    padding: 8px;
  }
  .poll {
    padding: 8px;
    background: lightgray;
  }
</style>

<article class="poll-list">

  {#each polls as poll (poll.id)}
    <section class="poll">
      <h4 class="poll-question">{poll.question}</h4>
    </section>
  {:else}
    <p>There is not poll yet</p>
  {/each}
</article>
