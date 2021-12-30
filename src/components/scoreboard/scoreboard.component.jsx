import React from 'react';

import './scoreboard.styles.css';

export const Scoreboard = (props) => (
  <ul className="scoreboard board__scoreboard">
    {props.scores.map((score) => (
      <li className="scoreboard__item">
        {score.user}: {score.score}
      </li>
    ))}
  </ul>
);
