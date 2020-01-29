import React from 'react';
import mapboxgl from 'mapbox-gl';
import Button from '@material-ui/core/Button';
import './App.css';

mapboxgl.accessToken = process.env.REACT_APP_MABOXGL_KEY || '';

const App: React.FC = () => {
  return (
    <div className="App">
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
};

export default App;
