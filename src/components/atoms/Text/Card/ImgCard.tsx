import React from 'react'
import styled from "styled-components";
import CardMedia from '@material-ui/core/CardMedia';

interface Props {
    image: string,
    title: string
}

const ImgContainer = styled(CardMedia)`
    && {
        height: 150px;
    }
`;

const ImgCard: React.FC<Props> = ({image, title}) => {
    return (
        <ImgContainer
        image={image}
        title={title}
        />
    )
}

export default ImgCard
