<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Button from "../shared/button.svelte";
  let fields = { question: " ", answer1: " ", answer2: " " };
  let errors = { question: " ", answer1: " ", answer2: " " };
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

    if (fields.answer1.trim().length < 1) {
      valid = false;
      errors.answer1 = "Answer 1 cannot be empty";
    } else {
      errors.answer1 = " ";
    }
    //validate answer2
    if (fields.answer2.trim().length < 1) {
      valid = false;
      errors.answer2 = " Answer 2 cannot be empty";
    } else {
      errors.answer2 = " ";
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
    width: 400px;
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
    <input type="text" id="answer1" bind:value={fields.answer1} required />
    <div class="error">
      <p>{errors.answer1}</p>
    </div>
  </div>
  <div class="form-field">
    <label for="answer2">Answer 2</label>
    <input type="text" id="answer2" bind:value={fields.answer2} required />
    <div class="error">
      <p>{errors.answer2}</p>
    </div>
  </div>
  <Button type="secondary" flat={true}>Add Poll</Button>
</form>
