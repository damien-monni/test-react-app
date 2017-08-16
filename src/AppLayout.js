import React from 'react';
import { NavLink } from 'react-router-dom';

export default class extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <section style={{ margin: '50px auto 0 auto', maxWidth: 600 }}>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/about">A propos</NavLink>
            </li>
          </ul>

          {children}
        </nav>
      </section>
    );
  }
}
