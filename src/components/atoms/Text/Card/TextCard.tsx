import React from 'react'
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import EcoIcon from '@material-ui/icons/Eco';

interface Props {
    name: string,
    adress: string,
    price: string,
    type: string,
    score: number
}

const TextContainer = styled.div`
    text-align: left;
`;

const TitlePOI = styled.h3 `
    font-weight: 600;
    font-size: 15px;
    color: #1A1626;
    margin: 12px 0 0;
`;

const Text = styled(Typography)`
    && {
        font-size: 14px;
        color: #A4A6B3;
        line-height: 1.4;
    }
`;

const BlockDesc = styled.div`
    margin: 8px 0 20px;
`;

const BlockScore = styled.div`
    background: #6FCF97;
    border: 1px solid #27AE60;
    box-sizing: border-box;
    border-radius: 17px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: max-content;
    padding: 0 8px;
    color: white;
    font-size: 14px;
`;

const TextCard: React.FC<Props> = ({ name, adress, price, type , score }) => {
    return (
        <TextContainer>
            <TitlePOI>
                {name}
            </TitlePOI>
            <BlockDesc>
                <Text variant="subtitle1">
                    {adress}
                </Text>
                <Text variant="subtitle1">
                    {price} | {type}
                </Text>
            </BlockDesc>
            <BlockScore>
                <EcoIcon/>
                {score}
            </BlockScore>
        </TextContainer>
    )
}

export default TextCard
