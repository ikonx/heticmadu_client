import React, { useRef, useEffect, useState } from 'react';
import styled from "styled-components";
import ReactMapboxGl from 'react-mapbox-gl';
import { Grid } from "@material-ui/core";
import CardItem, { CardItemProps } from "../molecules/Card/CardItem";

import imgPOI from "../../assets/img/poi_img.jpg";
import PageHeader from 'components/molecules/PageHeader/PageHeader';

interface Props {}

const PoiContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 64px); 
  margin: 0;
`;

const LeftColumn = styled(Grid)`
  && {
    padding: 2rem 2rem 0;
  }
`;

const ContainerList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: auto;
    height: ${ window.innerHeight - (72 + 115)}px;
`;

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOXGL_KEY || '',
});

const Pois: React.FC<Props> = () => {

  const dataArray:CardItemProps[] = [
    {
      "image" : imgPOI,
      "title" : "Titre test",
      "name" : "Chez vico",
      "adress" : "12 rue test",
      "price" : "€€€",
      "type" : "Restaurant",
      "score" : 8.6
    },
    {
      "image" : imgPOI,
      "title" : "Titre test",
      "name" : "Chez vico 1",
      "adress" : "12 rue test",
      "price" : "€€€",
      "type" : "Restaurant",
      "score" : 8.6
   },
    {
      "image" : imgPOI,
      "title" : "Titre test",
      "name" : "Chez vico 2",
      "adress" : "12 rue test",
      "price" : "€€€",
      "type" : "Restaurant",
      "score" : 8.6
    },
    {
      "image" : imgPOI,
      "title" : "Titre test",
      "name" : "Chez vico 3",
      "adress" : "12 rue test",
      "price" : "€€€",
      "type" : "Restaurant",
      "score" : 8.6
    },
    {
      "image" : imgPOI,
      "title" : "Titre test",
      "name" : "Chez vico 1",
      "adress" : "12 rue test",
      "price" : "€€€",
      "type" : "Restaurant",
      "score" : 8.6
    },
    {
      "image" : imgPOI,
      "title" : "Titre test",
      "name" : "Chez vico 2",
      "adress" : "12 rue test",
      "price" : "€€€",
      "type" : "Restaurant",
      "score" : 8.6
    },
    {
      "image" : imgPOI,
      "title" : "Titre test",
      "name" : "Chez vico 3",
      "adress" : "12 rue test",
      "price" : "€€€",
      "type" : "Restaurant",
      "score" : 8.6
    }
  ];  

  return (
    <PoiContainer>
        <Grid container>
            <LeftColumn item xs={7}>
              <PageHeader title="POI" text="Créer une POI" subtitle="CARD" link="/"/>
              <ContainerList>
                {
                  dataArray.map((item:CardItemProps) => <CardItem {...item} />)
                }
              </ContainerList>
            </LeftColumn>
            <Grid item xs={5}>
                <Map
                  style="mapbox://styles/mapbox/streets-v9"
                  containerStyle={{
                    minHeight: 'calc(100vh - 70px)',
                    width: '100%',
                    maxWidth: 'calc(100vw - 280px)',
                  }}
                  movingMethod="flyTo"
                  center={[2.349014, 48.864716]}
                />
            </Grid>
        </Grid>
    </PoiContainer>
  );
};

export default Pois;
