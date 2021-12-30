import React from 'react';
import './App.css';
import { Header } from './components/header/header.component';
import { Board } from './components/board/board.component';
import { AddScore } from './components/add-score/add-score.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title="Leaderboard" />
        <main>
          <div className="container container--flex">
            <Board title="scores" />
            <AddScore />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
