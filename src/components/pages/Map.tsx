import React, { useState, useMemo, useEffect, useContext } from 'react';
import ReactMapboxGl, { Marker, ZoomControl } from 'react-mapbox-gl';
import styled from 'styled-components';
import { Close } from '@material-ui/icons';
import { Button, LinearProgress } from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';

import MapPointIcon from 'components/atoms/MapPointIcon/MapPointIcon';
import BtnBlue from 'components/atoms/Buttons/BtnBlue';
import Grid, { FlowEnum } from 'components/atoms/Grid/Grid';
import MainTitle from 'components/atoms/Text/MainTitle';
import Icon from 'components/atoms/Icon/Icon';
import CustomSelect from 'components/atoms/Select/CustomSelect';
import RadioMultiple from 'components/atoms/Inputs/RadioMultiple/RadioMultiple';

import { radioPrice, radioTags } from 'utils/formsMocks/PoisForm';
import { filterType } from 'utils/filters/type.filter';
import { filterPrice } from 'utils/filters/price.filter';
import { filterTags } from 'utils/filters/tags.filter';
import { useHistory } from 'react-router-dom';
import CardItem, { CardItemProps } from 'components/molecules/Card/CardItem';
import PoisContext from 'contexts/pois/pois.context';

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

const StyledMotionPreviewCard = styled(motion.div)`
  width: 250px;
  position: absolute;
  bottom: 2rem;
  right: 4rem;
  z-index: 4;
`;

const MotionMarker = styled(motion.div)`
  cursor: pointer;
`;

const Map: React.FC<Props> = () => {
  const [defaultEntries, setDefaultEntries] = useState<CardItemProps[]>([]);
  const [entries, setEntries] = useState<CardItemProps[]>([]);
  const [isMapReady, setMapReady] = useState<any>(false);
  const [isFiltring, setFiltring] = useState<boolean>(false);
  const [previewCardData, setPreviewCardData] = useState<CardItemProps | null>(
    null,
  );
  const { pois, fetchingPois } = useContext(PoisContext);

  // eslint-disable-next-line
  useEffect(() => {
    setDefaultEntries(pois);
    setEntries(pois);
  }, [pois]);

  const toggleFilters = () => {
    setFiltring(!isFiltring);
  };

  const history = useHistory();

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
    // TODO Manage multiple filters
    // TODO Manage selected filters && or || ????????????
    let newEntries: any[] = [...defaultEntries];
    switch (filter_key) {
      case 'category':
        if (filter_value === '') {
          // reset ?
        } else {
          newEntries = filterType(newEntries, filter_key, filter_value);
        }
        break;
      case 'averagePrice':
        newEntries =
          filter_value.length > 0
            ? filterPrice(newEntries, filter_key, filter_value)
            : defaultEntries;
        break;
      // TODO check DATA BASE SCHEMA
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
        // eslint-disable-next-line
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100%',
          width: '100vw',
        }}
        movingMethod="flyTo"
        center={[2.349014, 48.864716]}
        zoom={[12]}
        onStyleLoad={() => setMapReady(true)}
        onClick={() => {
          setPreviewCardData(null);
        }}
      >
        <ZoomControl />
        <AnimatePresence>
          {isMapReady &&
            entries.map((entry, index) => {
              return (
                <Marker
                  key={entry.id}
                  coordinates={[entry.longitude, entry.latitude] || [0, 0]}
                  anchor="bottom"
                  offset={[0, -15]}
                  onClick={() => {
                    setPreviewCardData(entry);
                  }}
                >
                  <MotionMarker
                    initial={{ scale: 0, y: -100 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0, y: 30 }}
                    whileHover={{ scale: 1.1 }}
                    key={entry.id}
                    transition={{
                      ...spring,
                      delay: index * 0.05,
                      duration: 0.3,
                    }}
                  >
                    <MapPointIcon point={entry} />
                  </MotionMarker>
                </Marker>
              );
            })}
        </AnimatePresence>
      </MapComponent>
    ),
    // eslint-disable-next-line
    [entries, isMapReady, pois],
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
            values={[
              { label: 'Tous', value: '', key: 'all' },
              { label: 'Restaurant', value: 'resto', key: 'resto' },
              { label: 'Commerce', value: 'shop', key: 'shop' },
              { label: 'Business', value: 'business', key: 'business' },
            ]}
            onChange={(_value: any) => filter('category', _value)}
          />
          <RadioMultiple
            values={radioPrice}
            title="Prix"
            onChange={(_value: any) => filter('averagePrice', _value)}
          />
          <RadioMultiple
            values={radioTags}
            title="Tags"
            onChange={(_value: any) => {
              filter('tags', _value);
            }}
          />
        </Grid>
      </StyledFiltersContainer>
      <AnimatePresence>
        {previewCardData && (
          <StyledMotionPreviewCard
            key={previewCardData.id}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              ...spring,
              duration: 0.5,
            }}
          >
            <CardItem
              {...previewCardData}
              onClick={() => {
                history.push(`pois/edit/${previewCardData.id}`);
              }}
            />
          </StyledMotionPreviewCard>
        )}
      </AnimatePresence>
      {/* TODO: clean loader */}
      {fetchingPois && (
        <LinearProgress
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 5,
            width: '100%',
          }}
        />
      )}
      <AnimatePresence>{renderMap}</AnimatePresence>
    </CompanyContainer>
  );
};

export default Map;
