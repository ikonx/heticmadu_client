import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMapboxGl from 'react-mapbox-gl';
import { Grid as GoogleGrid } from '@material-ui/core';
import Grid, { FlowEnum } from 'components/atoms/Grid/Grid';
import CardItem, { CardItemProps } from '../molecules/Card/CardItem';

import PageHeader from 'components/molecules/PageHeader/PageHeader';
import ViewEntity from 'components/organisms/ViewEntity/ViewEntity';
import { EntitiesEnum } from 'utils/enums/Entity.enum';
import { GridContainer, StyledIconBack } from 'utils/styles/Globals';
import { useLocation, useHistory } from 'react-router-dom';
import BtnRed from "../atoms/Buttons/BtnRed";

interface Props {}

const PoiContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 72px);
  margin: 0;
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
  height: ${window.innerHeight - (72 + 118)}px;
  padding: 0 2rem;
`;


const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOXGL_KEY || '',
});

const Pois: React.FC<Props> = () => {
  const [selectedPoi, setPoi] = useState<CardItemProps | null>(null);

  const dataArray: CardItemProps[] = [
    {
      id: 'QZFQZF3ZQF',
      images: [
        'https://source.unsplash.com/900x900/?food,gree,vegan,bio',
        'https://source.unsplash.com/1600x900/?food',
        'https://source.unsplash.com/1600x900/?food,snack,fastfood',
      ],
      title: 'Titre test',
      name: 'Chez vico',
      adress: '12 rue test',
      price: '€€€',
      type: 'Restaurant',
      score: 8.6,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
      longitude: '2.383572',
      latitude: '48.868671',
    },
    {
      id: 'QZFQZF3ZQF',
      images: [
        'https://source.unsplash.com/1200x900/?food,gree,vegan,bio',
        'https://source.unsplash.com/1600x900/?food',
        'https://source.unsplash.com/1600x900/?food,snack,fastfood',
      ],
      title: 'Titre test',
      name: 'Chez vico 1',
      adress: '12 rue test',
      price: '€€€',
      type: 'Restaurant',
      score: 8.6,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
      longitude: '2.383572',
      latitude: '48.828641',
    },
    {
      id: 'QZFQZF3ZQF',
      images: [
        'https://source.unsplash.com/1300x900/?food,gree,vegan,bio',
        'https://source.unsplash.com/1600x900/?food',
        'https://source.unsplash.com/1600x900/?food,snack,fastfood',
      ],
      title: 'Titre test',
      name: 'Chez vico 2',
      adress: '12 rue test',
      price: '€€€',
      type: 'Restaurant',
      score: 8.6,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
      longitude: '2.383572',
      latitude: '48.868671',
    },
    {
      id: 'QZFQZF3ZQF',
      images: [
        'https://source.unsplash.com/1100x900/?food,gree,vegan,bio',
        'https://source.unsplash.com/1600x900/?food',
        'https://source.unsplash.com/1600x900/?food,snack,fastfood',
      ],
      title: 'Titre test',
      name: 'Chez vico 3',
      adress: '12 rue test',
      price: '€€€',
      type: 'Restaurant',
      score: 8.6,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
      longitude: '2.383572',
      latitude: '48.868671',
    },
    {
      id: 'QZFQZF3ZQF',
      images: [
        'https://source.unsplash.com/1300x900/?food,gree,vegan,bio',
        'https://source.unsplash.com/1600x900/?food',
        'https://source.unsplash.com/1600x900/?food,snack,fastfood',
      ],
      title: 'Titre test',
      name: 'Chez vico 1',
      adress: '12 rue test',
      price: '€€€',
      type: 'Restaurant',
      score: 8.6,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
      longitude: '2.383572',
      latitude: '48.868671',
    },
    {
      id: 'QZFQZF3ZQF',
      images: [
        'https://source.unsplash.com/1230x900/?food,gree,vegan,bio',
        'https://source.unsplash.com/1600x900/?food',
        'https://source.unsplash.com/1600x900/?food,snack,fastfood',
      ],
      title: 'Titre test',
      name: 'Chez vico 2',
      adress: '12 rue test',
      price: '€€€',
      type: 'Restaurant',
      score: 8.6,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
      longitude: '2.383572',
      latitude: '48.868671',
    },
    {
      id: 'QZFQZF3ZQF',
      images: [
        'https://source.unsplash.com/1550x900/?food,gree,vegan,bio',
        'https://source.unsplash.com/1600x900/?food',
        'https://source.unsplash.com/1600x900/?food,snack,fastfood',
      ],
      title: 'Titre test',
      name: 'Chez vico 3',
      adress: '12 rue test',
      price: '€€€',
      type: 'Restaurant',
      score: 8.6,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
      longitude: '2.383572',
      latitude: '48.868671',
    },
    {
      id: 'QZFQZF3ZQF',
      images: [
        'https://source.unsplash.com/1610x900/?food,gree,vegan,bio',
        'https://source.unsplash.com/1600x900/?food',
        'https://source.unsplash.com/1600x900/?food,snack,fastfood',
      ],
      title: 'Titre test',
      name: 'Chez vico final',
      adress: '12 rue zfkzf',
      price: '€€€€€',
      type: 'Restaurant',
      score: 9.6,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
      longitude: '2.383572',
      latitude: '48.868671',
    },
  ];
  
  const { pathname } = useLocation();
  const history = useHistory();
  const isAddingRoute =
    pathname === '/pois/create' ||
    (pathname.match('/pois/edit') && selectedPoi);

  return (
    <PoiContainer>
      <GridContainer container>
        <LeftColumn item xs={7}>
          {!isAddingRoute ? (
            <>
              <PageHeader
                title="POI"
                text="Créer une poi"
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
                onClick={() => {
                  setPoi(null);
                  history.goBack();
                }}
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
                  onClick={() => {
                    setPoi(null);
                    history.goBack();
                  }}
                  style={{
                    cursor: 'pointer'
                  }}
                >
                  <StyledIconBack />
                  <span>Retour</span>
                </div>
                <BtnRed text="Supprimer une POI" onClick={() => console.log('OK')}/>
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
          <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: 'calc(100vh - 72px)',
              width: '100%',
              maxWidth: 'calc(100vw - 280px)',
            }}
            movingMethod="flyTo"
            center={[
              parseFloat(selectedPoi?.longitude || '2.3488'),
              parseFloat(selectedPoi?.latitude || '48.8534'),
            ]}
            zoom={selectedPoi ? [18] : [11.25]}
          />
        </GoogleGrid>
      </GridContainer>
    </PoiContainer>
  );
};

export default Pois;
