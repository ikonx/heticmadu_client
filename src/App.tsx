import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dashboard from 'components/pages/Dashboard';
import Companies from 'components/pages/Companies';
import Pois from 'components/pages/Pois';
import MainUi from 'components/template/MainUi/MainUi';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainUi render={<Dashboard />} />
          </Route>
          <Route path="/companies">
            <MainUi render={<Companies />} />
          </Route>
          <Route path="/pois">
            <MainUi render={<Pois />} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
