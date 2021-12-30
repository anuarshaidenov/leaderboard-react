import React from 'react';

import { Scoreboard } from '../scoreboard/scoreboard.component';

import './board.styles.css';

export class Board extends React.Component {
  render() {
    return (
      <section className="board">
        <h2 className="subtitle board__subtitle">{this.props.title}</h2>
        <button type="button" className="btn btn-main board__btn">
          Refresh
        </button>
        <Scoreboard scores={this.props.scores} />
      </section>
    );
  }
}
