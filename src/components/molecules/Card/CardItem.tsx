import React from 'react'
import TextCard from "../../atoms/Text/Card/TextCard";
import ImgCard from "../../atoms/Text/Card/ImgCard";
import {Card, CardActionArea, CardContent } from '@material-ui/core';
import styled from "styled-components";

export interface CardItemProps {
    name: string,
    adress: string,
    price: string,
    type: string,
    score: number,
    image: string,
    title: string
}

const CardContainer = styled(Card) `
    && {
        margin: 0 8px 24px;
        background: #FFFFFF;
        border: 1px solid #EAEDF3;
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: none;
        height: max-content;
    }
`;

const CardItem: React.FC<CardItemProps> = ({name, adress, price, type, score, image, title}) => {
    return (
        <CardContainer>
            <CardActionArea>
                <CardContent>
                    <ImgCard 
                    image={image}
                    title={title}
                    />
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
    )
}

export default CardItem