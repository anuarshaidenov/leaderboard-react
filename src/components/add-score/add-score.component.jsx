import React from 'react';

import './add-score.styles.css';

export const AddScore = (props) => (
  <section class="add-score">
    <h2 class="add-score__subtitle subtitle">Add your score</h2>
    <form action="/" class="add-score__form" id="add-score-form">
      <input
        type="text"
        name="name"
        id="name-input"
        class="add-score__name"
        placeholder="Your Name"
        autocomplete="off"
        maxlength="10"
        required
      />
      <input
        type="number"
        name="score"
        id="score-input"
        class="add-score__score"
        placeholder="Your Score"
        min="0"
        max="100"
        required
      />
      <button type="submit" class="btn btn-main add-score__btn">
        Submit
      </button>
    </form>
    <p class="add-score__message opacity-0" id="add-score-message">
      New score has been added successfully!
    </p>
    <p class="add-score__message--error opacity-0" id="error-message">
      Failed to add❗️
    </p>
  </section>
);
