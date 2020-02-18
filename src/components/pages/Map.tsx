import React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import styled from 'styled-components';
import MapPointIcon from 'components/atoms/MapPointIcon/MapPointIcon';

const MapComponent = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOXGL_KEY || '',
});

interface Props {}

const CompanyContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 64px);
  margin: 0;
`;

const Map: React.FC<Props> = () => {
  const entries: any[] = [
    {
      center: [2.354768, 48.860589],
      zoom: 15.5,
      pitch: 20,
      type: 'resto',
    },
    {
      center: [2.332595, 48.864371],
      zoom: 15.5,
      pitch: 20,
      type: 'shop',
    },
    {
      center: [2.292952, 48.87102],
      zoom: 15.5,
      pitch: 20,
      type: 'business',
    },
    {
      center: [2.397322, 48.87102],
      zoom: 15.5,
      pitch: 20,
      type: 'shop',
    },
    {
      center: [2.402886, 48.859557],
      zoom: 15.5,
      pitch: 20,
      type: 'resto',
    },
  ];

  return (
    <CompanyContainer>
      <MapComponent
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: 'calc(100vh - 64px)',
          width: '100%',
          maxWidth: '100vw',
        }}
        movingMethod="flyTo"
        center={[2.349014, 48.864716]}
        zoom={[12]}
      >
        {entries.map((entry, index) => {
          return (
            <Marker
              key={index}
              coordinates={entry.center}
              anchor="bottom"
              offset={[-30, -30]}
            >
              <MapPointIcon point={entry} />
            </Marker>
          );
        })}
      </MapComponent>
    </CompanyContainer>
  );
};

export default Map;
