import React from 'react';
import './App.css';
import { Header } from './components/header/header.component';
import { Board } from './components/board/board.component';
import { AddScore } from './components/add-score/add-score.component';

import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      scores: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RaJjOkZyA3pKCnU9Cl9n/scores/'
    );
    const { result: scores } = await response.json();

    this.setState({
      scores: scores
        .map((score) => ({
          user: score.user,
          score: score.score,
          id: uuidv4(),
        }))
        .sort((score1, score2) => score2.score - score1.score),
    });
  }

  render() {
    return (
      <div className="App">
        <Header title="Leaderboard" />
        <main>
          <div className="container container--flex">
            <Board title="scores" scores={this.state.scores} />
            <AddScore />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
