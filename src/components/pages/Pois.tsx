import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMapboxGl from 'react-mapbox-gl';
import { Grid as GoogleGrid } from '@material-ui/core';
import Grid, { FlowEnum } from 'components/atoms/Grid/Grid';
import CardItem, { CardItemProps } from '../molecules/Card/CardItem';

import PageHeader from 'components/molecules/PageHeader/PageHeader';
import ViewEntity from 'components/organisms/ViewEntity/ViewEntity';
import { EntitiesEnum } from 'utils/enums/Entity.enum';
import { GridContainer, ScrollableContent } from 'utils/styles/Globals';
import { useLocation, useHistory } from 'react-router-dom';

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
                  gridTemplateColumns: 'max-content',
                  cursor: 'pointer',
                  width: 'fit-content',
                }}
                gap={24}
                flow={FlowEnum.COLUMN}
              >
                <svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.9097 13.6072C8.15706 13.3583 8.2959 13.0217 8.2959 12.6709C8.2959 12.32 8.15706 11.9834 7.9097 11.7346L3.20833 6.9668L7.9097 2.26542C8.15706 2.01659 8.2959 1.67999 8.2959 1.32913C8.2959 0.978274 8.15706 0.641672 7.90971 0.392841C7.78624 0.268363 7.63936 0.169562 7.47752 0.102138C7.31568 0.0347131 7.1421 -5.04343e-08 6.96677 -5.80979e-08C6.79145 -6.57614e-08 6.61787 0.0347131 6.45603 0.102138C6.29419 0.169562 6.1473 0.268363 6.02384 0.392841L0.392817 6.02387C0.268339 6.14733 0.169538 6.29421 0.102114 6.45605C0.0346894 6.61789 -2.43937e-05 6.79148 -2.44013e-05 6.9668C-2.4409e-05 7.14212 0.0346894 7.3157 0.102114 7.47754C0.169538 7.63938 0.268339 7.78627 0.392817 7.90973L6.02384 13.6072C6.1473 13.7316 6.29419 13.8304 6.45603 13.8979C6.61787 13.9653 6.79145 14 6.96677 14C7.14209 14 7.31568 13.9653 7.47752 13.8979C7.63936 13.8304 7.78624 13.7316 7.9097 13.6072Z"
                    fill="black"
                  />
                </svg>
                <span>Retour</span>
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
