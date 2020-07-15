import { writable } from "svelte/store";

const PollStore = writable(
  [
    {
      id: 1,
      question: "Cat or Dog?",
      answerA: "Cat",
      answerB: "Dog",
      votesA: 8,
      votesB: 10,
    },
  ],
);

export default PollStore;
