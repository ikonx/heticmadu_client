import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import MainUi from 'components/template/MainUi/MainUi';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <MainUi />
      </Router>
    </div>
  );
};

export default App;
