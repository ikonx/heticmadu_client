import React, { useState, useMemo, useEffect } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import styled from 'styled-components';
import { Close } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';

import MapPointIcon from 'components/atoms/MapPointIcon/MapPointIcon';
import BtnBlue from 'components/atoms/Buttons/BtnBlue';
import Grid, { FlowEnum } from 'components/atoms/Grid/Grid';
import MainTitle from 'components/atoms/Text/MainTitle';
import Icon from 'components/atoms/Icon/Icon';
import InputRadio from 'components/atoms/Inputs/Radio/InputRadio';
import CustomSelect from 'components/atoms/Select/CustomSelect';
import RadioMultiple from 'components/atoms/Inputs/RadioMultiple/RadioMultiple';

import { radioPrice, radioAccessibility, radioTags } from 'utils/formsMocks/PoisForm';
import { filterType } from 'utils/filters/type.filter';
import { filterPrice } from 'utils/filters/price.filter';
import { filterTags } from 'utils/filters/tags.filter';

const MapComponent = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOXGL_KEY || '',
});

interface Props {}

const CompanyContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 72px);
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
  grid-template-rows: max-content;
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

const MotionMarker = styled(motion.div)``;

const fakeData = [
  {
    id: 1,
    center: [2.354768, 48.860589],
    zoom: 15.5,
    pitch: 20,
    type: 'resto',
    price: '€',
    tags: ['africa', 'bar'],
  },
  {
    id: 2,
    center: [2.332595, 48.864371],
    zoom: 15.5,
    pitch: 20,
    type: 'shop',
    price: '€€€',
    tags: ['africa'],
  },
  {
    id: 3,
    center: [2.292952, 48.87102],
    zoom: 15.5,
    pitch: 20,
    type: 'business',
    price: '€€',
    tags: ['burger', 'bar'],
  },
  {
    id: 4,
    center: [2.397322, 48.87102],
    zoom: 15.5,
    pitch: 20,
    type: 'shop',
    price: '€',
    tags: ['burger', 'vegan', 'cosy', 'sushi', 'indien'],
  },
  {
    id: 5,
    center: [2.402886, 48.859557],
    zoom: 15.5,
    pitch: 20,
    type: 'resto',
    price: '€€',
    tags: ['bar'],
  },
  {
    id: 6,
    center: [2.369143, 48.853161],
    zoom: 15.5,
    pitch: 20,
    type: 'shop',
    price: '€€€',
    tags: ['africa', 'bar'],
  },
  {
    id: 7,
    center: [2.324768, 48.680589],
    zoom: 15.5,
    pitch: 20,
    type: 'resto',
    price: '€',
    tags: ['africa', 'bar'],
  },
  {
    id: 8,
    center: [2.322595, 48.764371],
    zoom: 15.5,
    pitch: 20,
    type: 'shop',
    price: '€€€',
    tags: ['salade', 'cosy'],
  },
  {
    id: 9,
    center: [2.292952, 48.83102],
    zoom: 15.5,
    pitch: 20,
    type: 'business',
    price: '€€',
    tags: ['burger', 'bar', 'salade'],
  },
  {
    id: 10,
    center: [2.391322, 48.87802],
    zoom: 15.5,
    pitch: 20,
    type: 'shop',
    price: '€€€',
    tags: ['burger'],
  },
  {
    id: 11,
    center: [2.412886, 48.849557],
    zoom: 15.5,
    pitch: 20,
    type: 'business',
    price: '€€€',
    tags: ['bar', 'sushi', 'cosy'],
  },
  {
    id: 12,
    center: [2.329143, 48.859161],
    zoom: 15.5,
    pitch: 20,
    type: 'business',
    price: '€€',
    tags: ['africa', 'bar'],
  },
];

const Map: React.FC<Props> = () => {
  const [defaultEntries, setDefaultEntries] = useState<any[]>([...fakeData]);
  const [entries, setEntries] = useState<any[]>([...fakeData]);
  const [isMapReady, setMapReady] = useState<any>(false);
  const [isFiltring, setFiltring] = useState<boolean>(!false);

  const toggleFilters = () => {
    setFiltring(!isFiltring);
  };

  const spring = {
    type: 'spring',
    damping: 900,
    stiffness: 600,
  };

  /**
   * switch to chose wich filter to use depending on the filter key
   *
   * @param {string} filter_key
   * @param {*} filter_value
   */
  const filter = (filter_key: string, filter_value: any) => {
    // @TODOS Manage selected filters && or || ????????????
    let newEntries: any[] = [...defaultEntries];
    switch (filter_key) {
      case 'type':
        newEntries = filterType(newEntries, filter_key, filter_value);
        break;
      case 'price':
        newEntries =
          filter_value.length > 0
            ? filterPrice(newEntries, filter_key, filter_value)
            : defaultEntries;
        break;
      // @TODOS check DATA BASE SCHEMA
      case 'accessibility':
        newEntries =
          filter_value.length > 0
            ? filterPrice(newEntries, filter_key, filter_value)
            : defaultEntries;
        break;
      case 'tags':
        newEntries =
          filter_value.length > 0
            ? filterTags(newEntries, filter_key, filter_value)
            : defaultEntries;
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
        <AnimatePresence>
          {isMapReady &&
            entries.map((entry, index) => {
              return (
                <Marker
                  key={entry.id}
                  coordinates={entry.center}
                  anchor="bottom"
                  offset={[0, -15]}
                >
                  <MotionMarker
                    initial={{ scale: 0, y: -100 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0, y: 30 }}
                    transition={{ ...spring, delay: index * 0.05, duration: .3 }}
                  >
                    <MapPointIcon point={entry} />
                  </MotionMarker>
                </Marker>
              );
            })}
        </AnimatePresence>
      </MapComponent>
    ),
    [entries, isMapReady],
  );

  return (
    <CompanyContainer>
      <StyledFilterContainer>
        <BtnBlue text="Afficher les filtres" onClick={toggleFilters} />
      </StyledFilterContainer>
      <StyledFiltersContainer isFiltring={isFiltring}>
        <StyledFiltersHeader flow={FlowEnum.COLUMN}>
          <MainTitle title="Filtres" subtitle="" />
          <Icon onClick={toggleFilters}>
            <Close />
          </Icon>
        </StyledFiltersHeader>
        <Grid
          gap={32}
          flow={FlowEnum.ROW}
          style={{ gridAutoRows: 'max-content', padding: '2rem' }}
        >
          <Button color="primary" onClick={() => setEntries(defaultEntries)}>
            Réinitialiser les filtres
          </Button>
          <CustomSelect
            title="Catégorie"
            values={['resto', 'shop', 'business']}
            onChange={(_value: any) => filter('type', _value)}
          />
          <RadioMultiple
            values={radioPrice}
            title="Prix"
            onChange={(_value: any) => filter('price', _value)}
          />
          <RadioMultiple
            values={radioTags}
            title="Tags"
            onChange={(_value: any) => {
              filter('tags', _value);
              console.log('values', _value);
            }}
          />
        </Grid>
      </StyledFiltersContainer>
      <AnimatePresence>{renderMap}</AnimatePresence>
    </CompanyContainer>
  );
};

export default Map;
