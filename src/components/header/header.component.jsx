import React from 'react';

import './header.styles.css';

export const Header = (props) => (
  <header>
    <div class="container">
      <h1 class="logo">{props.title}</h1>
    </div>
  </header>
);
