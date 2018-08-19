import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = props => {
  return (
    <div className="text-center">
      <h5 className="text-center">NAVBAR</h5>
      <ul className="list-unstyled list-inline">
        <li className="list-inline-item mr-2 mt-2">
          <Link to="/">Home</Link>
        </li>
        <li className="list-inline-item mr-2 mt-2">
          <Link to="/About">About</Link>
        </li>
        <li className="list-inline-item mr-2 mt-2">
          <Link to="/Topics">Topics</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default NavBar;
