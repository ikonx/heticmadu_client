import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const AppMenu: React.FC<Props> = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/companies">companies</Link>
          </li>
          <li>
            <Link to="/pois">pois</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppMenu;
