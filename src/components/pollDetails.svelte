<script>
  import { createEventDispatcher } from "svelte";
  import Card from "../shared/card.svelte";
  export let poll;
  const dispatch = createEventDispatcher();

  //reactive values

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor(100 * (poll.votesA / totalVotes));
  $: percentB = Math.floor(100 * (poll.votesB / totalVotes));

  //handling vote

  const handleVote = (option, id) => {
    dispatch("vote", { option, id });
  };
</script>

<style>
  .poll {
    background: white;
    padding: 8px;
  }
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a {
    border-left: 4px solid red;
    background: rgb(226, 114, 66, 0.4);
  }
  .percent-b {
    border-left: 4px solid green;
    background: rgba(69, 196, 150, 0.2);
  }
</style>

<Card>

  <article class="poll">
    <h3 class="poll-question">{poll.question}</h3>
    <p>Total Votes: {totalVotes}</p>
    <div class="answer" on:click={() => handleVote('a', poll.id)}>
      <div class="percent percent-a" style="width:{percentA}% " />
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <div class="answer" on:click={() => handleVote('b', poll.id)}>
      <div class="percent percent-b" style="width: {percentB}%" />
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
  </article>

</Card>
