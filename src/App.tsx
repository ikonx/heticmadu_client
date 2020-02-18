import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import MainUi from 'components/template/MainUi/MainUi';

import './App.css';
import Login from 'components/pages/Login';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="*">
              <MainUi />
            </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
