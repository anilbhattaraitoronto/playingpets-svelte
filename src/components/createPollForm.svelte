<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Button from "../shared/button.svelte";
  let fields = { question: " ", answerA: " ", answerB: " " };
  let errors = { question: " ", answerA: " ", answerB: " " };
  let valid = false;
  const submitHandler = () => {
    valid = true;
    //validate question

    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "Question must be at least 5 characters long.";
    } else {
      errors.question = " ";
    }

    //validate answer1

    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "Answer A cannot be empty";
    } else {
      errors.answerA = " ";
    }
    //validate answer2
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = " Answer B cannot be empty";
    } else {
      errors.answerB = " ";
    }

    //add new Poll

    if (valid) {
      let poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() };
      dispatch("add", poll);
    }
  };
</script>

<style>
  form {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    padding: 40px;
    background: lightgray;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .error {
    font-weight: bold;
    font-size: 12px;
    color: red;
  }
</style>

<h3 class="section-title">Add New Poll</h3>
<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question</label>
    <input type="text" id="question" bind:value={fields.question} required />
    <div class="error">
      <p>{errors.question}</p>
    </div>
  </div>
  <div class="form-field">
    <label for="answer1">Answer 1</label>
    <input type="text" id="answer1" bind:value={fields.answerA} required />
    <div class="error">
      <p>{errors.answerA}</p>
    </div>
  </div>
  <div class="form-field">
    <label for="answer2">Answer 2</label>
    <input type="text" id="answer2" bind:value={fields.answerB} required />
    <div class="error">
      <p>{errors.answerB}</p>
    </div>
  </div>
  <Button type="secondary" flat={true}>Add Poll</Button>
</form>
