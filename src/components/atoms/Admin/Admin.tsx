import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import styled from 'styled-components';

interface Props {}

const StyledAdminBlock = styled.div `
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-right: 47px;
`;

const StyledNameBlock = styled.div `
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 14px;
`;

const StyledAvatar = styled(Avatar) `
    && {
        margin-right: 21px;
    }
`;

const StyledTypo = styled(Typography) `
    && {
        font-weight: 600;
        font-size: 18px;
        line-height: 1.2;
    }
`;

const Admin: React.FC<Props> = () => {
    return (
        <StyledAdminBlock>
            <StyledAvatar>C</StyledAvatar>
            <StyledNameBlock>
                <StyledTypo variant="h6">Chrystal</StyledTypo>
                Super admin
            </StyledNameBlock>
        </StyledAdminBlock>
    )
}

export default Admin
