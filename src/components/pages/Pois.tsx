import React, { useState, useContext, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import ReactMapboxGl, { Marker, ZoomControl } from 'react-mapbox-gl';
import { Grid as GoogleGrid, LinearProgress } from '@material-ui/core';
import Grid, { FlowEnum } from 'components/atoms/Grid/Grid';
import CardItem, { CardItemProps } from '../molecules/Card/CardItem';

import { Colors } from 'utils/styles';

import PageHeader from 'components/molecules/PageHeader/PageHeader';
import ViewEntity from 'components/organisms/ViewEntity/ViewEntity';
import { EntitiesEnum } from 'utils/enums/Entity.enum';
import { GridContainer, StyledIconBack } from 'utils/styles/Globals';
import { useLocation, useHistory } from 'react-router-dom';
import BtnRed from '../atoms/Buttons/BtnRed';
import PoisContext from 'contexts/pois/pois.context';
import MapPointIcon from 'components/atoms/MapPointIcon/MapPointIcon';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import TitleModal from 'components/atoms/Text/TitleModal';
import TextModal from 'components/atoms/Text/TextModal';
import { getPoi } from 'utils/http';
import { AnimatePresence } from 'framer-motion';
import { MotionMarker } from './Map';

interface Props {}

const PoiContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 72px);
  margin: 0;
  position: relative;
`;

const LeftColumn = styled(GoogleGrid)`
  && {
    // padding: 2rem 2rem 0;
  }
`;

const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  overflow: auto;
  height: ${window.innerHeight - (72 + 160)}px;
  padding: 0 2rem 10rem;
`;

const MapComponent = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOXGL_KEY || '',
});

const MySwal = withReactContent(Swal);

const Pois: React.FC<Props> = () => {
  const [selectedPoi, setPoi] = useState<CardItemProps | null>(null);
  const [defaultEntries, setDefaultEntries] = useState<CardItemProps[]>([]);
  const [entries, setEntries] = useState<CardItemProps[]>([]);
  const { pois, fetchingPois, deletePoi } = useContext(PoisContext);
  const [isMapReady, setMapReady] = useState<any>(false);
  const [previewCardData, setPreviewCardData] = useState<CardItemProps | null>(
    null,
  );

  const spring = {
    type: 'spring',
    damping: 900,
    stiffness: 600,
  };

  useEffect(() => {
    setDefaultEntries(pois);
    setEntries(pois);
    console.log("pois", pois);
    
    // eslint-disable-next-line
  }, [pois]);

  const handleOpen = () => {
    MySwal.fire({
      title: <TitleModal title="Supprimer la POI" />,
      html: (
        <TextModal textContent="Êtes-vous sûr de vouloir définitivement supprimer cette POI ? Attention cette action est irréversible." />
      ),
      showCancelButton: true,
      confirmButtonColor: Colors.redDelete,
      cancelButtonColor: Colors.blue,
      confirmButtonText: 'Suprimmer',
      cancelButtonText: 'Annuler',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        MySwal.fire('Supprimé !', 'Cette POI à bien été supprimé');
        setPoi(null);
        deletePoi(selectedPoi?.id);
        history.goBack();
      }
    });
  };

  const dataArray: CardItemProps[] = [...pois];

  const { pathname } = useLocation();
  const history = useHistory();
  const isAddingRoute =
    pathname === '/pois/create' ||
    (pathname.match('/pois/edit') && selectedPoi);

  useEffect(() => {
    if (pathname.match('/pois/edit') && !selectedPoi) {
      const poiId: string | number = pathname && pathname.split('/').pop()!;
      poiId &&
        getPoi(poiId).then((res: any) => {
          if (res.status === 200) {
            setPoi(res.data);
          }
        });
    }
  }, []);

  const renderMap = useMemo(
    () => (
      <MapComponent
        // eslint-disable-next-line
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          width: '100vw',
          height: 'calc(100vh - 72px)',
        }}
        movingMethod="flyTo"
        center={[
          selectedPoi?.longitude || 2.3488,
          selectedPoi?.latitude || 48.8534,
        ]}
        zoom={selectedPoi ? [18] : [11.25]}
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
    <PoiContainer>
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
      <GridContainer container>
        <LeftColumn item xs={7}>
          {!isAddingRoute ? (
            <>
              <PageHeader
                title="POI"
                text="Créer une POI"
                subtitle="CARD"
                link="/form/pois"
              />
              <ContainerList>
                {dataArray.map((poi: CardItemProps, i) => (
                  <CardItem
                    {...poi}
                    key={i}
                    onClick={() => {
                      history.push(`pois/edit/${poi.id}`);
                      setPoi(poi);
                    }}
                  />
                ))}
              </ContainerList>
            </>
          ) : (
            <>
              <Grid
                style={{
                  padding: '2rem',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
                gap={24}
                flow={FlowEnum.COLUMN}
              >
                <div
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    history.goBack();
                    setPoi(null);
                  }}
                >
                  <StyledIconBack />
                  <span>Retour</span>
                </div>
                <BtnRed text="Supprimer un POI" onClick={handleOpen} />
              </Grid>
              <ViewEntity
                entity={EntitiesEnum.POI}
                fields={[]}
                images={selectedPoi?.images || []}
                defaultData={selectedPoi || {}}
              />
            </>
          )}
        </LeftColumn>
        <GoogleGrid item xs={5}>
          {renderMap}
        </GoogleGrid>
      </GridContainer>
    </PoiContainer>
  );
};

export default Pois;
