import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

interface Props {}

const TitleContainer = styled.div ``;

const TitleText = styled.h2 `
    font-size: 24px;
    color: #000000;
    margin: 0;
`;

const StyledTypography = styled(Typography) `
    font-size: 15px;
    line-height: 23px;
    letter-spacing: 0.22px;
    color: #A4A6B3;
`;


const AdminText: React.FC<Props> = () => {
    return (
        <TitleContainer>
            <TitleText>Connexion</TitleText>
            <StyledTypography variant="subtitle1">Accéder à votre espace privé</StyledTypography>
        </TitleContainer>
    )
}

export default AdminText;
