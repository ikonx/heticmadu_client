import React, { useRef, useEffect, useState } from 'react';
import ReactMapboxGl, { Layer, Feature, MapContext } from 'react-mapbox-gl';
import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import Grid, { FlowEnum } from '../atoms/Grid/Grid';

import { CreatePointsOfInterestDTO } from 'utils/dto/pointsOfInterest.dto';

interface Props {}

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MABOXGL_KEY || '',
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

  const pois: any[] = [
    {
      name: 'The Boulangerie',
      description: '',
      position: {
        longitude: 2.42092227935791,
        latitude: 48.85190963745117,
        zoom: 20,
      },
    },
    {
      name: 'Izu',
      description: 'Resto asiat',
      position: {
        longitude: 2.411103382706683,
        latitude: 48.847315577040405,
        zoom: 15,
      },
    },
    {
      name: 'Sakura',
      description: 'Resto jap',
      position: {
        longitude: 2.4176167920232228,
        latitude: 48.84656011898287,
        zoom: 23,
      },
    },
  ];

  return (
    <Grid flow={FlowEnum.COLUMN} style={{ gridTemplateColumn: '150px 1fr' }}>
      <div>
        <Button
          onClick={() => {
            index < steps.length - 1 ? setIndex(index + 1) : setIndex(0);
          }}
        >
          next
        </Button>
        <List>
          {pois.map(poi => (
            <ListItem
              alignItems="flex-start"
              key={poi.name}
              onClick={() => {
                const flyToParsed = {
                  center: [poi.position.longitude, poi.position.latitude],
                  zoom: poi.position.zoom,
                };
                console.log(flyToParsed);

                mapRef.current.state.map.flyTo(flyToParsed);
              }}
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={poi.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {poi.description}
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>
      </div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100%',
          width: '100%',
          maxWidth: 'calc(100vw - 280px)',
        }}
        movingMethod="flyTo"
        ref={mapRef}
        center={[2.349014, 48.864716]}
      >
        <Layer
          type="symbol"
          id="marker"
          layout={{ 'icon-image': 'marker-15' }}
          paint={{'fill-color': 'red','fill-opacity': 0.6}}
        >
          {pois.map(poi => {
            return (
              <Feature
                coordinates={[poi.position.longitude, poi.position.latitude]}
              />
            );
          })}
        </Layer>
      </Map>
    </Grid>
  );
};

export default Pois;
