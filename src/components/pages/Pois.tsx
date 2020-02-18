import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMapboxGl from 'react-mapbox-gl';
import { Grid } from '@material-ui/core';
import CardItem, { CardItemProps } from '../molecules/Card/CardItem';
import { useHistory } from "react-router-dom";

import imgPOI from '../../assets/img/poi_img.jpg';
import PageHeader from 'components/molecules/PageHeader/PageHeader';
import ViewEntity from 'components/organisms/ViewEntity/ViewEntity';
import { EntitiesEnum } from 'utils/enums/Entity.enum';
import { GridContainer, ScrollableContent } from 'utils/styles/Globals';

interface Props {}

const PoiContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 72px);
  margin: 0;
`;

const LeftColumn = styled(Grid)`
  && {
    // padding: 2rem 2rem 0;
  }
`;

const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: auto;
  height: ${window.innerHeight - (72 + 118)}px;
  padding: 0 2rem;
`;

const StyledScrollableContent = styled(ScrollableContent)`
  padding: 0;
`;

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOXGL_KEY || '',
});

const Pois: React.FC<Props> = () => {
  const [state, setState] = useState('view');
  const [selectedPoi, setPoi] = useState<CardItemProps | null>(null);

  const dataArray: CardItemProps[] = [
    {
      image: imgPOI,
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
    },
    {
      image: imgPOI,
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
    },
    {
      image: imgPOI,
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
    },
    {
      image: imgPOI,
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
    },
    {
      image: imgPOI,
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
    },
    {
      image: imgPOI,
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
    },
    {
      image: imgPOI,
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
    },
    {
      image: imgPOI,
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
    },
  ];
  const history = useHistory();

  const onAddItem = () => {
    setState('add');
    history.push('/pois/form')
  };

  return (
    <PoiContainer>
      <GridContainer container>
        <LeftColumn item xs={8}>
          <PageHeader
            title="POI"
            text="Créer une poi"
            subtitle="CARD"
            onAddItem={onAddItem}
          />
          <StyledScrollableContent>
            {!selectedPoi ? (
              <ContainerList>
                {dataArray.map((poi: CardItemProps, i) => (
                  <CardItem {...poi} key={i} onClick={() => setPoi(poi)} />
                ))}
              </ContainerList>
            ) : (
              <ViewEntity
                entity={EntitiesEnum.POI}
                fields={[]}
                images={selectedPoi.images || []}
                defaultData={selectedPoi}
              />
            )}
          </StyledScrollableContent>
        </LeftColumn>
        <Grid item xs={4}>
          <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: 'calc(100vh - 72px)',
              width: '100%',
              maxWidth: 'calc(100vw - 280px)',
            }}
            movingMethod="flyTo"
            center={[2.349014, 48.864716]}
          />
        </Grid>
      </GridContainer>
    </PoiContainer>
  );
};

export default Pois;
