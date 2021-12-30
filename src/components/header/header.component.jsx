import React from 'react';

import './header.styles.css';

export const Header = (props) => (
  <header>
    <div className="container">
      <h1 className="logo">{props.title}</h1>
    </div>
  </header>
);
