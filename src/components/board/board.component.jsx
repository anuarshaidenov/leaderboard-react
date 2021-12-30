import React from 'react';

import { Scoreboard } from '../scoreboard/scoreboard.component';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import './board.styles.css';

export class Board extends React.Component {
  render() {
    return (
      <section className="board">
        <h2 className="subtitle board__subtitle">{this.props.title}</h2>
        <button
          type="button"
          className="btn btn-main board__btn"
          onClick={this.props.loadLeaderboard}
        >
          Refresh
        </button>
        {this.props.loading ? (
          <Loader type="TailSpin" color="#3563be" height={50} width={50} />
        ) : (
          <Scoreboard scores={this.props.scores} />
        )}
      </section>
    );
  }
}
