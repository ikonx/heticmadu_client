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
  image: string;
  images: string[];
  title: string;
  description?: string;
  onClick?: () => void;
}

const CardContainer = styled(Card)`
  && {
    margin: 0 8px 24px;
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
  image,
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
