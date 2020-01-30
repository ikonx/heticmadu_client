import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dashboard from 'components/pages/Dashboard';
import Companies from 'components/pages/Companies';
import Pois from 'components/pages/Pois';

import './App.css';
import AppMenu from 'components/organisms/AppMenu';
import Header from 'components/molecules/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <AppMenu />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/companies">
              <Companies />
            </Route>
            <Route path="/pois">
              <Pois />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
