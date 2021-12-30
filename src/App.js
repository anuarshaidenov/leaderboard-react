import React from 'react';
import './App.css';
import { Header } from './components/header/header.component';
import { Board } from './components/board/board.component';
import { AddScore } from './components/add-score/add-score.component';

import { v4 as uuidv4 } from 'uuid';
import { baseURL, gameID } from './config';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      scores: [],
      loading: true,
    };
  }

  loadLeaderboard = async () => {
    this.setState({ loading: true });
    const response = await fetch(`${baseURL}${gameID}/scores/`);
    const { result: scores } = await response.json();

    this.setState({
      scores: scores
        .map((score) => ({
          user: score.user,
          score: score.score,
          id: uuidv4(),
        }))
        .sort((score1, score2) => score2.score - score1.score),
      loading: false,
    });
  };

  componentDidMount() {
    this.loadLeaderboard();
  }

  render() {
    return (
      <div className="App">
        <Header title="Leaderboard" />
        <main>
          <div className="container container--flex">
            <Board
              title="scores"
              scores={this.state.scores}
              loading={this.state.loading}
              loadLeaderboard={this.loadLeaderboard}
            />
            <AddScore loadLeaderboard={this.loadLeaderboard} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
