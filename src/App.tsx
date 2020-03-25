import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import MainUi from 'components/template/MainUi/MainUi';

/**
 * TODO: finish login page, link to api + userContext
 */
import Login from 'components/pages/Login';

// providers
import PoisProvider from 'contexts/pois/pois.provider';
import TagsProvider from 'contexts/tags/tags.provider';
import UserProvider from 'contexts/user/user.provider';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Switch>
            <Route exact path={['/login']}>
              <Login />
            </Route>
            <Route path="*">
              <MainUi />
            </Route>
          </Switch>
        </UserProvider>
      </Router>
    </div>
  );
};

export default App;
