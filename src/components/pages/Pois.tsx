import React, { useRef, useEffect, useState } from 'react';
import ReactMapboxGl, { Layer, Feature, MapContext } from 'react-mapbox-gl';
import { Button } from '@material-ui/core';

interface Props {}

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOXGL_KEY || '',
});

const Pois: React.FC<Props> = () => {
  const [mapPos, setMapPos] = useState({
    lng: 2.287592,
    lat: 48.862725,
    zoom: 2,
  });
  const [flyTo, setFlyTo] = useState<any>({ center: [0, 0] });
  const [mapState, setMapState] = useState<any>(null);
  const [index, setIndex] = useState<number>(0);

  const steps = [
    { center: [0, 0], zoom: 2 },
    { center: [10, 10], zoom: 9 },
    { center: [-35, -30], zoom: 5 },
    { center: [53, 20], zoom: 7 },
  ];

  const mapRef = useRef<any>(null);

  useEffect(() => {
    mapRef &&
      mapRef.current &&
      mapRef.current.state &&
      mapRef.current.state.map &&
      mapRef.current.state.map.flyTo(steps[index]);
  }, [index]);

  return (
    <div>
      <Button
        onClick={() => {
          index < steps.length - 1 ? setIndex(index + 1) : setIndex(0);
        }}
      >
        next
      </Button>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100%',
          width: '100%',
          maxWidth: 'calc(100vw - 280px)',
        }}
        movingMethod="flyTo"
        ref={mapRef}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-1.181747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    </div>
  );
};

export default Pois;
