import React from 'react';
import TextCard from '../../atoms/Text/Card/TextCard';
import ImgCard from '../../atoms/Text/Card/ImgCard';
import { Card, CardActionArea, CardContent } from '@material-ui/core';
import styled from 'styled-components';

export interface CardItemProps {
  name: string;
  adress: string;
  price: string;
  type: string;
  score: number;
  images: string[];
  title: string;
  description?: string;
  latitude: string;
  longitude: string;
  onClick?: () => void;
  id?: string | number;
  center?: number[];
  zoom?: number;
  pitch?: number;
  tags?: string[];
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
  adress,
  price,
  type,
  score,
  images,
  title,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick}>
      <CardActionArea>
        <CardContent>
          <ImgCard image={images[0]} title={title} />
          <TextCard
            name={name}
            adress={adress}
            price={price}
            type={type}
            score={score}
          />
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
};

export default CardItem;
