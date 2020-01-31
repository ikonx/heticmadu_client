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
            <Link to="/companies">Entreprises</Link>
          </li>
          <li>
            <Link to="/pois">POIs</Link>
          </li>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
          <li>
            <Link to="/form">Formulaire</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppMenu;
