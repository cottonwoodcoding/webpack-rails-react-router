import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">W-R-R</a>
        <ul id="nav-mobile" className="right">
          <li><Link to="/">Todos</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
    { children }
  </div>
)

export default App;

