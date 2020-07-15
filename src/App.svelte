<script>
  import Header from "./components/header.svelte";
  import PollList from "./components/pollList.svelte";
  import CreatePollForm from "./components/createPollForm.svelte";
  import Footer from "./components/footer.svelte";
  import Tabs from "./shared/tabs.svelte";

  let tabItems = ["Current Polls", "Add New Poll"];
  let activeTab = "Current Polls";

  const tabChange = e => {
    activeTab = e.detail;
  };

  let polls = [
    {
      id: 1,
      question: "Cat or Dog?",
      answerA: "Cat",
      answerB: "Dog",
      votesA: 8,
      votesB: 10
    }
  ];
  const addPoll = e => {
    const poll = e.detail;
    polls = [poll, ...polls];
    console.log(polls);
    activeTab = "Current Polls";
  };
</script>

<style>
  main {
    padding: 1em;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }
</style>

<Header />
<main>
  <Tabs {activeTab} {tabItems} on:tabChange={tabChange} />
  {#if activeTab === 'Current Polls'}
    <PollList {polls} />
  {:else}
    <CreatePollForm on:add={addPoll} />
  {/if}
</main>
<Footer />
