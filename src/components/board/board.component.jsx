import React from 'react';

import { Scoreboard } from '../scoreboard/scoreboard.component';

import './board.styles.css';

export const Board = (props) => (
  <section class="board">
    <h2 class="subtitle board__subtitle">{props.title}</h2>
    <button type="button" class="btn btn-main board__btn" id="refresh">
      Refresh
    </button>
    <Scoreboard />
  </section>
);
