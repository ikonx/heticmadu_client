import React from 'react';
import TextCard from '../../atoms/Text/Card/TextCard';
import ImgCard from '../../atoms/Text/Card/ImgCard';
import { Card, CardActionArea, CardContent } from '@material-ui/core';
import styled from 'styled-components';
import { PoiModel } from 'utils/models/pois.model';

export interface CardItemProps extends PoiModel {
  onClick?: () => void;
}

const CardContainer = styled(Card)`
  && {
    background: #ffffff;
    border: 1px solid #eaedf3;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: none;
    height: max-content;
  }
`;

const CardItem: React.FC<CardItemProps> = ({
  name,
  address,
  averagePrice,
  category,
  greenScore,
  images,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick}>
      <CardActionArea>
        <CardContent>
          <ImgCard image={images ? images[0] : 'https://source.unsplash.com/900x900/?food,green,vegan,bio'} />
          <TextCard
            name={name}
            address={address}
            averagePrice={averagePrice}
            category={category}
            greenScore={greenScore}
          />
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
};

export default CardItem;
