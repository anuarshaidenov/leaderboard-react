import React from 'react';

import './add-score.styles.css';

export class AddScore extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      score: '',
      displaySuccess: false,
      displayError: false,
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleScoreChange = (e) => {
    this.setState({ score: Number(e.target.value) });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      user: this.state.name,
      score: this.state.score,
    };

    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RaJjOkZyA3pKCnU9Cl9n/scores/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      }
    );

    if (!response.ok) {
      this.setState({ name: '', score: 0, displayError: true });
      setTimeout(() => this.setState({ displayError: false }), 3000);
      return;
    }

    this.setState({ name: '', score: 0, displaySuccess: true });
    setTimeout(() => this.setState({ displaySuccess: false }), 3000);
  };

  render() {
    return (
      <section className="add-score">
        <h2 className="add-score__subtitle subtitle">Add your score</h2>
        <form
          action="/"
          className="add-score__form"
          onSubmit={this.handleSubmit}
        >
          <input
            value={this.state.name}
            type="text"
            name="name"
            className="add-score__name"
            placeholder="Your Name"
            autoComplete="off"
            maxLength="10"
            required
            onChange={this.handleNameChange}
          />
          <input
            value={this.state.score}
            type="number"
            name="score"
            className="add-score__score"
            placeholder="Your Score"
            min="0"
            max="100"
            required
            onChange={this.handleScoreChange}
          />
          <button type="submit" className="btn btn-main add-score__btn">
            Submit
          </button>
        </form>

        <p
          className={`add-score__message ${
            !this.state.displaySuccess ? 'opacity-0' : ''
          }`}
          id="add-score-message"
        >
          New score has been added successfully!
        </p>
        <p
          className={`add-score__message--error ${
            !this.state.displayError ? 'opacity-0' : ''
          } `}
          id="error-message"
        >
          Score has to be above 0❗️
        </p>
      </section>
    );
  }
}
