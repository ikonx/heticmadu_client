import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import MainUi from 'components/template/MainUi/MainUi';

import './App.css';
/**
 * TODO: finish login page, link to api + userContext
 */
// import Login from 'components/pages/Login';
import PoisProvider from 'contexts/pois/pois.provider';
import TagsProvider from 'contexts/tags/tags.provider';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/">
            <Login />
          </Route> */}
          <Route path="*">
            <PoisProvider>
              <TagsProvider>
                  <MainUi />
              </TagsProvider>
            </PoisProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
