import React from 'react';
import styled from 'styled-components';
import CardMedia from '@material-ui/core/CardMedia';

interface Props {
  image: string;
}

const ImgContainer = styled(CardMedia)`
  && {
    height: 150px;
  }
`;

const ImgCard: React.FC<Props> = ({ image }) => {
  return <ImgContainer image={image} />;
};

export default ImgCard;
