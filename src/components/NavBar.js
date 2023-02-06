import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="./HomePage">Home</Link>
          </li>
          <li>
            <Link to="./SpaceNews">Space News</Link>
          </li>
        </ul>
      </nav>
    );
  };

export default NavBar;