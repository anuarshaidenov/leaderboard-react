import './App.css';
import { Header } from './components/header/header.component';
import { Board } from './components/board/board.component';
import { AddScore } from './components/add-score/add-score.component';

function App() {
  return (
    <div className="App">
      <Header title="Leaderboard" />
      <main>
        <div class="container container--flex">
          <Board title="scores" />
          <AddScore />
        </div>
      </main>
    </div>
  );
}

export default App;
