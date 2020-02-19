import React, { useState, useMemo, useEffect } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import styled from 'styled-components';
import MapPointIcon from 'components/atoms/MapPointIcon/MapPointIcon';
import BtnBlue from 'components/atoms/Buttons/BtnBlue';
import Grid, { FlowEnum } from 'components/atoms/Grid/Grid';
import MainTitle from 'components/atoms/Text/MainTitle';
import { Close } from '@material-ui/icons';
import Icon from 'components/atoms/Icon/Icon';
import { filterType } from 'utils/filters/type.filter';

const MapComponent = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOXGL_KEY || '',
});

interface Props {}

const CompanyContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 64px);
  margin: 0;
  position: relative;
`;

const StyledFilterContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 2rem;
  left: 4rem;
  z-index: 4;
`;

const StyledFiltersContainer = styled<any>(Grid)`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  transform: translateX(${props => (props.isFiltring ? '0' : '-100%')});
  transition: all 0.3s ease;
  background: #f4f6f8;
  border: 1px solid #eaedf3;
  box-sizing: border-box;
  border-radius: 4px;
  width: 350px;
`;

const StyledFiltersHeader = styled(Grid)`
  height: fit-content;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eaedf3;
`;

const Map: React.FC<Props> = () => {
  const [defaultEntries, setDefaultEntries] = useState<any[]>([
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
    {
      center: [2.369143, 48.853161],
      zoom: 15.5,
      pitch: 20,
      type: 'shop',
    },
  ]);
  const [isMapReady, setMapReady] = useState<any>(false);

  const [entries, setEntries] = useState<any[]>([
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
    {
      center: [2.369143, 48.853161],
      zoom: 15.5,
      pitch: 20,
      type: 'shop',
    },
  ]);

  const [isFiltring, setFiltring] = useState<boolean>(false);

  const toggleFilters = () => {
    setFiltring(!isFiltring);
  };

  const filter = (filter_key: string, filter_value: string) => {
    let newEntries: any[] = [...entries];
    switch (filter_key) {
      case 'type':
        newEntries = filterType(newEntries, filter_key, filter_value);
        break;
      default:
        alert('no filter existing ');
        break;
    }
    setEntries(newEntries);
  };

  const renderMap = useMemo(
    () => (
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
        onStyleLoad={() => setMapReady(true)}
      >
        {isMapReady && entries.map((entry, index) => {
          return (
            <Marker
              key={index}
              coordinates={entry.center}
              anchor="bottom"
              offset={[0, -15]}
            >
              <MapPointIcon point={entry} />
            </Marker>
          );
        })}
      </MapComponent>
    ),
    [entries, isMapReady],
  );

  useEffect(() => {
    setTimeout(() => {
      filter('type', 'resto');
    }, 4000);
  }, []);

  return (
    <CompanyContainer>
      <StyledFilterContainer>
        <BtnBlue text="Afficher les filtres" onClick={toggleFilters} />
      </StyledFilterContainer>
      <StyledFiltersContainer isFiltring={isFiltring}>
        <StyledFiltersHeader flow={FlowEnum.COLUMN}>
          <MainTitle title="Filtres" subtitle="" isForm={1} />
          <Icon onClick={toggleFilters}>
            <Close />
          </Icon>
        </StyledFiltersHeader>
        <Grid>
          
        </Grid>
      </StyledFiltersContainer>
      {renderMap}
    </CompanyContainer>
  );
};

export default Map;
