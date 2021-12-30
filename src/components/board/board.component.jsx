import React from 'react';

import { baseURL, gameID } from '../../config';
import { Scoreboard } from '../scoreboard/scoreboard.component';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import { v4 as uuidv4 } from 'uuid';

import './board.styles.css';

export class Board extends React.Component {
  constructor() {
    super();

    this.state = {
      scores: [],
      loading: true,
    };
  }

  async componentDidMount() {
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
  }

  render() {
    return (
      <section className="board">
        <h2 className="subtitle board__subtitle">{this.props.title}</h2>
        <button type="button" className="btn btn-main board__btn">
          Refresh
        </button>
        {this.state.loading ? (
          <Loader type="TailSpin" color="#3563be" height={50} width={50} />
        ) : (
          <Scoreboard scores={this.state.scores} />
        )}
      </section>
    );
  }
}
